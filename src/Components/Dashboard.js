import React from "react";
import { Sidebar, Menu, MenuItem, sidebarClasses } from "react-pro-sidebar";
import "../Styles/Dashboard.css";
import { Col, Row } from "react-bootstrap";
import { Link } from "react-router";
// import Sidebar from "./Components/Sidebar";
import { LeftNav } from "./LeftNav";
import { ForUser } from "./ForUser";
// import { Link } from 'react-router-dom';

export const Dashboard = () => {
  return (
     <>
     <LeftNav></LeftNav>
      <div className="mainarea">
        <h1>Dashboard</h1> 
        {/* <h2>Coming soon!</h2> */}
      </div>
     </>
    
  );
};
