// import React from "react";
// import { ReactNavbar } from "overlay-navbar";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import {
//   faSearch,
//   faShoppingCart,
//   faUser,
// } from "@fortawesome/free-solid-svg-icons";
// import { Link } from "react-router-dom"; // Import Link from react-router-dom
// import logo from "../../../images/logo.png";
// import "./Header.css"; // Import your CSS file for styling

// const options = {
//   // burgerColor: "#eb4034",
//   burgerColor: "#333", // Set the burger icon color to a darker shade
//   burgerColorHover: "#eb4034", // Color when hovered
//   burgerSpacing: "500px",
//   // burgerSize: "25px", // Adjust the size of the burger lines
//   // burgerSpacing: "5px", // Increase the space between the hamburger lines
//   // burgerAnimation: "cross",
//   logo,
//   logoWidth: "20vmax",
//   navColor1: "white",
//   logoHoverSize: "10px",
//   logoHoverColor: "#eb4034",
//   link1Text: "Home",
//   link2Text: "Products",
//   link3Text: "Contact",
//   link4Text: "About",
//   link1Url: "/",
//   link2Url: "/products",
//   link3Url: "/contact",
//   link4Url: "/about",
//   link1Size: "1.3vmax",
//   link1Color: "rgba(35, 35, 35, 0.8)",
//   nav1justifyContent: "flex-end",
//   nav2justifyContent: "flex-end",
//   nav3justifyContent: "flex-start",
//   nav4justifyContent: "flex-start",
//   link1ColorHover: "#eb4034",
//   link1Margin: "1vmax",
//   profileIconUrl: "/login",
//   profileIconColor: "rgba(35, 35, 35, 0.8)",
//   profileIconColorHover: "#eb4034",
//   searchIconColor: "rgba(35, 35, 35,0.8)",
//   cartIconColor: "rgba(35, 35, 35,0.8)",

//   searchIconColorHover: "#eb4034",
//   cartIconColorHover: "#eb4034",
//   cartIconMargin: "1vmax",
//   burgerAnimation: "cross",
// };

// const Header = () => {
//   return (
//     <div className="header-container">
//       <ReactNavbar {...options} />
//       <div className="icon-container">
//         <Link to="/search" className="icon-link">
//           <FontAwesomeIcon icon={faSearch} className="icon" />
//         </Link>

//         <Link to="/cart" className="icon-link">
//           <FontAwesomeIcon icon={faShoppingCart} className="icon" />
//         </Link>
//         <Link to="/login" className="icon-link">
//           <FontAwesomeIcon icon={faUser} className="icon" />
//         </Link>
//       </div>
//     </div>
//   );
// };

// export default Header;

//2ndcode this is also good

// import React, { useState, useEffect } from "react";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faBars, faXmark } from "@fortawesome/free-solid-svg-icons";
// import { Link } from "react-router-dom"; // Import Link from react-router-dom
// import "./Header.css"; // Import your CSS file for styling

// const Header = () => {
//   // Step 2: Read sidebar state from localStorage
//   const [isChecked, setIsChecked] = useState(
//     localStorage.getItem("sidebarState") === "true" // Check if sidebar state is stored
//   );

//   // Step 3: Update localStorage when sidebar state changes
//   const toggleSidebar = () => {
//     const newState = !isChecked;
//     setIsChecked(newState);
//     localStorage.setItem("sidebarState", newState); // Store new state in localStorage
//   };

//   useEffect(() => {
//     // This will ensure that the sidebar is persistent even when you reload or navigate between pages
//     setIsChecked(localStorage.getItem("sidebarState") === "true");
//   }, []); // Empty dependency array ensures this effect runs once on component mount

//   return (
//     <div className="main_box">
//       <input
//         type="checkbox"
//         id="check"
//         checked={isChecked}
//         onChange={toggleSidebar}
//       />

//       {/* Sidebar Toggle Button */}
//       <div className="btn_one">
//         <label htmlFor="check" style={{ color: "white" }}>
//           <FontAwesomeIcon icon={faBars} />
//         </label>
//       </div>

//       {/* Sidebar Menu */}
//       <div className={`sidebar_menu ${isChecked ? "open" : ""}`}>
//         <div className="logo">
//           <Link to="/">VHACOMMERCE</Link>
//         </div>

//         {/* Close Button */}
//         <div className="btn_two">
//           <label htmlFor="check" style={{ color: "grey" }}>
//             <FontAwesomeIcon icon={faXmark} />
//           </label>
//         </div>

//         {/* Menu Items */}
//         <div className="menu">
//           <ul>
//             <li>
//               <Link to="/">Menu</Link>
//             </li>
//             <li>
//               <Link to="/products">Products</Link>
//             </li>
//             <li>
//               <Link to="/about">About</Link>
//             </li>
//             <li>
//               <Link to="/contact">Contact</Link>
//             </li>
//             <li>
//               <Link to="/search">Search</Link>
//             </li>
//             <li>
//               <Link to="/feedback">Feedback</Link>
//             </li>
//           </ul>
//         </div>

//         {/* Social Media Links */}
//         <div className="social_media">
//           <ul>
//             <li>
//               <Link to="#" aria-label="Facebook"></Link>
//             </li>
//             <li>
//               <Link to="#" aria-label="Twitter"></Link>
//             </li>
//             <li>
//               <Link to="#" aria-label="Instagram"></Link>
//             </li>
//             <li>
//               <Link to="#" aria-label="YouTube"></Link>
//             </li>
//           </ul>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Header;

//3rd check always

// Header.js (Make sure the SidebarContext is used here)
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faXmark } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import { useSidebar } from "../../layout/Header/SidebarContext"; // Import the useSidebar hook
import "./Header.css"; // Adjust for your styles

const Header = () => {
  // Step 1: Use the SidebarContext to manage the sidebar state
  const { isChecked, toggleSidebar } = useSidebar();

  return (
    <div className="header-container">
      {/* Hamburger Menu Button */}
      <div className="btn_one" onClick={toggleSidebar}>
        <FontAwesomeIcon icon={faBars} style={{ color: "red" }} />
      </div>

      {/* Sidebar Menu */}
      <div className={`sidebar_menu ${isChecked ? "open" : ""}`}>
        <div className="logo">
          <Link to="/">VHACOMMERCE</Link>
        </div>

        {/* Close Button */}
        <div className="btn_two" onClick={toggleSidebar}>
          <FontAwesomeIcon icon={faXmark} style={{ color: "grey" }} />
        </div>

        {/* Menu Items */}
        <div className="menu">
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/products">Products</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/contact">Contact</Link>
            </li>
            <li>
              <Link to="/search">Search</Link>
            </li>
            <li>
              <Link to="/cart">Shopping Cart</Link>
            </li>
            <li>
              <Link to="/login">User</Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Header;
