import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../Components/Home";
import About from "../Components/Aboutus";
import Designs from "../Components/Designs";

const Router = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/" element={<About />} />
          <Route path="/" element={<Designs />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default Router;
