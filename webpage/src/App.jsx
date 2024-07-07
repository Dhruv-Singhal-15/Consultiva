import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import "./assets/css/pagecss/Header1.css";

import "./assets/css/pagecss/Login.css";
import * as Boxicons from "react-icons/bi";
import Home from "./pages/Home";

import SwiperCore, { Navigation, Pagination, Autoplay } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

import "./components/main.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Doctor from "./components/Doctor";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCoffee, faHeart } from "@fortawesome/free-solid-svg-icons";

import "bootstrap/dist/css/bootstrap.min.css";
import Login from "./pages/Login";
import Nopage from "./pages/Nopage";
import Dasboard from "./pages/Dasboard";
import Header1 from "./pages/Header1";

function App() {
  return (
    <>
      <div>
        <BrowserRouter>
          <Routes>
            <Route index element={<Home />} />
            <Route path="/home" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/dashboard" element={<Dasboard />} />
            <Route path="/header1" element={<Header1 />} />
            <Route path="*" element={<Nopage />} />
          </Routes>
        </BrowserRouter>
      </div>
    </>
  );
}

export default App;
