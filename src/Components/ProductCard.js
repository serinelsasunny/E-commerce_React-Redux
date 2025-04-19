import { useNavigate, useNavigation } from "react-router-dom";
import ProductDetails from "./Pages/ProductDetails";
import { useSelector } from "react-redux";

function Product_card() {
  const navigate = useNavigate();
  const { newProducts, inProgress } = useSelector((state) => state.products);

  return (
    <div className="container py-5">
      <div className="row">
        {inProgress && <h5>Loading...</h5>}
        {newProducts.map((p) => (
          <div className="col-lg-4 d-flex align-items-stretch" key={p.id}>
            <div className="card d-flex txt-black shadow-0 border rounded-1 justify-content-between align-items-center space-around">
              <img
                className="card-img-top justify-content"
                style={{ height: "20rem", width: "20rem" }}
                src={p.image}
                alt={p.title}
              />
              <div className="card-body">
                <div className="text-center mt-1 d-flex flex-column align-items-stretch text-wrap">
                  <h4 className="card-title">{p.category}</h4>
                  <h6 className="text-primary mb-1 pb-3 text-wrap">
                    {p.title}
                  </h6>
                  <button
                    className="btn btn-secondary"
                    onClick={() => {
                      // Navigate to ProductDetails page and pass the product data
                      navigate("/ProductDetails", {
                        state: { Product: p },
                      });
                    }}
                  >
                    Details
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );

  return null;
}

export default Product_card;
