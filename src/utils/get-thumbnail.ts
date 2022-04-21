import fs from 'fs';
import {PRODUCTS_DIRECTORY} from '../constants';

function validateThumbnailFolder(folder: string[], product: string): void {
  if (folder.length === 0) {
    throw new Error(`Thumbnail folder empty for product: ${product}`);
  }

  if (folder.length > 1) {
    throw new Error(`Too many thumbnails for product: ${product}`);
  }
}

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
