import Home from '../pages/home'
import Junior from '../pages/junior'
import Mid from '../pages/mid'
import Expert from '../pages/expert'

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
    name: Mid
  },
  {
    path: '/Expert',
    exact: true,
    component: Expert,
    name: Expert
  }
]

export default routes