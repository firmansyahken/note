import React from "react";
import { HashRouter, Routes, Route } from "react-router-dom";
import { Home, Layout, Detail } from "../pages";
import ScrollToTop from "../utils/ScrollToTop";

const Routers = () => {
  return (
    <>
      <HashRouter>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route path="/" element={<Home />} />
            <Route path="/detail" element={<Detail />} />
          </Route>
        </Routes>
      </HashRouter>
    </>
  );
};

export default Routers;
