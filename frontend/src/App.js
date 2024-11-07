import "./App.css";

import Header from "./component/layout/Header/Header.js";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
  Switch,
} from "react-router-dom";
import WebFont from "webfontloader";
import "bootstrap/dist/css/bootstrap.min.css";
import React, { useEffect, useState } from "react";
import Footer from "./component/layout/Footer/Footer.js";
import Home from "./component/Home/Home.js";
import ProductDetails from "./component/Product/ProductDetails.js";
import Products from "./component/Product/Products.js";
import Search from "./component/Product/Search.js";
import LoginSignUp from "./component/User/LoginSignUp.js";
import store from "./store.js";
import { loadUser } from "./actions/userAction.js";
import UserOptions from "./component/layout/Header/UserOptions.js";
import { useSelector } from "react-redux";
import Profile from "./component/User/Profile.js";
import UpdateProfile from "./component/User/UpdateProfile.js";
import UpdatePassword from "./component/User/UpdatePassword.js";
import ForgotPassword from "./component/User/ForgotPassword.js";
import ResetPassword from "./component/User/ResetPassword.js";
import Cart from "./component/Cart/Cart.js";
import Shipping from "./component/Cart/Shipping.js";
import ConfirmOrder from "./component/Cart/ConfirmOrder.js";
import Payment from "./component/Cart/Payment.js";
import axios from "axios";
import MyOrders from "./component/Order/MyOrders.js";
import OrderDetails from "./component/Order/OrderDetails.js";
import Dashboard from "./component/admin/Dashboard.js";
import ProductList from "./component/admin/ProductList.js";
import NewProduct from "./component/admin/NewProduct.js";
import UpdateProduct from "./component/admin/UpdateProduct.js";
import OrderList from "./component/admin/OrderList.js";
import ProcessOrder from "./component/admin/ProcessOrder.js";
import UsersList from "./component/admin/UsersList.js";
import UpdateUser from "./component/admin/UpdateUser.js";
import ProductReviews from "./component/admin/ProductReviews.js";
import Contact from "./component/extrapage/contact.js";
import About from "./component/extrapage/about.js";
import { fetchCartItems } from "./actions/cartAction.js"; // Import fetchCartItems

import { SidebarProvider } from "./component/layout/Header/SidebarContext.js"; // Import the SidebarProvider
import NotFound from "./component/layout/NotFound/NotFound.js";

function App() {
  const { isAuthenticated, user, loading } = useSelector((state) => state.user);

  useEffect(() => {
    WebFont.load({
      google: {
        families: ["Roboto", "Droid Sans", "Chilanka"],
      },
    });

    store.dispatch(loadUser());
  }, []);

  useEffect(() => {
    if (isAuthenticated) {
      store.dispatch(fetchCartItems()); // Fetch user-specific cart items on login
    }
  }, [isAuthenticated]);

  //now you cant right click
  window.addEventListener("contextmenu", (e) => e.preventDefault());

  return (
    <SidebarProvider>
      <Router>
        <Header /> {/* <Header/> */}
        {isAuthenticated && user && <UserOptions user={user} />}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/product/:id" element={<ProductDetails />} />
          <Route path="/products" element={<Products />} />
          {/* <Route path="/products/:keyword" element={<Products />} /> */}
          <Route path="/search" element={<Search />} />

          {/* Protected Routes */}
          <Route
            path="/account"
            element={
              isAuthenticated ? <Profile /> : <Navigate to="/login" replace />
            }
          />
          <Route
            path="/me/update"
            element={
              isAuthenticated ? (
                <UpdateProfile />
              ) : (
                <Navigate to="/login" replace />
              )
            }
          />
          <Route
            path="/password/update"
            element={
              isAuthenticated ? (
                <UpdatePassword />
              ) : (
                <Navigate to="/login" replace />
              )
            }
          />

          <Route
            path="/shipping"
            element={
              isAuthenticated ? <Shipping /> : <Navigate to="/login" replace />
            }
          />

          <Route
            path="/order/confirm"
            element={
              isAuthenticated ? (
                <ConfirmOrder />
              ) : (
                <Navigate to="/login" replace />
              )
            }
          />

          <Route
            path="/process/payment"
            element={
              isAuthenticated ? <Payment /> : <Navigate to="/login" replace />
            }
          />

          <Route
            path="/orders"
            element={
              isAuthenticated ? <MyOrders /> : <Navigate to="/login" replace />
            }
          />

          <Route
            path="/orders/:id"
            element={
              isAuthenticated ? (
                <OrderDetails />
              ) : (
                <Navigate to="/login" replace />
              )
            }
          />

          <Route
            path="/admin/dashboard"
            element={
              isAuthenticated && user?.role === "admin" ? (
                <Dashboard />
              ) : (
                <Navigate to="/login" replace />
              )
            }
          />

          <Route
            path="/admin/products"
            element={
              isAuthenticated && user?.role === "admin" ? (
                <ProductList />
              ) : (
                <Navigate to="/login" replace />
              )
            }
          />

          <Route
            path="/admin/product"
            element={
              isAuthenticated && user?.role === "admin" ? (
                <NewProduct />
              ) : (
                <Navigate to="/login" replace />
              )
            }
          />

          <Route
            path="/admin/product/:id"
            element={
              isAuthenticated && user?.role === "admin" ? (
                <UpdateProduct />
              ) : (
                <Navigate to="/login" replace />
              )
            }
          />

          <Route
            path="/admin/orders"
            element={
              isAuthenticated && user?.role === "admin" ? (
                <OrderList />
              ) : (
                <Navigate to="/login" replace />
              )
            }
          />

          <Route
            path="/admin/order/:id"
            element={
              isAuthenticated && user?.role === "admin" ? (
                <ProcessOrder />
              ) : (
                <Navigate to="/login" replace />
              )
            }
          />

          <Route
            path="/admin/users"
            element={
              isAuthenticated && user?.role === "admin" ? (
                <UsersList />
              ) : (
                <Navigate to="/login" replace />
              )
            }
          />

          <Route
            path="/admin/user/:id"
            element={
              isAuthenticated && user?.role === "admin" ? (
                <UpdateUser />
              ) : (
                <Navigate to="/login" replace />
              )
            }
          />

          <Route
            path="/admin/reviews"
            element={
              isAuthenticated && user?.role === "admin" ? (
                <ProductReviews />
              ) : (
                <Navigate to="/login" replace />
              )
            }
          />

          {/* Public Routes */}
          <Route path="/password/forgot" element={<ForgotPassword />} />
          <Route path="/password/reset/:token" element={<ResetPassword />} />
          <Route path="/login" element={<LoginSignUp />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/about" element={<About />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
        <Footer />
      </Router>
    </SidebarProvider> //this sidebar provider is extra from my side
  );
}

export default App;
