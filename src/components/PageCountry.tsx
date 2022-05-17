import { createMemo, Show, Component, For } from 'solid-js';
import { Link, useParams } from 'solid-app-router';

import { countries, pinned } from '../data/store';

const PageCountry: Component = () => {
  const params = useParams();

  const country = createMemo(() => {
    const result = countries().find((c) => c.code === params.code);
    return result;
  });

  return (
    <div class='p-10'>
      <Show when={country()} fallback={<div>Loading...</div>}>
        <div class='flex justify-between mb-6'>
          <h3 class='title font-bold text-3xl'>{country().name}</h3>

          {pinned.items.find((i) => i.code === country().code) ? (
            <button
              class='px-4 font-bold bg-red-800 text-white rounded-full'
              onClick={(evt) => {
                evt.stopPropagation();
                pinned.remove(country().code);
              }}
            >
              <i class='fas fa-heart'></i>
            </button>
          ) : (
            <button
              class='px-4 font-bold bg-gray-500 text-white rounded-full disabled'
              onClick={(evt) => {
                evt.stopPropagation();
                pinned.add(country());
              }}
            >
              <i class='fas fa-heart'></i>
            </button>
          )}
        </div>

        <div class='grid grid-cols-3 gap-10 align-start'>
          <img
            src={`/flags/svg/${country().code}.svg`}
            alt={country().name}
            class='border border-1 border-gray-400 object-contain'
          />
          <div class='col-span-2'>
            <div>
              <div class='mb-2'>
                <div class='font-bold'>Native Names:</div>{' '}
                <ul class='list-disc pl-10'>
                  <For
                    each={Object.keys(country().nativeNames).map((key) => ({
                      lang: country().languages[key],
                      name: country().nativeNames[key].official,
                    }))}
                  >
                    {(n) => (
                      <li>
                        <span class='font-bold'>{n.lang}:</span> <span class=''>{n.name}</span>
                      </li>
                    )}
                  </For>
                </ul>
              </div>
              <div class='mb-2'>
                <span class='font-bold'>Population:</span> <span class=''>{country().population.toLocaleString()}</span>
              </div>
              <div class='mb-2'>
                <span class='font-bold'>Continents:</span> <span class=''>{country().continents.join(', ')}</span>
              </div>
              <div class='mb-2'>
                <span class='font-bold'>Capital:</span> <span class=''>{country().capitals.join(', ')}</span>
              </div>
              <div class='mb-2'>
                <span class='font-bold'>Languages:</span>{' '}
                <span class=''>{Object.values(country().languages).join(', ')}</span>
              </div>
              <div class='mb-2'>
                <span class='font-bold'>Currencies:</span> <span class=''>{country().currencies.join(', ')}</span>
              </div>

              <div class='flex items-center'>
                <div class='font-bold mr-2'>Borders:</div>
                <div class='flex gap-2 flex-wrap'>
                  <For each={country().borders.map((code) => countries().find((c) => c.code === code))}>
                    {(border) => (
                      <Link
                        href={`/country/${border.code}`}
                        class='px-4 py-2 font-bold bg-blue-800 text-white rounded-full whitespace-nowrap'
                      >
                        {border.name}
                      </Link>
                    )}
                  </For>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Show>
    </div>
  );
};

export default PageCountry;
