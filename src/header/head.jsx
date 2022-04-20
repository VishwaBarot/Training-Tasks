import React from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/day9.css';

export default class Header extends React.Component {
  render() {
    return (
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" sticky="top">
        <Container>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="mr-auto">
              <Nav.Link>
                <NavLink to="/day1"> Day1 </NavLink>
              </Nav.Link>
              <Nav.Link>
                <NavLink to="/day2"> Day2 </NavLink>
              </Nav.Link>
              <Nav.Link>
                <NavLink to="/day3"> Day3</NavLink>
              </Nav.Link>
              <Nav.Link>
                <NavLink to="/day4"> Day4</NavLink>
              </Nav.Link>
              <Nav.Link>
                <NavLink to="/day6"> Day6</NavLink>
              </Nav.Link>
              <Nav.Link>
                <NavLink to="/day7"> Day7</NavLink>
              </Nav.Link>
              <Nav.Link>
                <NavLink to="/day8"> Day8</NavLink>
              </Nav.Link>
              <Nav.Link>
                <NavLink to="/day9"> Day9 </NavLink>
              </Nav.Link>
              <Nav.Link>
                <NavLink to="/day10"> Day10 </NavLink>
              </Nav.Link>
              <Nav.Link>
                <NavLink to="/day11"> Day11 </NavLink>
              </Nav.Link>
              <Nav.Link>
                <NavLink to="/day12"> Day12 </NavLink>
              </Nav.Link>
              <Nav.Link>
                <NavLink to="/day13"> Day13 </NavLink>
              </Nav.Link>
              <Nav.Link>
                <NavLink to="/day14"> Day14 </NavLink>
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    );
  }
}
