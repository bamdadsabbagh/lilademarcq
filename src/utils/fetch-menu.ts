import {ObjectResponse} from './fetch-object';
import {fetchContentful} from './fetch-contentful';
import {MENU} from '../constants';

const queryObjects = `
query {
  objectCollection {
    items {
      slug
      position
      name
      menuName
    }
  }
}
`;

export interface MenuDropdownInterface {
  slug: string;
  position: number;
  name: string;
  menuName?: string;
}

interface MenuItem {
  name: string;
  slug: string;
  dropdown?: MenuDropdownInterface[];
}

export type MenuInterface = MenuItem[]

export async function fetchMenu(): Promise<MenuInterface> {
  const response = await fetchContentful<ObjectResponse>(queryObjects);

  const menu = MENU;
  const objectMenu = menu.find((item) => item.slug === '/objets');
  const objectsDropdown = response.objectCollection.items;

  // sort
  objectsDropdown.sort((a, b) => a.position - b.position);

  // append base route
  objectsDropdown.forEach((item) => {
    item.slug = `/objets/${item.slug}`;
  });

  // append dropdown
  objectMenu.dropdown = objectsDropdown;

  return menu;
}
