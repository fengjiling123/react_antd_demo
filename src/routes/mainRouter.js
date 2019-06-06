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
    path: '/mine',
    exact: true,
    component: Mine,
  },
  {
    path: '/',
    exact: true,
    component: Home,
  },
];

class Router extends React.Component {
  render () {
    return <RouteModule routes={routes} />;
  }
}

export default Router;