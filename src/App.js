import React from "react";
import { Switch, Route } from "react-router-dom";

import "./App.css";

import Header from "./components/header/header.component";
import Footer from "./components/footer/footer.component";
import HomePage from "./pages/homepage/homePage.component";
import PlantsPage from "./pages/plants/plants.component";
import PlantPage from "./pages/plant/plant.component";
import ContactPage from "./pages/contact/contact.component";

const App = () => (
  <div>
    <Header />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/plantas" component={PlantsPage} />
        <Route path="/plantas/:id" component={PlantPage} />
        <Route path="/contacto" component={ContactPage} />
      </Switch>
    <Footer />
  </div>
);

export default App;