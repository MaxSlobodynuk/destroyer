import React from 'react'
// import { NavLink } from 'react-router-dom'
import List from "./components/List/List";
import Footer from "../../components/Footer";
import CardCatalog from "./components/CardCatalog/CardCatalog";
import CardNavigation from "../../components/CardNavigation";

const Catalog = () => {
    return (
      <div>
        <List />
        <CardCatalog />
        <CardNavigation />
        <Footer />
      </div>
    );
}

export default Catalog;