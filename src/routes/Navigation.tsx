import React, { Suspense } from "react";
import { BrowserRouter } from "react-router-dom";
import { Routes, Route, NavLink, Navigate } from "react-router-dom";
import logo from "../logo.svg";
import { LazyPage, LazyPage2, LazyPage3 } from "../01-lazyload/pages";
import { routes } from "./routes";




export const Navigation = () => {
  return (
    <Suspense fallback={<span>Loadding...</span>}>
    <BrowserRouter>
      <div className="main-layout">
        <nav>
          <img src={logo} alt="React logo" />
          <ul>
            {routes.map((item) => (
              <li key={item.to}>
                <NavLink
                  to={item.to}
                  className={({ isActive }) => (isActive ? "nav-active" : "")}
                >
                  {item.name}
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>

        <Routes>
          {routes.map((route) => (
            <Route
              key={route.to}
              path={route.path}
              element={<route.Component />}
            />
          ))}

          <Route path="/*" element={<Navigate to={routes[0].to} replace />} />
        </Routes>
      </div>
    </BrowserRouter>
    </Suspense>
  );
};
