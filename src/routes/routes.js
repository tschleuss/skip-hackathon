import React from 'react'
import { Switch } from 'react-router'
import DefaultLayout from '../containers/Layout'
import HomePage from '../pages/Home'
import AuthenticationPage from '../pages/Authentication'
import StoreListPage from '../pages/StoreList'
import StoreProductsPage from '../pages/StoreProducts'
import NotFoundPage from '../pages/NotFound'

const Routes = () =>
    <Switch>
        <DefaultLayout exact path="/" component={HomePage} />
        <DefaultLayout exact path="/auth" component={AuthenticationPage} />
        <DefaultLayout exact path="/stores" component={StoreListPage} />
        <DefaultLayout exact path="/:id/:slug" component={StoreProductsPage} />
        <DefaultLayout path="*" component={NotFoundPage} />
    </Switch>

export default Routes
