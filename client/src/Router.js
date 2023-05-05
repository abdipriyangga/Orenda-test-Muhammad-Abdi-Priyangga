import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Homepage } from "./pages/Homepage";
import AddCustomer from "./pages/AddCustomer";

export default function Routers() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/addCustomer" element={<AddCustomer />} />
      </Routes>
    </Router>
  );
}