import React from "react";

import "./App.css";
import "./styles/styles.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import WalletContextProvider from "./components/walletContextProvider";
import LandingPage from "./pages/Landing/LandingPage";
function App() {
  return (
    <WalletContextProvider>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<LandingPage />} />
        </Routes>
      </BrowserRouter>
    </WalletContextProvider>
  );
}

export default App;
