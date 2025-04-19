import Product_card from "../ProductCard";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchProducts,
  fetchProductsbyCategory,
  searchItem,
} from "../Products/ProductsSlice";

function Products() {
  //usedispatch() to dispatch the reducer
  const dispatch = useDispatch();
  const { status, searchText, newProducts } = useSelector(
    (state) => state.products
  );

  // Fetch products from the API
  //loading products
  useEffect(() => {
    if (status === "idle") {
      dispatch(fetchProducts());
    }
  }, [status, dispatch]);

  //Fetch the products category
  function loadCategory(event) {
    event.preventDefault();
    var select = document.getElementById("selectCategory");
    var category = select.options[select.selectedIndex].value;

    dispatch(fetchProductsbyCategory(category));
  }
  // Fetch products whenever search text changes
  useEffect(() => {
    if (searchText.trim() !== "") {
      dispatch(searchItem(searchText));
    }
  }, [searchText, dispatch]);

  const location = "Products_page";

  return (
    <div>
      <h2>Categories</h2>
      <div class=" container justify-content-center">
        <form class="d-flex" role="search" style={{ paddingRight: "40%" }}>
          <select class="form-control " id="selectCategory">
            <option value="electronics">Electronics</option>
            <option value="jewelery">Jewelery</option>
            <option value="men's clothing">Men's clothing</option>
            <option value="women's clothing">Women's clothing</option>
          </select>

          <button
            className="btn btn-outline-success"
            type="submit"
            onClick={loadCategory}
          >
            Search
          </button>
        </form>
      </div>
      {status === "loading" && <h5>Loading.....</h5>}
      {status === "error" && <h5>Error occurred while loading</h5>}
      <Product_card />
    </div>
  );
}

export default Products;
