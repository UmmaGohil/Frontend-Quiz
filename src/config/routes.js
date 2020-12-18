import Home from '../pages/home';
import Easy from '../pages/easy';
import Mid from '../pages/mid';
import Hard from '../pages/hard';

const routes = [
  {
    path: '/',
    exact: true,
    component: Home,
    name: Home,
  },
  {
    path: '/Easy',
    exact: true,
    component: Easy,
    name: Easy,
  },
  {
    path: '/Mid',
    exact: true,
    component: Mid,
    name: Mid,
  },
  {
    path: '/Hard',
    exact: true,
    component: Hard,
    name: Hard,
  },
];

export default routes;
