import React from "react";
import Navbar from "./Navbar";
import Banner from "./Banner";
import Products from "./Products";
import Footer from "./Footer";

function Home() {
  return (
    <div>
      <Navbar />
      <Banner />
      <Products />
      <Footer />
    </div>
  );
}

export default Home;
