import { BrowserRouter, NavLink } from "react-router-dom";
import { Routes, Route, Navigate } from "react-router-dom";
import React from 'react';

import logo from '../logo.svg';
import { ShoppingPage } from "../02-component-patterns/pages/ShoppingPage";

export const Navigation: React.FC = () => {
    return (
        <BrowserRouter>
            <div className="main-layout">
                <nav>
                    <img src={logo} alt="React Logo" />
                    <ul>
                        <li>
                            <NavLink to="/home" className={  ( {isActive} ) => isActive ? 'nav-active' : '' } > Home </NavLink>
                        </li>
                    </ul>
                    <ul>
                        <li>
                            <NavLink to="/about" className={  ( {isActive} ) => isActive ? 'nav-active' : '' } > About </NavLink>
                        </li>
                    </ul>
                    <ul>
                        <li>
                            <NavLink to="/shopping" className={  ( {isActive} ) => isActive ? 'nav-active' : '' } > Shopping </NavLink>
                        </li>
                    </ul>
                </nav>

                <Routes>
                    <Route path="about" element={ <h1> About Page </h1>} />
                    <Route path="shopping" element={ <ShoppingPage/> } />
                    <Route path="home" element={ <h1> Home Page </h1>} />

                    <Route path="/*" element={ <Navigate to="/home" replace /> } />
                </Routes>
            </div>
        </BrowserRouter>
    );
}
