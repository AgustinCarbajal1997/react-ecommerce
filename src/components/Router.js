import React, { useState, useLayoutEffect } from "react";
import { Route, Switch, useLocation } from "react-router-dom";
import Home from "../pages/Home";
import ProductView from "./dummyComponents/ProductView";
import ScrollToTop from "./ScrollToTop";
import BreadCrumb from "./dummyComponents/BreadCrumb";
import CategoryProducts from "./dummyComponents/CategoryProducts";
import NavBar from "./dummyComponents/navBar/NavBar";
import SearchContainer from "./dummyComponents/generalSearch/SearchContainer";
import Comparison from "../pages/Comparison";
import { useSelector, useDispatch } from "react-redux";
import { continueSession } from "../store/actions/auth.action";
import Cookies from "universal-cookie";
import Login from "./Login";
import Profile from "../pages/Profile";
import PrivateRoutes from "./router/PrivateRoutes";
import Favorites from "../pages/Favorites";
import DataUser from "../pages/DataUser";
import Cart from "../pages/Cart";
const cookies = new Cookies();
const RouterEcommerce = () => {
  let location = useLocation();
  const [openLogin, setOpenLogin] = useState(true);
  const dispatch = useDispatch();
  const token = useSelector((state) => state.auth.access_token);
  useLayoutEffect(() => {
    if (cookies.get("tk")) {
      dispatch(continueSession(cookies.get("tk")));
      return;
    }
  }, [dispatch]);

  return (
    <>
      <ScrollToTop />
      <NavBar />
      {location.pathname !== "/" ? <BreadCrumb /> : null}
      {!token && openLogin && <Login setOpenLogin={setOpenLogin} />}
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/search" component={SearchContainer} />
        <Route path="/comparar" component={Comparison} />
        <PrivateRoutes path="/perfil/carrito">
          <Cart/>
        </PrivateRoutes>
        <PrivateRoutes path="/perfil/datos">
          <DataUser/>
        </PrivateRoutes>
        <PrivateRoutes path="/perfil/favoritos">
          <Favorites/>
        </PrivateRoutes>
        <PrivateRoutes path="/perfil">
          <Profile />
        </PrivateRoutes>

        <Route exact path="/:category" component={CategoryProducts} />
        <Route path="/:category/:id" component={ProductView} />
      </Switch>
    </>
  );
};

export default RouterEcommerce;
