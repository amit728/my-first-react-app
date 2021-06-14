import './App.css';
import About from './About'
import Contact from './Contact'
import Services from './Services'
import Home from './Home'
import User from './User'
import Employees from './Employees'
import 'bootstrap/dist/css/bootstrap.min.css'
import React, { useState, Component } from 'react'
import CreateUser from './CreateUser'
import { Switch, Route, Link, BrowserRouter as Router } from 'react-router-dom'
import { Navbar, Nav } from 'react-bootstrap'

function App() {
  return (
    <div className="App">
      <Router>

        <Navbar bg="dark" expand="lg">
          <Navbar.Brand href="#home"><Link to="/">React-App</Link></Navbar.Brand>
          <Nav className="mr-auto" className="float-right">
            <Nav.Link href=""><Link to="/">Home</Link></Nav.Link>
            <Nav.Link href=""><Link to="/about">About</Link></Nav.Link>
            <Nav.Link href=""><Link to="/services">Services</Link></Nav.Link>
            <Nav.Link href=""><Link to="/contact">Contact</Link></Nav.Link>
            <Nav.Link href=""><Link to="/create">Create User</Link></Nav.Link>
            <Nav.Link href=""><Link to="/user">Users</Link></Nav.Link>
            <Nav.Link href=""><Link to="/employees">Employees</Link></Nav.Link>
          </Nav>
        </Navbar>

        <Switch>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/services">
            <Services />
          </Route>
          <Route path="/contact">
            <Contact />
          </Route>
          <Route path="/create">
            <CreateUser />
          </Route>
          <Route path="/user">
            <User />
          </Route>
          <Route path="/employees">
            <Employees />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>

      </Router>

    </div>
  );
}

export default App;
