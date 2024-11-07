import {
  ADD_TO_CART,
  REMOVE_CART_ITEM,
  SAVE_SHIPPING_INFO,
  SET_CART_ITEMS,
  CLEAR_CART,
} from "../constants/cartConstants";
import axios from "axios";

// Add to Cart with User-Specific Storage
export const addItemsToCart = (id, quantity) => async (dispatch, getState) => {
  try {
    // Fetch product details from backend
    const { data } = await axios.get(`/api/v1/product/${id}`);

    // Dispatch ADD_TO_CART action
    dispatch({
      type: ADD_TO_CART,
      payload: {
        product: data.product._id,
        name: data.product.name,
        price: data.product.price,
        image: data.product.images[0].url,
        stock: data.product.Stock,
        quantity,
      },
    });

    // Get the logged-in user's ID from the state
    const { user } = getState().user;
    if (user && user._id) {
      const cartKey = `cartItems_${user._id}`;
      // Store cart items in localStorage under a user-specific key
      localStorage.setItem(cartKey, JSON.stringify(getState().cart.cartItems));
    }
  } catch (error) {
    console.error("Error adding items to cart:", error);
  }
};

// Remove from Cart with User-Specific Storage
export const removeItemsFromCart = (id) => async (dispatch, getState) => {
  try {
    // Dispatch REMOVE_CART_ITEM action
    dispatch({
      type: REMOVE_CART_ITEM,
      payload: id,
    });

    // Get the logged-in user's ID from the state
    const { user } = getState().user;
    if (user && user._id) {
      const cartKey = `cartItems_${user._id}`;
      // Update cart items in localStorage under the user-specific key
      localStorage.setItem(cartKey, JSON.stringify(getState().cart.cartItems));
    }
  } catch (error) {
    console.error("Error removing items from cart:", error);
  }
};

// Save Shipping Info
export const saveShippingInfo = (data) => async (dispatch) => {
  try {
    dispatch({
      type: SAVE_SHIPPING_INFO,
      payload: data,
    });

    // Store shipping info in localStorage
    localStorage.setItem("shippingInfo", JSON.stringify(data));
  } catch (error) {
    console.error("Error saving shipping info:", error);
  }
};

// Fetch Cart Items for Logged-In User
export const fetchCartItems = () => async (dispatch, getState) => {
  try {
    const { user } = getState().user;
    if (user && user._id) {
      const cartKey = `cartItems_${user._id}`;
      const storedCart = JSON.parse(localStorage.getItem(cartKey));

      if (storedCart) {
        dispatch({ type: SET_CART_ITEMS, payload: storedCart });
      }
    }
  } catch (error) {
    console.error("Failed to fetch cart items:", error);
  }
};
