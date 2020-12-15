import Home from '../pages/home';
import Junior from '../pages/junior';
import Mid from '../pages/mid';
import Expert from '../pages/expert';
import Score from '../pages/score';

const routes = [
  {
    path: '/',
    exact: true,
    component: Home,
    name: Home,
  },
  {
    path: '/Junior',
    exact: true,
    component: Junior,
    name: Junior,
  },
  {
    path: '/Mid',
    exact: true,
    component: Mid,
    name: Mid,
  },
  {
    path: '/Expert',
    exact: true,
    component: Expert,
    name: Expert,
  },
  {
    path: '/Score',
    exact: true,
    component: Score,
    name: Score,
  },
];

export default routes;
