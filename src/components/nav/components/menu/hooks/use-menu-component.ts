import {useAtom} from 'jotai';
import {useEffect, useState} from 'react';
import {menuAtom, MenuItem} from '../../../../../atoms/menuAtom';

interface UseMenuComponent {
  menu: MenuItem[];
  borders: [number, number][];
}

export function useMenuComponent(): UseMenuComponent {
  const [menu] = useAtom(menuAtom);
  const [borders, setBorders] = useState([]);

  useEffect(() => {
    const b = [];

    // first build
    menu.forEach((_item, i) => {
      b.push([false, true]);

      if (i === 0) {
        b[i][0] = false;
      } else if (i === menu.length - 1) {
        b[i][1] = false;
      }
    });

    // prevent overlapping borders for dropdown menus
    menu.forEach((item, i) => {
      if (item?.dropdown) {
        const prev = menu[i - 1];
        const next = menu[i + 1];

        if (prev) {
          b[i - 1][1] = false;
        }

        if (next) {
          b[i + 1][0] = false;
        }

        b[i] = [true, true];
      }
    });

    setBorders(b);
  }, [menu]);

  return {
    menu,
    borders,
  };
}
