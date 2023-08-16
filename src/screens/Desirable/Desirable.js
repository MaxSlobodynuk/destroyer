import React from 'react'
import Selected from "./components/Selected/Selected";
import Footer from "../../components/Footer";
import CardNavigation from "../../components/CardNavigation";
import Navigation from "./components/Navigation/Navigation";

const Desirable = () => {
  return (
    <div>
      <Selected />
      <CardNavigation />
      <Footer />
      <Navigation />
    </div>
  );
}

export default Desirable