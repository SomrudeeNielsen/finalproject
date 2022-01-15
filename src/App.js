import { BrowserRouter, Route, Routes } from "react-router-dom";

import Container from "react-bootstrap/Container";

import Home from "./components/Home";
import About from "./components/About";
import Users from "./components/Users";
import Login from "./components/Login";
import ButtonBar from "./components/ButtonBar"



function App() {
  return (
    <BrowserRouter>
      <Container className="p-3">
        <h1>React bootstrap Demo</h1>
          <h2>
            <ButtonBar />
          </h2>
      <h2>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" exact element={<About />} />
          <Route path="/users" exact element={<Users />} />
          <Route path="/login" exact element={<Login />} />
        </Routes>
      </h2>
      </Container>
    </BrowserRouter>
  );
}

export default App;
