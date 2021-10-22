import { Switch } from "@mui/material";
import { useContext } from "react";
import { NavLink } from "react-router-dom";
import { ProductContext } from "../productContext";

const Header = (props) => {
  const { productArray, setProductArray } = useContext(ProductContext);

  return (
    <div className="container">
      <header className="d-flex justify-content-center py-3">
        <ul className="nav nav-pills">
          <li className="nav-item">
            <NavLink
              to="/login"
              activeClassName="active"
              className="nav-link"
              aria-current="page"
            >
              Login
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/signup" activeClassName="active" className="nav-link">
              Signup
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink
              to="/productlist"
              activeClassName="active"
              className="nav-link"
            >
              Browse Products
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/events" activeClassName="active" className="nav-link">
              Events
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink
              to="/gallery"
              activeClassName="active"
              className="nav-link"
            >
              Gallery
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink
              to="/addproduct"
              activeClassName="active"
              className="nav-link"
            >
              Add Product
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink
              to="/addvideo"
              activeClassName="active"
              className="nav-link"
            >
              Add Video
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/browse" activeClassName="active" className="nav-link">
              Browse Videos
            </NavLink>
          </li>
          <li className="nav-item">
            <h2>{productArray.length}</h2>
          </li>
          <li className="nav-item">
            <Switch
              checked={props.lightTheme}
              onChange={(e) => props.setLightTheme(e.target.checked)}
            ></Switch>
          </li>
        </ul>
      </header>
    </div>
  );
};

export default Header;
