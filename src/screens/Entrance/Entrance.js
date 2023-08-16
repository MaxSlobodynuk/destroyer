import React from 'react'
import MainEntrance from "./components/MainEntrance/MainEntrance";
import Footer from "../../components/Footer";
import CardNavigation from "../../components/CardNavigation";

const Entrance = () => {
  return (
    <div>
      <MainEntrance />
      <CardNavigation />
      <Footer />
    </div>
  );
}

export default Entrance