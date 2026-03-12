import React from "react";
import {
  BrowserRouter as Router,
} from "react-router-dom";
import { Toaster } from "react-hot-toast";

import "./App.css";
import AppRoutes from "./routes/AppRoutes";
import { useAppSelector } from "./store/hooks";
import Navbar from "./components/UI/Navbar";

const App: React.FC = () => {

    const {isAuthenticated} = useAppSelector((state) => state.auth);
  
  return (
    
      <Router>
        {isAuthenticated && <Navbar />}
        <Toaster position="top-right" reverseOrder={false} />
        <AppRoutes />
      </Router>
  );
};

export default App;
