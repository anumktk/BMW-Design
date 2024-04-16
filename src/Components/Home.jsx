import React from "react";
import Navbar from "./Navbar";
import Carmodel from "./Carmodel";
import Vedios from "./Vedios";
import Collections from "./Collections";
import Footer from "./Footer";
import CarSlider from "./CarSlider";

const Home = () => {
  return (
    <div>
      <Navbar />
      {/* <div className="bg-green-200 w-full h-screen"></div> */}
      <Carmodel />
      <Vedios />
      <CarSlider />
      <Collections />
      <Footer />
    </div>
  );
};

export default Home;
