import fs from 'fs';
import path from 'path';

export function getDirectories(target: string): string[] {
  return fs.readdirSync(target).filter((file) => fs.statSync(path.join(target, file)).isDirectory());
}
