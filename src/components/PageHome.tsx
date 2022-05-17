import { Component, createMemo, For, Show } from 'solid-js';
import { Link } from 'solid-app-router';
import Fuse from 'fuse.js';

import { pinned, countries, search } from '../data/store';

const max = 10;

const PageHome: Component = () => {
  const filtered = createMemo(() => {
    const items = countries() ?? [];
    let filteredResults = [];
    if (search()) {
      const fuse = new Fuse(items, {
        includeScore: true,
        threshold: 0.2,
        keys: ['name', 'code', 'continents'],
      });
      const result = fuse.search(search());
      filteredResults = result.map((res) => res.item.code);
    } else {
      filteredResults = items.map((c) => c.code);
    }
    return filteredResults.filter((code) => !pinned.items.find((p) => p.code === code)).slice(0, max);
  });

  return (
    <div>
      {pinned.items.length ? (
        <div class='p-2 mb-5'>
          <p class='title font-bold mb-1'>Pinned:</p>
          <div class='grid grid-cols-5 gap-2 '>
            <For each={pinned.items}>
              {(country) => (
                <Link href={`/country/${country.code}`} class='p-3 border border-1 border-gray-400 flex items-start'>
                  <img src={`/flags/svg/${country.code}.svg`} alt={country.name} class='w-32 object-contain' />
                  <div class='px-3'>
                    <h3 class='title font-bold truncate w-full max-w-full'>{country.name}</h3>
                    <div>{country.continents.join(', ')}</div>
                  </div>
                </Link>
              )}
            </For>
          </div>
        </div>
      ) : null}

      {filtered().length ? (
        <div class='grid grid-cols-1 gap-2 p-2'>
          <p class='title font-bold'>Search Result:</p>
          <For each={countries()}>
            {(country) => (
              <Show when={filtered().includes(country.code)}>
                <Link href={`/country/${country.code}`} class='p-3 border border-1 border-gray-400 flex items-start'>
                  <img src={`/flags/svg/${country.code}.svg`} alt={country.name} class='w-32 object-contain' />
                  <div class='px-3'>
                    <h3 class='title font-bold truncate w-full max-w-full'>{country.name}</h3>
                    <div>{country.continents.join(', ')}</div>
                  </div>
                </Link>
              </Show>
            )}
          </For>
        </div>
      ) : (
        <div class='text-center'>NO RESULTS</div>
      )}
    </div>
  );
};

export default PageHome;
