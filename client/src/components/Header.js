import React from 'react'
import {Navbar, Nav, FormControl,Form, NavDropdown, Button} from 'react-Bootstrap'
const Header = () => {
    return(
        <Navbar bg="light" expand="lg">
  <Navbar.Brand href="#home">Food-Ordering-App</Navbar.Brand>
  <Navbar.Toggle aria-controls="basic-navbar-nav" />
  <Navbar.Collapse id="basic-navbar-nav">

    <Form inline>
      <FormControl type="text" placeholder="Search" className="mr-sm-2" />
      <Button variant="outline-success">Search</Button>
    </Form>
  </Navbar.Collapse>
</Navbar>
    )
}
export default Header