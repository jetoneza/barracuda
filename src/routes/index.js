import CoreLayout from '../layouts/CoreLayout/CoreLayout';
import Home from './Home';
import Music from './Music';

export const createRoutes = (store) => ({
  path: '/',
  component: CoreLayout,
  indexRoute: Home,
  childRoutes: [
    Music(store),
  ]
});

export default createRoutes;
