import { useContext } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addItem } from "../CartSlice/CartSlice";

function ProductDetails() {
  const dispatch = useDispatch();

  const navigate = useNavigate();
  // Get the passed product data from the location state
  const location = useLocation();
  const Product = location.state?.Product; // Access the product from state

  if (!Product) {
    return <div>Product not found</div>; // Handle if the product is not found in the state
  }
  return (
    <div className="container py-5">
      <h2>{Product.title}</h2>
      <div className="row">
        <div className="col-lg-6">
          {/* Product Image */}
          <img
            className="card-img-top justify-content"
            style={{ height: "30rem", width: "30rem" }}
            src={Product.image}
            alt={Product.title}
          />
        </div>
        <div className="col-lg-6">
          {/* Product Details */}
          <div className="card shadow-0 border rounded-1">
            <div className="card-body">
              <h4 className="card-title">{Product.category}</h4>
              <h5 className="text-primary">{Product.title}</h5>
              <div className="text-warning mb-3">
                {/* Rating */}
                <i className="fa fa-star checked"></i>
                <i className="fa fa-star checked"></i>
                <i className="fa fa-star checked"></i>
                <i className="fa fa-star"></i>
                <i className="fa fa-star"></i>
              </div>
              <h6 className="text-danger">SAVE 50%</h6>
              <div className="d-flex flex-row align-items-center mb-3">
                <h4 className="mb-1 me-1">${Product.price}</h4>
                <span className="text-danger">
                  <s>M.R.P: ${Product.price * 2}</s>
                </span>
              </div>
              <p className="text-primary mb-3">
                FREE Delivery for Premium members
              </p>
              <div>
                {/* Add to Cart Button */}
                <button
                  className="btn btn-secondary"
                  onClick={() => {
                    /* Add to cart functionality */
                    //setCartItems
                    dispatch(addItem(Product));
                    navigate("/Cart");
                  }}
                >
                  Add to Cart
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="row mt-5">
        <div className="col">
          <h5>Description</h5>
          <p>{Product.description}</p> {/* Displaying product description */}
        </div>
      </div>
    </div>
  );
}

export default ProductDetails;
