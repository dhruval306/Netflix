import React from "react";
import { NavLink } from "react-router-dom";
import Photo from "../src/Image/home.svg";

const Home = () => {
  return (
    <>
      <section id="header" className="d-flex align-items-center">
        <div className="container-fluid ">
          <div className="row">
            <div className="col-10 mx-auto">
              <div className="row">
                <div className="col-md-6 pt-5 my-auto text-capitalize pt-lg-0 order-2 order-lg-1 d-flex align-items-center flex-column">
                  <h1 className="fw-bolder">
                    Life without entertainment is no fun
                  </h1>
                  <h2 className="my-4">
                    we are providing best movies from all aroung the world
                  </h2>
                  <div className="mt-3">
                    <NavLink
                      to="/content"
                      className="btn btn-outline-dark px-5"
                    >
                      let's go
                    </NavLink>
                  </div>
                </div>
                <div className="col-lg-6 my-5 order-1 order-lg-2">
                  <img className="img-fluid main-img " src={Photo} alt="_/" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
export default Home;
