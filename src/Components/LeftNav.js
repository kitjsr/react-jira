import React from 'react'
import '../Styles/Sidebar.css'
import { Sidebar, Menu, MenuItem, sidebarClasses } from "react-pro-sidebar";
import { Link } from 'react-router';


export const LeftNav = () => {
  return (
    
    <div className="dash1">
      <div className="sidebar">
        <Sidebar
          rootStyles={{
            [`.${sidebarClasses.container}`]: {
              backgroundImage: "linear-gradient(to right,#80deea,#4dd0e1,#26c6da,#00bcd4,#00acc1, #0097a7)"
            },
          }}
        >
          <Menu
            menuItemStyles={{
              button: {
                // the active class will be added automatically by react router
                // so we can use it to style the active menu item
                [`&.active`]: {
                  backgroundColor: "#13395e",
                  color: "#b6c8d9",
                },
              },
            }}
          >
            <MenuItem component={<Link to="/ForUser"/>}>For you</MenuItem>
            <MenuItem> Recent</MenuItem>
            <MenuItem> Notifications</MenuItem>
            <MenuItem> Teams</MenuItem>
            <MenuItem> Jira</MenuItem>
            <MenuItem> Jira Product Discovery</MenuItem>
            <MenuItem> View all apps</MenuItem>
            <MenuItem> Calendar</MenuItem>
            <MenuItem> Calendar</MenuItem>
            <MenuItem> E-commerce</MenuItem>
            <MenuItem> Documentation</MenuItem>
            <MenuItem> Documentation</MenuItem>
            <MenuItem> Calendar</MenuItem>
            <MenuItem> E-commerce</MenuItem>

            {/* <MenuItem component={<Link to="/documentation" />}> Documentation</MenuItem>
    <MenuItem component={<Link to="/calendar" />}> Calendar</MenuItem>
    <MenuItem component={<Link to="/e-commerce" />}> E-commerce</MenuItem> */}
        </Menu>
        </Sidebar>
      </div>
      </div>
  )
}
