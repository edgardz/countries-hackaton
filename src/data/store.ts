import { createSignal, createResource } from 'solid-js';
import { createMutable } from 'solid-js/store';
import { Country } from './types';

export const pinned = createMutable({
  items: JSON.parse(window.localStorage.getItem('pinned') ?? '[]') as Country[],

  get count() {
    return this.items.length;
  },

  add(country) {
    if (this.items.length < 5) {
      this.items.push(country);
      window.localStorage.setItem('pinned', JSON.stringify(this.items));
    }
  },

  remove(code) {
    this.items = this.items.filter((i) => i.code !== code);
    window.localStorage.setItem('pinned', JSON.stringify(this.items));
  },

  clear() {
    this.items = [];
    window.localStorage.setItem('pinned', JSON.stringify(this.items));
  },
});

export const [search, setSearch] = createSignal('');

export const [countries] = createResource<Country[]>(() => fetch('/json/countries.json').then((res) => res.json()), {
  initialValue: [],
});
