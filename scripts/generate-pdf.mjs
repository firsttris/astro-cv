// Renders the built site to PDF so recruiters get a consistent download,
// independent of their browser's print settings.
// Runs after `astro build` and writes the PDFs into dist/.
import { createServer } from "node:http";
import { readFile } from "node:fs/promises";
import { extname, join, normalize } from "node:path";
import { chromium } from "playwright";

const DIST = new URL("../dist/", import.meta.url).pathname;

const PDFS = [
  { path: "/de/", file: "Tristan-Teufel-Lebenslauf.pdf" },
  { path: "/en/", file: "Tristan-Teufel-CV.pdf" },
];

const MIME_TYPES = {
  ".html": "text/html; charset=utf-8",
  ".css": "text/css",
  ".js": "text/javascript",
  ".svg": "image/svg+xml",
  ".png": "image/png",
  ".jpg": "image/jpeg",
  ".webp": "image/webp",
  ".woff": "font/woff",
  ".woff2": "font/woff2",
};

const server = createServer(async (req, res) => {
  let pathname = normalize(decodeURIComponent(new URL(req.url, "http://x").pathname));
  if (pathname.endsWith("/")) pathname += "index.html";
  try {
    const body = await readFile(join(DIST, pathname));
    res.writeHead(200, { "Content-Type": MIME_TYPES[extname(pathname)] ?? "application/octet-stream" });
    res.end(body);
  } catch {
    res.writeHead(404).end();
  }
});
await new Promise((resolve) => server.listen(0, "127.0.0.1", resolve));
const baseUrl = `http://127.0.0.1:${server.address().port}`;

// PDF_CHROMIUM_PATH allows using a preinstalled Chromium instead of `npx playwright install chromium`
const browser = await chromium.launch({ executablePath: process.env.PDF_CHROMIUM_PATH || undefined });
try {
  for (const { path, file } of PDFS) {
    const page = await browser.newPage();
    await page.emulateMedia({ media: "print" });
    await page.goto(baseUrl + path, { waitUntil: "networkidle" });
    await page.evaluate(() => document.fonts.ready);
    await page.pdf({ path: join(DIST, file), preferCSSPageSize: true, printBackground: true });
    await page.close();
    console.log(`[pdf] ${file}`);
  }
} finally {
  await browser.close();
  server.close();
}
