import { lazy, LazyExoticComponent } from 'react';
import { NoLazy } from '../01-lazyload/pages/NoLazy';
//import { LazyPage, LazyPage2, LazyPage3 } from "../01-lazyload/pages";

type JSXComponent = () => JSX.Element;

interface Route {
    path: string;
    to: string;
    Component: LazyExoticComponent<JSXComponent> | JSXComponent;
    name: string;
}

const LazyLayout = lazy(() => import('../01-lazyload/layout/LazyLayout'))
// const Lazy1 = lazy(() => import('../01-lazyload/pages/LazyPage'))
// const Lazy2 = lazy(() => import('../01-lazyload/pages/LazyPage2'))
// const Lazy3 = lazy(() => import('../01-lazyload/pages/LazyPage3'))




export const routes: Route[] = [
  {
    path: "/lazyload/*",
    to: "/lazyload/",
    Component: LazyLayout,
    name: "Lazy 1",
  },
  {
    path: "/nolazy",
    to: "nolazy",
    Component: NoLazy,
    name: "No Lazy",
  },
  // {
  //   path: "/lazy3",
  //   to: "lazy3",
  //   Component: Lazy3,
  //   name: "Lazy 3",
  // },
];
