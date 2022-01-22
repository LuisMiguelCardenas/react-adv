import { lazy, LazyExoticComponent } from 'react';
//import { LazyPage, LazyPage2, LazyPage3 } from "../01-lazyload/pages";

type JSXComponent = () => JSX.Element;

interface Route {
    path: string;
    to: string;
    Component: LazyExoticComponent<JSXComponent> | JSXComponent;
    name: string;
}


const Lazy1 = lazy(() => import('../01-lazyload/pages/LazyPage'))
const Lazy2 = lazy(() => import('../01-lazyload/pages/LazyPage2'))
const Lazy3 = lazy(() => import('../01-lazyload/pages/LazyPage3'))




export const routes: Route[] = [
  {
    path: "/lazy1",
    to: "lazy1",
    Component: Lazy1,
    name: "Lazy 1",
  },
  {
    path: "/lazy2",
    to: "lazy2",
    Component: Lazy2,
    name: "Lazy 2",
  },
  {
    path: "/lazy3",
    to: "lazy3",
    Component: Lazy3,
    name: "Lazy 3",
  },
];
