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
        class="carousel slide"
        data-ride="carousel"
      >
        <div
          class="carousel-inner"
          style={{ height: "350px", width: "500rem" }}
        >
          <div
            class="carousel-item active"
            style={{ height: "500rem", width: "100rem" }}
          >
            <img
              class="d-block w-100"
              src="https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg"
              alt="First slide"
            ></img>
            <div class="carousel-caption d-none d-md-block">
              <h5>My Caption Title (1st Image)</h5>
            </div>
          </div>
          <div
            class="carousel-item "
            style={{ height: "350px", width: "500rem" }}
          >
            <img
              class="d-block w-100"
              src="https://fakestoreapi.com/img/71li-ujtlUL._AC_UX679_.jpg"
              alt="Second slide"
            ></img>
          </div>
          <div
            class="carousel-item"
            style={{ height: "350px", width: "500rem" }}
          >
            <img
              class="d-block w-100"
              src="https://fakestoreapi.com/img/71li-ujtlUL._AC_UX679_.jpg"
              alt="Third slide"
            ></img>
          </div>
        </div>
        <a
          class="carousel-control-prev"
          href="#carouselExampleIndicators"
          role="button"
          data-slide="prev"
        >
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="sr-only">Previous</span>
        </a>
        <a
          class="carousel-control-next"
          href="#carouselExampleIndicators"
          role="button"
          data-slide="next"
        >
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="sr-only">Next</span>
        </a>
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
