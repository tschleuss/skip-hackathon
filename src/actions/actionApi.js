import * as ActionCreators from './actionCreators'
import { StoreAPI } from '../api/Api'

/** Auth */

export function userLoggedIn(token) {
    return dispatch => dispatch(ActionCreators.userLoggedIn(token))
}

/** Stores */

export function getAllStores() {
    return dispatch => {
        dispatch(ActionCreators.getStores())
        return StoreAPI.list()
            .then(({ data: stores }) => {
                dispatch(ActionCreators.receiveStores(stores))
            })
    }
}

export function getStoreProducts(storeId) {
    return dispatch => {
        dispatch(ActionCreators.getStoresProducts())
        return StoreAPI.products(storeId)
            .then(({ data: products }) => {
                dispatch(ActionCreators.receiveStoreProducts(storeId, products))
            })
    }
}
