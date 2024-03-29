import type { ComponentType } from 'react';
import type { Params } from 'react-router';
import type { IconProp } from '@fortawesome/fontawesome-svg-core';
import Main from 'src/containers/Main';
import Contact from 'src/containers/Contact';
import Catalog from 'src/containers/Catalog';

export const TRANSITION_DEFAULT = {
  classNames: 'fade',
  timeout: { enter: 250, exit: 250 }
};

export type RouteComponent = ComponentType<any>;
export type TransitionMetaData = typeof TRANSITION_DEFAULT;

export type Route = Readonly<{
  name: string;
  path: string;
  icon?: IconProp;
  showInNav?: boolean;
  Component: RouteComponent;
  transition: TransitionMetaData;
  params?: Readonly<Params<string>>;
}>;

export const Routes: Route[] = [
  {
    name: 'Главная',
    path: '/',
    icon: 'sign-out-alt',
    Component: Main,
    transition: TRANSITION_DEFAULT
  },
  {
    name: 'Reroute Main',
    path: '/rr',
    icon: 'sign-out-alt',
    Component: Main,
    transition: TRANSITION_DEFAULT
  },
  {
    name: 'Сваяжитесь с нами',
    path: '/contact-us',
    showInNav: true,
    Component: Contact,
    transition: {
      classNames: 'page-slide-left',
      timeout: { enter: 350, exit: 250 }
    }
  },
  {
    showInNav: true,
    name: 'Каталог',
    path: '/catalog',
    Component: Catalog,
    transition: TRANSITION_DEFAULT
  },
  // {
  //   name: 'Fetch',
  //   showInNav: true,
  //   path: '/fetch/:startDateIndex',
  //   Component: FetchData,
  //   transition: {
  //     classNames: 'page-slide-right',
  //     timeout: { enter: 350, exit: 250 }
  //   },
  //   params: {
  //     startDateIndex: '0'
  //   }
  // }
];
