import { useState, useEffect } from "react";
import Product_card from "../ProductCard";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts, searchItem, } from "../Products/ProductsSlice";

function Home() {
  const { status, searchText, newProducts } = useSelector(
    (state) => state.products
  );

  const location = "home_page";
  // Fetch products from the API
  const dispatch = useDispatch();
  //loading products
  useEffect(() => {
    if (status === "idle") {
      dispatch(fetchProducts());
    }
  }, [status, dispatch]);

 // Fetch products whenever search text changes
   useEffect(() => {
     if (searchText.trim() !== "") {
       dispatch(searchItem(searchText));
     }
   }, [searchText, dispatch]);
 
 
  return (
     <div>
      <div
        id="carouselExampleIndicators"
        className="carousel slide"
        data-bs-ride="carousel"
      >
        <div
          className="carousel-inner"
          style={{ height: "350px" }}
        >
          <div
            className="carousel-item active"
            style={{ height: "350px" }}
          >
            <img
              className="d-block w-100"
              src="https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_t.png"
              alt="First slide"
            ></img>
            <div className="carousel-caption d-none d-md-block">
              <h5>My Caption Title (1st Image)</h5>
            </div>
          </div>
          <div
            className="carousel-item"
            style={{ height: "350px" }}
          >
            <img
              className="d-block w-100"
              src="https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_t.png"
              alt="Second slide"
            ></img>
          </div>
          <div
            className="carousel-item"
            style={{ height: "350px" }}
          >
            <img
              className="d-block w-100"
              src="https://fakestoreapi.com/img/71li-ujtlUL._AC_UX679_t.png"
              alt="Third slide"
            ></img>
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide="prev"
        >
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide="next"
        >
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
      <div>
        <h2 className="text-center">NEW ARRIVALS</h2>
        {status === "loading" && <h5>Loading.....</h5>}
        {status === "error" && <h5>Error occurred while loading</h5>}
        <Product_card />
      </div>
    </div>
  );
}

export default Home;
