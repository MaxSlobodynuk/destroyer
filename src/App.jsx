import { Route, Routes } from "react-router-dom";
import Home from "./screens/Home/Home";
import Contact from "./screens/Contact/Contact";
import Desirable from "./screens/Desirable/Desirable";
import Entrance from "./screens/Entrance/Entrance";
import Registration from "./screens/Registration/Registration";
import Layout from "./layauts/Layout";
import { useState } from "react";

const App = () => {
    const [isCatalogOpen, setIsCatalogOpen] = useState(false);
    return (
      <Routes>
        <Route
          path="/"
          element={
            <Layout
              isCatalogOpen={isCatalogOpen}
              setIsCatalogOpen={setIsCatalogOpen}
            />
          }
        >
          <Route
            index
            element={
              <Home
                isCatalogOpen={isCatalogOpen}
                setIsCatalogOpen={setIsCatalogOpen}
              />
            }
          />
          <Route path="contact" element={<Contact />} />
          <Route path="desirable" element={<Desirable />} />
          <Route path="entrance" element={<Entrance />} />
          <Route path="registration" element={<Registration />} />
        </Route>
      </Routes>
    );};

export default App

