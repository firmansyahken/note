import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home, Layout, Detail } from "../pages";
import ScrollToTop from "../utils/ScrollToTop";

const Routers = () => {
  return (
    <>
      <BrowserRouter>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route path="/" element={<Home />} />
            <Route path="/detail" element={<Detail />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default Routers;
