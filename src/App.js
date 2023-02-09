import React from "react";
import "./App.css";
import Footer from "./Commponents/footer/Footer";
import Header from "./Commponents/header/Header";
// import Header2 from "./Commponents/header2/Header2";
import Magamanu from "./Commponents/magamanu/Magamanu";
import Home from "./Pages/home/Home";
import Page404 from "./Pages/Page404";
// import Footer2 from "./Commponents/footer2/Footer2";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Magamanu />
        <Home />
        <Routes>
          <Route path="/home" element={<></>} />
        </Routes>
      </BrowserRouter>

      {/* <Home /> */}
      <Footer />
      {/* <Footer2 /> */}
    </>
  );
}

export default App;
