import React from 'react'
import { BrowserRouter as Router, HashRouter, Link, Redirect, Route, Switch } from 'react-router-dom'
import AparatosHogar from '../pages/AparatosHogar'
import Celulares from '../pages/Celulares'
import Home from '../pages/Home'
import Tvs from '../pages/Tvs'

const RouterEcommerce = () => {
    return (
        <div>
            <HashRouter>
                <header className="header">
                    <nav className="nav-menu">
                        <Link className="nav-item" to="/">HOME</Link>
                        <Link className="nav-item" to="/celulares">CELULARES</Link>
                        <Link className="nav-item" to="/tv-leds">TV LEDS</Link>
                        <Link className="nav-item" to="/electrodomesticos">ELECTRODOMESTICOS</Link>
                    </nav>
                </header>

                <Switch>
                    <Route exact path="/" component={Home}/>
                    <Route exact path="/celulares" component={Celulares}/>
                    <Route exact path="/tv-leds" component={Tvs}/>
                    <Route exact path="/electrodomesticos" component={AparatosHogar}/>
                </Switch>
            </HashRouter>
        </div>
    )
}

export default RouterEcommerce
