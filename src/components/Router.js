import React,{ useEffect } from 'react'
import { BrowserRouter as  HashRouter, Link, Route, Switch } from 'react-router-dom'
import AparatosHogar from '../pages/AparatosHogar'
import Celulares from '../pages/Celulares'
import Home from '../pages/Home'
import Tvs from '../pages/Tvs'
import Notebooks from '../pages/Notebooks'
import Fridges from '../pages/Fridges'
import ProductView from './dummyComponents/ProductView'
import { useDispatch } from 'react-redux'
import { getProducts } from '../store/actions/products.action'
import ScrollToTop from './ScrollToTop'
import StylesAndFashion from '../pages/StylesAndFashion'

const RouterEcommerce = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getProducts())
    }, [dispatch])

    return (
        <div>
            <HashRouter>
                <ScrollToTop/>
                <header className="header">
                    <nav className="nav-menu">
                        <Link className="nav-item" to="/">Home</Link>
                        <Link className="nav-item" to="/celulares">Celulares</Link>
                        <Link className="nav-item" to="/tv-leds">Tv, Audio y Video</Link>
                        <Link className="nav-item" to="/electrodomesticos">Electrodomésticos y Aires Ac.</Link>
                        <Link className="nav-item" to="/notebooks">Notebooks y Tecnología</Link>
                        <Link className="nav-item" to="/fridges">Heladeras y Lavarropas</Link>
                        <Link className="nav-item" to="/fashion">Moda y Estilo</Link>
                    </nav>
                </header>
                <Switch>
                    <Route exact path="/" component={Home}/>
                    <Route exact path="/celulares" component={Celulares}/>
                    <Route path="/celulares/:id" component={ProductView}/>
                    <Route exact path="/tv-leds" component={Tvs}/>
                    <Route path="/tv-leds/:id" component={ProductView}/>
                    <Route exact path="/electrodomesticos" component={AparatosHogar}/>
                    <Route path="/electrodomesticos/:id" component={ProductView}/>
                    <Route exact path="/notebooks" component={Notebooks}/>
                    <Route path="/notebooks/:id" component={ProductView}/>
                    <Route exact path="/fridges" component={Fridges}/>
                    <Route path="/fridges/:id" component={ProductView}/>
                    <Route exact path="/fashion" component={StylesAndFashion}/>
                    <Route path="/fashion/:id" component={ProductView}/>
                </Switch>
            </HashRouter>
        </div>
    )
}

export default RouterEcommerce
