import { getLangFromUrl } from "./i18n/utils";

export type MDXFile = {
  frontmatter: {
    locale: string;
    name: string;
  };
  default: () => Element;
};

export const importMdx = ({
  pathname,
  filename,
}: {
  pathname: string;
  filename: string;
}) => {
  const language = getLangFromUrl(pathname);
  const matches = import.meta.glob("./mdx/**/*.mdx", { eager: true });
  const values = Object.values(matches) as Array<MDXFile>;
  const result = values.find(
    (value) =>
      value.frontmatter.locale === language &&
      value.frontmatter.name === filename
  );
  if (!result) {
    throw new Error(`No MDX file found for ${filename} in ${language}`);
  }
  return result.default;
};
