import fs from 'fs';
import {CarouselImage} from '../components/carousel/carousel.component';
import {getMarkdown} from './get-markdown';

const getExtension = (name: string): string => name.split('.').pop();

export function getProductCarousel(slug: string): CarouselImage[] {
  try {
    const path = `/objets/${slug}/images`;

    const files = fs.readdirSync(`public${path}`);

    const images = files.filter((file) => {
      const extension = getExtension(file);
      return extension === 'jpg' || extension === 'png';
    });

    const carousel: CarouselImage[] = [];

    images.forEach((image) => {
      const imageName = image.split('.')[0];
      const markdown = getMarkdown(imageName, `public${path}`);

      // @ts-expect-error initialize object
      const obj: CarouselImage = {};

      obj.image = `${path}/${image}`;

      if (markdown?.data?.description) {
        obj.caption = markdown.data.description;
      }

      if (markdown?.data?.position) {
        obj.position = Number(markdown.data.position);
      }

      carousel.push(obj);
    });

    // sort items in carousel by ascending position when it is defined
    carousel.sort((a, b) => {
      if (a.position && b.position) {
        // both defined
        return a.position - b.position;
      } else if (a.position) {
        // a defined
        return -1;
      } else if (b.position) {
        // b defined
        return 1;
      } else {
        // neither defined
        return 0;
      }
    });

    return carousel;
  } catch (error) {
    return [];
  }
}
