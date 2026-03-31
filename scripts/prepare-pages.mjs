import { copyFile, writeFile } from 'node:fs/promises';
import { dirname, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';

const currentDir = dirname(fileURLToPath(import.meta.url));
const browserDir = resolve(currentDir, '..', 'dist', 'pryectoTest', 'browser');

await copyFile(resolve(browserDir, 'index.html'), resolve(browserDir, '404.html'));
await writeFile(resolve(browserDir, '.nojekyll'), '');
