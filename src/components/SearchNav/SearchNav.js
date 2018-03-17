import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Navbar } from 'reactstrap'
import classNames from 'classnames'
import './index.css'

class SearchNav extends Component {
    
    render() {
        const { className, placeholder } = this.props
        const containerClass = classNames({ 'nav-search': true, [className]: true })
        return (
            <Navbar className={containerClass} color="faded" light expand="md">
                <input className="search-input" type="text" placeholder={placeholder} />
            </Navbar>
        )
    }
}

SearchNav.propTypes = {
    className: PropTypes.string,
    placeholder: PropTypes.string
}

export default SearchNav
