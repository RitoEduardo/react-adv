import { BrowserRouter, NavLink } from "react-router-dom";
import { Routes, Route, Navigate } from "react-router-dom";
import React, { lazy, Suspense } from 'react';

import logo from '../logo.svg';
import { routes } from "./routes";

//* Componentes
import { NoLazy } from '../01-lazyload/pages/NoLazy';
const LazyLayout = lazy( () => import(/* webpackChunkName: "LazyLayout "*/ '../01-lazyload/layout/LazyLayout') );

export const Navigation: React.FC = () => {
    return (
        <Suspense fallback={<span> Loading... </span>}>
        <BrowserRouter>
            <div className="main-layout">
                {/*
                <nav>
                    <img src={logo} alt="React Logo" />
                    <ul>
                        <li>
                            <NavLink to="/lazyLayout/*" className={  ( {isActive} ) => isActive ? 'nav-active' : '' } > 
                                Lazy Layout
                            </NavLink>
                        </li>
                    </ul> 
                    <ul>
                        <li>
                            <NavLink to="/no-lazy" className={  ( {isActive} ) => isActive ? 'nav-active' : '' } > 
                                No Lazy
                            </NavLink>
                        </li>
                    </ul>    
                </nav>
                <Routes>
                    <Route path='/lazyLayout/*' element={ <LazyLayout /> }>
                    </Route>
                    <Route path='no-lazy' element={ <NoLazy /> } />
                    <Route path="/*" element={ <Navigate to='/lazyLayout/*' replace /> } />
                </Routes> 
                */}
                <nav>
                    <img src={logo} alt="React Logo" />
                    { /**** navLinks dinamicos */}
                    { routes.map( ({ to, name }) => (
                        <ul key={ to }>
                            <li>
                                <NavLink 
                                    to={to} 
                                    className={  ( {isActive} ) => isActive ? 'nav-active' : '' } 
                                > {name} </NavLink>
                            </li>
                        </ul>    
                    ))
                    }
                </nav>

                 <Routes>
                { 
                    routes.map( ({path, component: Component}) => (
                        <Route 
                            key={ path }
                            path={ path } 
                            element={ <Component /> } />
                    ))
                }
                <Route path="/*" element={ <Navigate to={ routes[0].to } replace /> } />
                </Routes> 
            </div>
        </BrowserRouter>
        </Suspense>
    );
}
