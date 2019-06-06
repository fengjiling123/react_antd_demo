import React from 'react';
import Loadable from 'react-loadable';
import AsynLoadingComponent from '../components/asynLoadingComponent';
import RouteModule from './routeModule';

const Main= Loadable({
  loader: () => import(
   
    '../pages/main'
  ),
  loading: AsynLoadingComponent,
  delay: 300
});


const Login= Loadable({
  loader: () => import(
    /* webpackChunkName: "login" */
    '../pages/login'
  ),
  loading: AsynLoadingComponent,
  delay: 300
});

const routes = [
  {
    path: '/login',
    exact: true,
    component: Login,
  },
  {
    path: '/',
    component: Main,
  },
];

class Router extends React.Component {
  render () {
    return <RouteModule routes={routes} />;
  }
}

export default Router;