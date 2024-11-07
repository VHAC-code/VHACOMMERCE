// // import { configureStore } from "@reduxjs/toolkit"; // Import configureStore from Redux Toolkit
// import { createStore, combineReducers, applyMiddleware } from "redux"; //createStore removed from here
// import { thunk } from "redux-thunk"; // Correct import for redux-thunk
// import { composeWithDevTools } from "redux-devtools-extension";
// import {
//   newProductReducer,
//   newReviewReducer,
//   productDetailsReducer,
//   productReducer,
//   productReviewsReducer,
//   productsReducer,
//   reviewReducer,
// } from "./reducers/productReducer";

// import {
//   allUsersReducer,
//   forgotPasswordReducer,
//   profileReducer,
//   userDetailsReducer,
//   userReducer,
// } from "./reducers/userReducer";

// import { cartReducer } from "./reducers/cartReducer";
// import {
//   allOrdersReducer,
//   myOrdersReducer,
//   newOrderReducer,
//   orderDetailsReducer,
//   orderReducer,
// } from "./reducers/orderReducer";

// const reducer = combineReducers({
//   products: productsReducer,
//   productDetails: productDetailsReducer,
//   user: userReducer,
//   profile: profileReducer,
//   forgotPassword: forgotPasswordReducer,
//   cart: cartReducer,
//   newOrder: newOrderReducer,
//   myOrders: myOrdersReducer,
//   orderDetails: orderDetailsReducer,
//   newReview: newReviewReducer,
//   newProduct: newProductReducer,
//   product: productReducer,
//   allOrders: allOrdersReducer,
//   order: orderReducer,
//   allUsers: allUsersReducer,
//   userDetails: userDetailsReducer,
//   productReviews: productReviewsReducer,
//   review: reviewReducer,
// });

// let initialState = {
//   cart: {
//     cartItems: localStorage.getItem("cartItems")
//       ? JSON.parse(localStorage.getItem("cartItems"))
//       : [],
//     shippingInfo: localStorage.getItem("shippingInfo")
//       ? JSON.parse(localStorage.getItem("shippingInfo"))
//       : {},
//   },
// };

// const middleware = [thunk]; // Applying redux-thunk middleware

// // // Create store with dev tools and middleware
// const store = createStore(
//   reducer,
//   initialState,
//   composeWithDevTools(applyMiddleware(...middleware)) // Apply middleware correctly
// );

// // const store = configureStore({
// //   reducer,
// //   preloadedState: initialState, // Provide initial state
// //   // Middleware setup (redux-thunk is included by default in Redux Toolkit)
// // });

// export default store;

//2nd way

import { configureStore } from "@reduxjs/toolkit";
import { combineReducers } from "redux";
import thunk from "redux-thunk";
import {
  newProductReducer,
  newReviewReducer,
  productDetailsReducer,
  productReducer,
  productReviewsReducer,
  productsReducer,
  reviewReducer,
} from "./reducers/productReducer";

import {
  allUsersReducer,
  forgotPasswordReducer,
  profileReducer,
  userDetailsReducer,
  userReducer,
} from "./reducers/userReducer";

import { cartReducer } from "./reducers/cartReducer";
import {
  allOrdersReducer,
  myOrdersReducer,
  newOrderReducer,
  orderDetailsReducer,
  orderReducer,
} from "./reducers/orderReducer";

// Combine all reducers
const reducer = combineReducers({
  products: productsReducer,
  productDetails: productDetailsReducer,
  user: userReducer,
  profile: profileReducer,
  forgotPassword: forgotPasswordReducer,
  cart: cartReducer,
  newOrder: newOrderReducer,
  myOrders: myOrdersReducer,
  orderDetails: orderDetailsReducer,
  newReview: newReviewReducer,
  newProduct: newProductReducer,
  product: productReducer,
  allOrders: allOrdersReducer,
  order: orderReducer,
  allUsers: allUsersReducer,
  userDetails: userDetailsReducer,
  productReviews: productReviewsReducer,
  review: reviewReducer,
});

// Define initial state with cart items
const initialState = {
  cart: {
    cartItems: localStorage.getItem("cartItems")
      ? JSON.parse(localStorage.getItem("cartItems"))
      : [],
    shippingInfo: localStorage.getItem("shippingInfo")
      ? JSON.parse(localStorage.getItem("shippingInfo"))
      : {},
  },
};

// Configure store using configureStore from Redux Toolkit
const store = configureStore({
  reducer,
  preloadedState: initialState,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(thunk),
});

export default store;
