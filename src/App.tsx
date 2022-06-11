import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Register from "./pages/register";
import { Container } from "reactstrap";
import NavBar from "components/common/NavBar";

function App() {
  return (
    <Container>
      <NavBar />
      <Register />
    </Container>
  );
}

export default App;
