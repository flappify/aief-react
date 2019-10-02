import React from 'react';
import {Nav,Navbar} from 'react-bootstrap';

class AdminNav extends React.Component{
    render()
    {
        return(
            <Navbar bg="light" expand="lg">
  <Navbar.Brand href="/">AIEF</Navbar.Brand>
  <Navbar.Toggle aria-controls="basic-navbar-nav" />
  <Navbar.Collapse id="basic-navbar-nav">
    <Nav className="mr-auto">
      <Nav.Link href="/urna/dashboard/form">Forms</Nav.Link>
      <Nav.Link href="/urna/dashboard/donation">Donations</Nav.Link>
      <Nav.Link href="/urna/dashboard/helpdesk">Queries</Nav.Link>
      <Nav.Link href="/">Go Back to Website</Nav.Link>
    </Nav>
  </Navbar.Collapse>
</Navbar>
        )
    }
}

export default AdminNav;