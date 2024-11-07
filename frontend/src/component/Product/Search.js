// import React, { useState, Fragment } from "react";
// import "./Search.css";

// const Search = ({ history }) => {
//   const [keyword, setKeyword] = useState("");

//   const searchSubmitHandler = (e) => {
//     e.preventDefault();

//     if (keyword.trim()) {
//       history.push(`/products/${keyword}`);
//     } else {
//       history.push("/products");
//     }
//   };

//   return (
//     <Fragment>
//       <form className="searchBox" onSubmit={searchSubmitHandler}>
//         <input
//           type="text"
//           placeholder="Search a Product ..."
//           onChange={(e) => setKeyword(e.target.value)}
//         />

//         <input type="submit" value="Search" />
//       </form>
//     </Fragment>
//   );
// };

// export default Search;

import React, { useState, Fragment } from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate
import "./Search.css";
import MetaData from "../layout/MetaData";

const Search = () => {
  const [keyword, setKeyword] = useState("");
  const navigate = useNavigate(); // Create navigate function

  const searchSubmitHandler = (e) => {
    e.preventDefault();
    console.log("Submitted keyword:", keyword); // Debugging line

    // navigate(`/products?keyword=${keyword}`);
    if (keyword.trim()) {
      navigate(`/products?keyword=${keyword}`); // Send keyword as a query parameter
    } else {
      navigate("/products");
    }
  };

  return (
    <Fragment>
      <MetaData title="Search A Product -- VHACOMMERCE" />
      <form className="searchBox" onSubmit={searchSubmitHandler}>
        <input
          type="text"
          placeholder="Search a Product ..."
          onChange={(e) => setKeyword(e.target.value)}
          required // Ensure the field is not empty
        />
        <input type="submit" value="Search" />
      </form>
    </Fragment>
  );
};

export default Search;
