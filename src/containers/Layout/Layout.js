import React from 'react'
import PropTypes from 'prop-types'
import { Route } from 'react-router'
import { Link } from 'react-router-dom';
import { Navbar, NavbarBrand, Nav, NavItem, NavLink } from 'reactstrap'
import { ToastContainer } from 'react-toastify'
import 'bootstrap/dist/css/bootstrap.css'
import './index.css'

const DefaultLayout = ({ component: Component, ...rest }) =>
    <Route {...rest} render={matchProps => (
        <div className="app-container">
            <Navbar className="app-header" color="faded" light expand="md">
                <Link to="/" className="navbar-brand">SkipTheDishes</Link>
                <Nav className="ml-auto" navbar>
                    <NavItem>
                        <Link to="/auth" className="nav-link menu-link">Auth</Link>
                    </NavItem>
                    <NavItem>
                        <Link to="/stores" className="nav-link menu-link">Stores</Link>
                    </NavItem>
                </Nav>
            </Navbar>
            <div className="app-content">
                <Component {...matchProps} />
            </div>
            <footer>
                <p>Made by Thyago Schleuss  </p>
            </footer>
            <ToastContainer />
        </div>
    )} />

DefaultLayout.propTypes = {
    component: PropTypes.any.isRequired
}

export default DefaultLayout
