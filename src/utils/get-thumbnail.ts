import fs from 'fs';
import {PRODUCTS_DIRECTORY} from '../constants';
import {validateThumbnailFolder} from './validate-thumbnail-folder';

export function getThumbnail(productSlug: string): string {
  try {
    const path = `${PRODUCTS_DIRECTORY}/${productSlug}/thumbnail`;
    const files = fs.readdirSync(path);

    validateThumbnailFolder(files, productSlug);

    return `/objets/${productSlug}/thumbnail/${files[0]}`;
  } catch (err) {
    throw new Error(err);
  }
}
