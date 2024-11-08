// import React, { Fragment, useEffect } from "react";
// import "./Products.css";
// import { useSelector, useDispatch } from "react-redux";
// import { clearErrors, getProduct } from "../../actions/productAction";
// import Loader from "../layout/Loader/Loader";
// import ProductCard from "../Home/ProductCard";

// const Products = ({ match }) => {
//   const dispatch = useDispatch();

//   const { products, loading, error, productsCount } = useSelector(
//     (state) => state.products
//   );

//   const keyword = match.params.keyword;

//   useEffect(() => {
//     dispatch(getProduct(keyword));
//   }, [dispatch, keyword]);

//   return (
//     <Fragment>
//       {loading ? (
//         <Loader />
//       ) : (
//         <Fragment>
//           <h2 className="productsHeading">Products</h2>

//           <div className="products">
//             {products &&
//               products.map((product) => (
//                 <ProductCard key={product._id} product={product} />
//               ))}
//           </div>
//         </Fragment>
//       )}
//     </Fragment>
//   );
// };
// export default Products;

// import React, { Fragment, useEffect, useState } from "react";
// import "./Products.css";
// import { useSelector, useDispatch } from "react-redux";
// import { clearErrors, getProduct } from "../../actions/productAction";
// import Loader from "../layout/Loader/Loader";
// import ProductCard from "../Home/ProductCard";
// import { useParams } from "react-router-dom";
// import Pagination from "react-js-pagination";
// import Slider from "@material-ui/core/Slider";
// import Typography from "@material-ui/core/Typography";
// import { useAlert } from "react-alert";
// import MetaData from "../layout/MetaData";

// const categories = [
//   "Laptop",
//   "Footwear",
//   "Bottom",
//   "Tops",
//   "Kids",
//   "Women",
//   "Attire",
//   "Camera",
//   "SmartPhones",
//   "Home Smart Devices",
// ];

// const Products = () => {
//   const dispatch = useDispatch();
//   const alert = useAlert();

//   const [currentPage, setCurrentPage] = useState(1);
//   const [price, setPrice] = useState([0, 25000]);
//   const [category, setCategory] = useState("");
//   const [ratings, setRatings] = useState(0);

//   const { keyword } = useParams();

//   const {
//     products,
//     loading,
//     error,
//     productsCount,
//     resultPerPage,
//     filteredProductsCount,
//   } = useSelector((state) => state.products);

//   const setCurrentPageNo = (e) => {
//     setCurrentPage(e);
//   };

//   const priceHandler = (event, newPrice) => {
//     setPrice(newPrice);
//   };

//   useEffect(() => {
//     if (error) {
//       alert.error(error);
//       dispatch(clearErrors());
//     }

//     // Dispatch the action to fetch products based on current filters
//     dispatch(getProduct(keyword, currentPage, price, category, ratings));
//   }, [dispatch, keyword, currentPage, price, category, ratings, alert, error]);

//   let count = filteredProductsCount;

//   return (
//     <Fragment>
//       {loading ? (
//         <Loader />
//       ) : (
//         <Fragment>
//           <MetaData title="PRODUCTS - VHACOMMERCE" />

//           <h2 className="productsHeading">Products</h2>

//           <div className="products">
//             {products &&
//               products.map((product) => (
//                 <ProductCard key={product._id} product={product} />
//               ))}
//           </div>

//           <div className="filterBox">
//             <Typography>Price</Typography>
//             <Slider
//               value={price}
//               onChange={priceHandler}
//               valueLabelDisplay="auto"
//               aria-labelledby="range-slider"
//               min={0}
//               max={25000}
//             />

//             <Typography>Categories</Typography>
//             <ul className="categoryBox">
//               {categories.map((categoryOption) => (
//                 <li
//                   className="category-link"
//                   key={categoryOption}
//                   onClick={() => {
//                     setCategory(categoryOption);
//                     setCurrentPage(1); // Reset to the first page when a new category is selected
//                   }}
//                 >
//                   {categoryOption}
//                 </li>
//               ))}
//             </ul>

//             <fieldset>
//               <Typography component="legend"> Ratings Above </Typography>
//               <Slider
//                 value={ratings}
//                 onChange={(e, newRating) => {
//                   setRatings(newRating);
//                   setCurrentPage(1); // Reset to the first page when ratings change
//                 }}
//                 aria-labelledby="continuous-slider"
//                 valueLabelDisplay="auto"
//                 min={0}
//                 max={5}
//               />
//             </fieldset>
//           </div>

