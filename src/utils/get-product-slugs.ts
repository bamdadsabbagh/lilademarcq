import fs from 'fs';
import path from 'path';
import {PRODUCTS_DIRECTORY} from '../constants';

const getDirectories = (target: string) => fs.readdirSync(target).filter((file) => fs.statSync(path.join(target, file)).isDirectory());

export function getProductSlugs(): string[] {
  return getDirectories(PRODUCTS_DIRECTORY);
}
