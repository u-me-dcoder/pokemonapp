import React from 'react';
import { HashRouter } from "react-router-dom";
import PrivateRoute from "./routes/PrivateRoutes";
import appRoutes from "./routes/index";
import './App.css';

function App() {


  return (
   <HashRouter>
      <PrivateRoute appRoutes={appRoutes} />
    </HashRouter>
  );
}

export default App;
