import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <div className="container-fluid bg-dark navitem">
        <div className="row">
          <div className="col-10 mx-auto">
            <nav className="navbar navbar-expand-lg navbar-light ">
              <div className="container-fluid">
                <NavLink
                  className="navbar-brand text-white text-uppercase font-weight-bold title  "
                  to="/"
                >
                  dhruval show
                </NavLink>
                <button
                  className="navbar-toggler"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#navbarSupportedContent"
                  aria-controls="navbarSupportedContent"
                  aria-expanded="false"
                  aria-label="Toggle navigation"
                >
                  <span className="navbar-toggler-icon"></span>
                </button>
                <div
                  className="collapse navbar-collapse"
                  id="navbarSupportedContent"
                >
                  <ul className="navbar-nav ml-auto option mb-2 mb-lg-0">
                    <li className="nav-item ">
                      <NavLink
                        activeClassName="focus"
                        className="nav-link text-white text-uppercase active"
                        aria-current="page"
                        to="/home"
                      >
                        Home
                      </NavLink>
                    </li>

                    <li className="nav-item ">
                      <NavLink
                        activeClassName="focus"
                        className="nav-link text-white text-uppercase"
                        to="/content"
                      >
                        content
                      </NavLink>
                    </li>
                    <li className="nav-item text-white text-uppercase">
                      <NavLink
                        activeClassName="focus"
                        className="nav-link text-white text-uppercase"
                        to="/contact"
                      >
                        contact us
                      </NavLink>
                    </li>
                  </ul>
                </div>
              </div>
            </nav>
          </div>
        </div>
      </div>
    </>
  );
};
export default Navbar;
