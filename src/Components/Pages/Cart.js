import { useContext } from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteItem } from "../CartSlice/CartSlice";
function Cart(props) {
  const { cartItems, tempitems, totalPrice } = useSelector(
    (state) => state.cart
  );
  const dispatch = useDispatch();
  useSelector((state) => console.log(state));
  return (
    <div className="container py-5">
      <h2>CART</h2>
      {cartItems.map((p) => {
        return (
          <div className="row justify-content-center mb-3" key={p.id}>
            <div className="col-md-12 col-xl-10">
              <div className="card shadow-0 border rounded-3">
                <div className="card-body">
                  <div className="row">
                    <div className="col-md-12 col-lg-3 col-xl-3 mb-4 mb-lg-0">
                      <div className="bg-image hover-zoom ripple rounded ripple-surface">
                        <img src={p.image} className="w-100" />
                      </div>
                    </div>
                    <div className="col-md-6 col-lg-6 col-xl-6">
                      <h5>{p.title}</h5>
                    </div>

                    <div className="col-md-6 col-lg-3 col-xl-3 border-sm-start-none border-start">
                      <div className="d-flex flex-column align-items-center mb-1">
                        <h4 className="mb-1 me-1">${p.price}</h4>
                        <h6 className="mb-1 me-1">Quantity:{p.quantity}</h6>
                        <h6 className="mb-1 me-1">
                          Total:{p.price * p.quantity}
                        </h6>
                      </div>
                      <h6 className="text-success">Free shipping</h6>
                      <div className="d-flex flex-column mt-4">
                        <button
                          className="btn btn-secondary"
                          onClick={() => {
                            /* Delete from cart functionality */
                            //delete the selected item from the cart
                            dispatch(deleteItem(p.id));
                          }}
                        >
                          Delete
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );
      })}
      <h4></h4>
    </div>
  );
}

export default Cart;
