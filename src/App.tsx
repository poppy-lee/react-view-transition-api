import { unstable_ViewTransition as ViewTransition } from "react";
import { BrowserRouter, Outlet, Route, Routes } from "react-router";

import { Home } from "./pages/Home";
import { NotFound } from "./pages/NotFound";

export const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          element={
            <ViewTransition>
              <Outlet />
            </ViewTransition>
          }
        >
          <Route path="/" element={<Home />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};
