import { readFileSync } from 'fs';
import { resolve } from 'path';

const packageJsonPath = resolve('package.json');
const packageJson = JSON.parse(readFileSync(packageJsonPath, 'utf-8'));
export const version = packageJson.version;