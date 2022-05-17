import { createResource, lazy } from 'solid-js';
import { render } from 'solid-js/web';
import { Router, Routes, Route, Params } from 'solid-app-router';

import { countries } from './data/store';

import { Header } from './components/Header';

import './index.css';

const PageHome = lazy(() => import('./components/PageHome'));
const PageCountry = lazy(() => import('./components/PageCountry'));

render(
  () => (
    <Router>
      <Header />
      <Routes>
        <Route path='/country/:code' element={<PageCountry />} />
        <Route path='/' element={<PageHome />} />
      </Routes>
    </Router>
  ),
  document.getElementById('root')
);
