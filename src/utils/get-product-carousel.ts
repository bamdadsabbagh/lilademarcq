import fs from 'fs';
import {CarouselImage} from '../components/carousel/carousel.component';

const getExtension = (name: string): string => name.split('.').pop();

export function getProductCarousel(slug: string): CarouselImage[] {
  try {
    const path = '/images/' + slug;

    const files = fs.readdirSync('public' + path);

    const images = files.filter((file) => {
      const extension = getExtension(file);
      return extension === 'jpg' || extension === 'png';
    });

    // http://localhost:3000/_next/image?url=%2Fimages%2Fobjets-isihla%2Fisihla-lila-demarcq-design-ceramic-work-metal-72DPI-1.jpg&w=1920&q=95
    const carousel: CarouselImage[] = [];

    images.forEach((image) => {
      const extension = getExtension(image);
      const caption = image.replace(`.${extension}`, '.txt');

      try {
        const result = fs.readFileSync(`public${path}/${caption}`, 'utf8');

        carousel.push({
          image: `${path}/${image}`,
          caption: result.replace('\n', ''),
        });
      } catch {
        carousel.push({
          image: `${path}/${image}`,
        });
      }
    });

    return carousel;
  } catch {
    return [];
  }
}
