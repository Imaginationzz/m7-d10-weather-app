import React from "react";

import CitySelector from "./components/CitySelector";
import { Container } from "react-bootstrap";
import "./App.css";

const App = () => {
  return (
    <Container className="App">
      <CitySelector />
    </Container>
  );
};

export default App;
