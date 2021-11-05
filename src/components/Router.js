import React from 'react'
import { Route, Switch, useLocation } from 'react-router-dom';
import Home from '../pages/Home'
import ProductView from './dummyComponents/ProductView'
import ScrollToTop from './ScrollToTop'
import BreadCrumb from './dummyComponents/BreadCrumb'
import CategoryProducts from './dummyComponents/CategoryProducts'
import NavBar from './dummyComponents/navBar/NavBar';
import SearchContainer from './dummyComponents/generalSearch/SearchContainer';
import Comparison from '../pages/Comparison';

const RouterEcommerce = () => {
    let location = useLocation();
     return (
        <>
            
                <ScrollToTop/>
                <NavBar/>
                { location.pathname !== "/" ? <BreadCrumb/> : null }
                
                <Switch>
                    <Route exact path="/" component={Home}/>
                    <Route path="/search" component={SearchContainer}/>
                    <Route path="/comparar" component={Comparison}/>
                    <Route exact path="/:category" component={CategoryProducts}/>
                    <Route path="/:category/:id" component={ProductView}/>
                </Switch>
            
        </>
    )
}

export default RouterEcommerce
