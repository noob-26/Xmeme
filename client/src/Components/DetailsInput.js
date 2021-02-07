import React, { useState } from 'react';
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink } from 'reactstrap';
import { Button } from 'reactstrap'; 

const DetailsInput = (props) => {
  const [collapsed, setCollapsed] = useState(true);

  const toggleNavbar = () => setCollapsed(!collapsed);

  //<Button color="primary">primary</Button>{" "}

  return (
    <div>
      <Navbar color="dark" dark>
        <NavbarBrand href="/" className="mr-auto">reactstrap</NavbarBrand>
        <Button color="primary" onClick={toggleNavbar} className="mr-2">Add Meme</Button>{" "}
        <Collapse isOpen={!collapsed} navbar>
          <Nav navbar>
            <NavItem>
              <NavLink href="/components/">Components</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="https://github.com/reactstrap/reactstrap">GitHub</NavLink>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
    </div>
  );
}

export default DetailsInput;