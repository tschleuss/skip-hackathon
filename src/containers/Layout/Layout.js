import React from 'react'
import PropTypes from 'prop-types'
import { Route } from 'react-router'
import { Navbar, NavbarBrand, Nav, NavItem, NavLink } from 'reactstrap'
import { ToastContainer } from 'react-toastify'
import 'bootstrap/dist/css/bootstrap.css'
import './index.css'

const DefaultLayout = ({ component: Component, ...rest }) =>
    <Route {...rest} render={matchProps => (
        <div className="app-container">
            <Navbar className="app-header" color="faded" light expand="md">
                <NavbarBrand href="/">SkipTheDishes</NavbarBrand>
                <Nav className="ml-auto" navbar>
                    <NavItem>
                        <NavLink href="/auth" className="menu-link">Auth</NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink href="/stores" className="menu-link">Stores</NavLink>
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
