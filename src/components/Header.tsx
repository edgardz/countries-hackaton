import { Component, For } from 'solid-js';
import { Link, useNavigate, useLocation } from 'solid-app-router';

import { pinned, search, setSearch } from '../data/store';

export const Header: Component = () => {
  const navigate = useNavigate();
  const location = useLocation();

  return (
    <div class='bg-gray-900 text-white flex flex-row w-full py-4'>
      <div class='text-2xl px-10 py-2'>
        <Link href='/'>
          <i class='fas fa-globe mr-2'></i>
          Countries of the world
        </Link>
      </div>
      <div class='flex-grow'>
        <input
          type='text'
          value={search()}
          onkeyup={(evt) => {
            setSearch(evt.currentTarget.value);
            if (location.pathname !== '/') navigate('/');
          }}
          placeholder='Search'
          class='p-2 text-xl bg-white text-black rounded-lg max-w-md w-96'
        />
      </div>
      <div class='px-10 py-2 justify-end has-tooltip'>
        <span class='tooltip cart'>
          <div>Pinned ({pinned.count})</div>
          <For each={pinned.items}>
            {(p) => (
              <div class='flex flex-row my-2'>
                <img src={`/flags/svg/${p.code}.svg`} alt={p.name} class='h-8 mr-2' />
                <h3 class='title text-md truncate flex-grow'>{p.name}</h3>
              </div>
            )}
          </For>
          <div class='flex'>
            <button
              onClick={() => pinned.clear()}
              class='text-md px-8 py-1 font-bold bg-blue-800 text-white rounded-full'
            >
              Clear
            </button>
          </div>
        </span>
        <i class='fas fa-heart mr-2'></i>
        <span class='font-bold text-xl'>{pinned.count}</span>
      </div>
    </div>
  );
};
