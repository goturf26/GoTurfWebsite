import React from "react";
import "./App.css";

import { HashRouter, Routes, Route } from "react-router-dom";

import Navbar from "./component/Navbar/Navbar";
import Home from "./component/Home/Home";
import Turf from "./component/Turf/Turf";
import Tournament from "./component/Tournament/Tournament";
import Footer from "./component/Footer/Footer";

import Terms from "./component/Terms/Terms";
import PrivacyPolicy from "./component/PrivacyPolicy/PrivacyPolicy";
import DeleteAccount from "./component/DeleteAccount/DeleteAccount";

function App() {
  return (
    <HashRouter>
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

        {/* Privacy Policy */}
        <Route
          path="/privacy-policy"
          element={<PrivacyPolicy />}
        />

        {/* Terms & Conditions */}
        <Route
          path="/terms"
          element={<Terms />}
        />

        {/* Delete Account */}
        <Route
          path="/delete-account"
          element={<DeleteAccount />}
        />

      </Routes>
    </HashRouter>
  );
}

export default App;