//           {resultPerPage < count && (
//             <div className="paginationBox">
//               <Pagination
//                 activePage={currentPage}
//                 itemsCountPerPage={resultPerPage}
//                 totalItemsCount={productsCount}
//                 onChange={setCurrentPageNo}
//                 nextPageText="Next"
//                 prevPageText="Prev"
//                 firstPageText="Last"
//                 itemClass="page-item"
//                 linkClass="page-link"
//                 activeClass="pageItemActive"
//                 activeLinkClass="pageLinkActive"
//               />
//             </div>
//           )}
//         </Fragment>
//       )}
//     </Fragment>
//   );
// };

// export default Products;

import React, { Fragment, useEffect, useState } from "react";
import "./Products.css";
import { useSelector, useDispatch } from "react-redux";
import { clearErrors, getProduct } from "../../actions/productAction";
import Loader from "../layout/Loader/Loader";
import ProductCard from "../Home/ProductCard";
import { useLocation } from "react-router-dom"; // Import useLocation
import Pagination from "react-js-pagination";
import Slider from "@material-ui/core/Slider";
import Typography from "@material-ui/core/Typography";
import { useAlert } from "react-alert";
import MetaData from "../layout/MetaData";

const categories = [
  "Laptop",
  "Footwear",
  "Bottom",
  "Tops",
  "Kids",
  "Women",
  "Attire",
  "Camera",
  "SmartPhones",
  "Home Smart Devices",
];

const Products = () => {
  const dispatch = useDispatch();
  const alert = useAlert();

  const [currentPage, setCurrentPage] = useState(1);
  const [price, setPrice] = useState([0, 25000]);
  const [category, setCategory] = useState("");
  const [ratings, setRatings] = useState(0);

  const location = useLocation();
  const query = new URLSearchParams(location.search);
  const keyword = query.get("keyword") || ""; // Get keyword from query string

  const {
    products,
    loading,
    error,
    productsCount,
    resultPerPage,
    filteredProductsCount,
  } = useSelector((state) => state.products);

  // const { success: productSuccess } = useSelector((state) => state.newProduct); // Detect new product success //extra

  const setCurrentPageNo = (e) => {
    setCurrentPage(e);
    dispatch(getProduct(keyword, e, price, category, ratings));
  };

  const priceHandler = (event, newPrice) => {
    setPrice(newPrice);
  };

  useEffect(() => {
    if (error) {
      alert.error(error);
      dispatch(clearErrors());
    }

    // Reset ratings when category changes
    if (category) {
      setRatings(0);
    }

    // Dispatch the action to fetch products based on the keyword
    dispatch(getProduct(keyword, currentPage, price, category, ratings));
  }, [dispatch, keyword, currentPage, price, category, ratings, alert, error]);

  let count = filteredProductsCount || productsCount;

  return (
    <Fragment>
      {loading ? (
        <Loader />
      ) : (
        <Fragment>
          <MetaData title="PRODUCTS - VHACOMMERCE" />
          <h2 className="productsHeading">Products</h2>
          <div className="products">
            {products &&
              products.map((product) => (
                <ProductCard key={product._id} product={product} />
              ))}
          </div>
          <div className="filterBox">
            <Typography>Price</Typography>
            <Slider
              value={price}
              onChange={priceHandler}
              valueLabelDisplay="auto"
              aria-labelledby="range-slider"
              min={0}
              max={25000}
            />
            <Typography>Categories</Typography>
            <ul className="categoryBox">
              {categories.map((category) => (
                <li
                  className="category-link"
                  key={category}
                  onClick={() => {
                    setCategory(category);
                    setRatings(0); // Reset ratings when a new category is selected
                  }}
                >
                  {category}
                </li>
              ))}
            </ul>
            <fieldset>
              <Typography component="legend"> Ratings Above </Typography>
              <Slider
                value={ratings}
                onChange={(e, newRating) => {
                  setRatings(newRating);
                }}
                aria-labelledby="continuous-slider"
                valueLabelDisplay="auto"
                min={0}
                max={5}
              />
            </fieldset>
          </div>
          {resultPerPage < count && (
            <div className="paginationBox">
              <Pagination
                activePage={currentPage}
                itemsCountPerPage={resultPerPage}
                // totalItemsCount={productsCount}
                totalItemsCount={count}
                onChange={setCurrentPageNo}
                nextPageText="Next"
                prevPageText="Prev"
                firstPageText="Last"
                itemClass="page-item"
                linkClass="page-link"
                activeClass="pageItemActive"
                activeLinkClass="pageLinkActive"
              />
            </div>
          )}
        </Fragment>
      )}
    </Fragment>
  );
};

export default Products;
