import {PRODUCTS_DIRECTORY} from '../constants';
import {getDirectories} from './get-directories';

export function getProductSlugs(): string[] {
  return getDirectories(PRODUCTS_DIRECTORY);
}
