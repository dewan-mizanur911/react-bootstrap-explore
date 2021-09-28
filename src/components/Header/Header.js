import React from 'react';
import { Container, Form, FormControl, Nav, Navbar, NavDropdown, Button } from 'react-bootstrap';

const Header = (props) => {
    const handleOnChange = event => {
        props.handleOnSearch(event.target.value);
    }
    return (
      <Navbar bg="dark" variant="dark" expand="lg">
        <Container fluid>
          <Navbar.Brand href="#">NEWS24</Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="me-auto my-2 my-lg-0"
              style={{ maxHeight: "100px" }}
              navbarScroll
            >
              <Nav.Link href="#action1">Home</Nav.Link>
              <Nav.Link href="#action2">About</Nav.Link>
              <NavDropdown title="Others" id="navbarScrollingDropdown">
                <NavDropdown.Item href="#action3">Top News</NavDropdown.Item>
                <NavDropdown.Item href="#action4">
                  Best Sources
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action5">
                  Contact Us
                </NavDropdown.Item>
              </NavDropdown>
            </Nav>
            <Form className="d-flex">
              <FormControl
                onChange={handleOnChange}
                type="search"
                placeholder="Search"
                className="me-2"
                aria-label="Search"
              />
              <Button variant="outline-success">Search</Button>
            </Form>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    );
};

export default Header;