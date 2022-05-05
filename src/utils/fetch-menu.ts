import {fetchContentful} from './fetch-contentful';
import {MENU} from '../constants';
import {MyObjectsResponse, queryMyObjects} from './fetch-my-objects';

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
  const response = await fetchContentful<MyObjectsResponse>(queryMyObjects);

  const menu = MENU;
  const objectMenu = menu.find((item) => item.slug === '/objets');
  const objectsDropdown = response.myObjectsCollection.items[0].objectsCollection.items;

  // append base route
  objectsDropdown.forEach((item) => {
    item.slug = `/objets/${item.slug}`;
  });

  // append dropdown
  objectMenu.dropdown = objectsDropdown;

  return menu;
}
