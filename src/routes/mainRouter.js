import React from 'react';
import Loadable from 'react-loadable';
import AsynLoadingComponent from '../components/asynLoadingComponent';
import RouteModule from './routeModule';

const Home = Loadable({
  loader: () => import(
    /* webpackChunkName: "home" */
    '../pages/home'
  ),
  loading: AsynLoadingComponent,
  delay: 300
});

const Mine = Loadable({
  loader: () => import(
    /* webpackChunkName: "mine" */
    '../pages/mine'
  ),
  loading: AsynLoadingComponent,
  delay: 300
});

const routes = [
  {
    path: '/',
    exact: true,
    component: Home,
  },
  {
    path: '/mine',
    exact: true,
    component: Mine,
  },
];

class Router extends React.Component {
  render () {
    return <RouteModule routes={routes} />;
  }
}

export default Router;