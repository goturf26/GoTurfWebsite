import React from "react";
import "./App.css";

import { BrowserRouter, Routes, Route } from "react-router-dom";

// Components
import Navbar from "./component/Navbar/Navbar";
import Home from "./component/Home/Home";
import Turf from "./component/Turf/Turf";
import Tournament from "./component/Tournament/Tournament";
import Footer from "./component/Footer/Footer";
import Terms from "./component/Terms/Terms";
// Privacy Page
import PrivacyPolicy from "./component/PrivacyPolicy/PrivacyPolicy";

function App() {
  return (
    <BrowserRouter>

      <Routes>

        {/* Main Website */}
        <Route
          path="/"
          element={
            <>
              <Navbar />
              <Home />
              <Turf />
              <Tournament />
              <Footer />
            </>
          }
        />

        {/* Privacy Policy Page */}
        <Route
          path="/privacy-policy"
          element={<PrivacyPolicy />}
        />

        <Route
  path="/privacy-policy"
  element={<PrivacyPolicy />}
/>

<Route
  path="/terms"
  element={<Terms />}
/>

      </Routes>

    </BrowserRouter>
  );
}

export default App;