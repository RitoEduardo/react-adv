import { lazy , LazyExoticComponent } from 'react';
// import { LazyPage1, LazyPage2, LazyPage3 } from '../01-lazyload/pages';
import { NoLazy } from '../01-lazyload/pages/NoLazy';

type JSXComponent = () => JSX.Element

export interface IRoute{
    to: string;
    path: string;
    name: string;
    component: LazyExoticComponent<JSXComponent> | JSXComponent;
}


const LazyLayout = lazy( () => import(/* webpackChunkName: "LazyLayout "*/ '../01-lazyload/layout/LazyLayout') );

export const routes: IRoute[] = [
    {
        to: '/lazyLayout/*',
        path: '/lazyLayout/*',
        component: LazyLayout,
        name: 'Lazy Layout - Dashboard'
    },
    {
        to: '/no-lazy',
        path: 'no-lazy',
        component: NoLazy,
        name: 'No Lazy'
    }
];