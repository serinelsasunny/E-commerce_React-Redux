import cartImage from "../Images/cart1.jpg";
import Styles from "./Header.module.css";
import { NavLink } from "react-router-dom";
import { searchItem } from "./Products/ProductsSlice";
import { useDispatch } from "react-redux";
function Header() {
  const dispatch = useDispatch();
  function onSearchTextchange($event) {
    dispatch(searchItem($event.target.value));
  }
  return (
    <nav className="navbar navbar-expand-lg bg-light fs-6 p-3 text-uppercase border-bottom ">
      <div className="container-fluid ">
        <a class="navbar-brand" href="/">
          E-MART
        </a>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarToggler"
          aria-controls="navbarToggler"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse" id="navbarToggler">
          <ul class="navbar-nav me-auto mb-2 mb-lg-0">
            <li class="nav-item">
              <NavLink to={"/"} className="nav-link ">
                HOME
              </NavLink>
            </li>

            <li class="nav-item">
              <NavLink to={"/AboutUs"} className="nav-link ">
                ABOUT US
              </NavLink>
            </li>
            <li class="nav-item">
              <NavLink to={"/ContactUs"} className="nav-link ">
                CONTACT US
              </NavLink>
            </li>
            <li class="nav-item">
              <NavLink to={"/Products"} className="nav-link ">
                PRODUCTS
              </NavLink>
            </li>
          </ul>
          <form class="d-flex" role="search" style={{ paddingRight: "40%" }}>
            <input
              class="form-control me-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
              onChange={onSearchTextchange}
            />
            <button class="btn btn-outline-success" type="submit">
              Search
            </button>
          </form>
          <div className="">
            <NavLink to={"/Cart"} className="nav-link ">
              <img className={Styles.img} src={cartImage} />{" "}
            </NavLink>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Header;
