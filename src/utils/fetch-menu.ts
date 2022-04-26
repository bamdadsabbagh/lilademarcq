import {ObjectResponse} from './fetch-object';
import {fetchContentful} from './fetch-contentful';

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
  menuName: string | null;
}

interface MenuItem {
  name: string;
  slug: string;
  dropdown?: MenuDropdownInterface[];
}

export type MenuInterface = MenuItem[]

export async function fetchMenu(): Promise<MenuInterface> {
  const response = await fetchContentful<ObjectResponse>(queryObjects);

  const dropdownItems = response.objectCollection.items;

  dropdownItems.sort((a, b) => a.position - b.position);

  dropdownItems.forEach((item) => {
    item.slug = `/objets/${item.slug}`;
  });

  return [
    {name: 'home', slug: '/'},
    {name: 'à propos', slug: '/a-propos'},
    {name: 'objets', slug: '/objets', dropdown: dropdownItems},
    {name: 'poésie', slug: '/poesie'},
    {name: 'événements', slug: '/evenements'},
    {name: 'presse', slug: '/presse'},
    {name: 'livre d\'or', slug: '/livre-d-or'},
  ];
}
