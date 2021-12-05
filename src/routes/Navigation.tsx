import { BrowserRouter, NavLink } from "react-router-dom";
import { Routes, Route, Navigate } from "react-router-dom";
import React, { Suspense } from 'react';

import logo from '../logo.svg';
import { routes } from "./routes";

export const Navigation: React.FC = () => {
    return (
        <Suspense fallback={<span> Loading... </span>}>
        <BrowserRouter>
            <div className="main-layout">
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
