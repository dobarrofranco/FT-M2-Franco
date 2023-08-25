import React from "react";
/* eslint-disable */
import { Route, Routes } from "react-router-dom";
import Home from "./components/Home/Home.jsx";
import NavBar from "./components/NavBar/NavBar.jsx";
import Shipping from "./components/Shipping/Shipping.jsx";
import Discounts from "./components/Discounts/Discounts.jsx";
import CardDetail from "./components/CardDetail/CardDetail.jsx";
/* eslint-disable */

// Home --> path: "/" element: <Home/>
// Shipping --> path: "/shipping" element: <Shipping/>
// Discounts --> path: "/discounts" element: <Discounts/>
// CardDetail --> path: "/cruises/:id" element: <CardDetail/>

export default function App() {
  return (
    <div>

        <NavBar />

      <Routes>

        <Route
          path="/"
          element={<Home/>}
        />
        <Route
          path="/shipping"
          element={<Shipping/>}
        />
        <Route
          path="discounts"
          element={<Discounts/>}
        />
        <Route
          path="cruises/:id"
          element={<CardDetail/>}
        />

      </Routes>
      
    </div>
  )
}
