import React, { useState } from 'react'
import Header from '../components/Header'
import { Outlet } from 'react-router-dom'


const Layout = ({ setIsCatalogOpen, isCatalogOpen }) => {
  return (
    <>
      <Header
        isCatalogOpen={isCatalogOpen}
        setIsCatalogOpen={setIsCatalogOpen}
      />
      <Outlet />
    </>
  );
};

export default Layout