import React from 'react'
import MainRegistration from "./components/MainRegistration/MainRegistration";
import Footer from "../../components/Footer";
import CardNavigation from "../../components/CardNavigation";

const Registration = () => {
  return (
    <div>
      <MainRegistration />
      <CardNavigation />
      <Footer />
    </div>
  );
}

export default Registration