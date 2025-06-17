import logo from "./logo.png";
import "./App.css";
import { Link, Route, Routes } from "react-router";
import { Profile } from "./Components/Profile";
import Home from "./Components/Home";
import { Dashboard } from "./Components/Dashboard";
import "bootstrap/dist/css/bootstrap.min.css";
import Nav from 'react-bootstrap/Nav';
import { Image } from "react-bootstrap";

function App() {
  return (
    <div>
      <Nav className="justify-content-end" activeKey="/home">
          <Image src={logo} className="App-logo"></Image>
        <Nav.Item className="nav1">
          <Nav.Link><Link to="/home">Home</Link></Nav.Link>
        </Nav.Item>
        <Nav.Item className="nav1">
          <Nav.Link><Link to="/profile">Profile</Link></Nav.Link>
        </Nav.Item>
        <Nav.Item className="nav1">
          <Nav.Link><Link to="/dashboard">Dashboard</Link></Nav.Link>
        </Nav.Item>
      </Nav>

      <Routes>
        <Route path="" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="*" element={<Home />} />
      </Routes>
    </div>
  );
}

export default App;
