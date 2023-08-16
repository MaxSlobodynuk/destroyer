import React from 'react'
import Slider from './components/Slider'
import Search from "./components/Search/Search";
import CardList from "./components/CardList/Card";
import OwnCardList from "./components/OwnCardList/OwnCard"
import SaleCard from "./components/SaleCard/SaleCard";
import Footer from "../../components/Footer";
import PhotoList from "./components/PhotoList/PhotoList";
import AboutUs from "./components/AboutUs/AboutUs";
import Discount from "./components/Discount/Discount";
import Product from "./components/Product/Product";
import Navigation from "./components/Navigation/Navigation";
import Categories from "../../components/Categories";
import Menu from "../../components/Menu";


const Home = ({ setIsCatalogOpen, isCatalogOpen }) => {
  return (
    <div>

      {/* <Menu /> */}
      <Search />
      <Slider />
      <Navigation />
      <CardList />
      <OwnCardList />
      <AboutUs />
      <Discount />
      <Product />
      <SaleCard />
      <PhotoList />
      <Footer />
      {/* {isCatalogOpen && (
        <Categories
          setIsCatalogOpen={setIsCatalogOpen}
          isCatalogOpen={isCatalogOpen}
        />
      )} */}
    </div>
  );
};

export default Home