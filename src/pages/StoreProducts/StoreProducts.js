import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { getStoreProducts } from '../../actions/actionApi'
import { Container, Row, Col } from 'reactstrap'
import { Link } from 'react-router-dom'
import ReactLoading from 'react-loading'
import SearchNav from '../../components/SearchNav'
import './index.css'

class StoreProducts extends Component {

    componentDidMount() {
        const storeId = this.props.match.params.id
        this.fetchProducts(storeId)
    }

    fetchProducts(storeId) {
        this.props.getStoreProducts(storeId)
    }

    render() {
        const { isFetching, products } = this.props
        return (
            <div>
                <SearchNav className="products-search-bar" />
                <Container>
                    <Row>
                        <Col sm={{ size: 12 }}>
                            <div className="products-list-container">
                                {isFetching && (
                                    <ReactLoading className="products-list-loading" type={'spin'} color={'#000'} width={64} height={64} />
                                )}
                                {!isFetching && products.map(store => (
                                    <Link className="products-list-item" key={store.id} to={`/`}>
                                        <div className="products-item-image">
                                            <img alt="product" src="http://via.placeholder.com/70x70" />
                                        </div>
                                        <div className="products-item-info">
                                            <span className="products-item-name">{store.name}</span>
                                            <span className="products-item-address">{store.description}</span>
                                        </div>
                                    </Link>
                                ))}
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>
        )
    }
}

StoreProducts.propTypes = {
    products: PropTypes.array.isRequired,
    isFetching: PropTypes.bool.isRequired,
    match: PropTypes.object.isRequired,
    getStoreProducts: PropTypes.func.isRequired
}

const mapStateToProps = ({ products }) => ({
    isFetching: products.isFetching,
    products: [...products.items]
})

const mapDispatchToProps = dispatch => ({
    getStoreProducts: storeId => dispatch(getStoreProducts(storeId))
})

export default connect(mapStateToProps, mapDispatchToProps)(StoreProducts)
