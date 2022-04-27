import React, { useState } from "react";
import FlipCameraAndroidIcon from "@material-ui/icons/FlipCameraAndroid";

import Movie from "./MovieList";
const Content = () => {
  const [List, setList] = useState("all");
  const [search, setSearch] = useState("");
  const mainEvent = () => {
    setList("all");
    setSearch("");
  };
  const MovieEvent = () => {
    setList("movie");
    setSearch("");
  };
  const SeriesEvent = () => {
    setList("series");
    setSearch("");
  };
  const searchEvent = (event) => {
    setSearch(event.target.value);
  };

  return (
    <>
      <div className="container-fluid ">
        <div className="container pt-5 d-flex  align-items-center ">
          <div className="row">
            <div className="col-12 d-flex">
              <div className="col-6">
                <h1 className="text-left text-capitalize mx-auto  pt-3 fw-bolder">
                  top rated{" "}
                  <FlipCameraAndroidIcon
                    onClick={mainEvent}
                    className="btn-outline-secondary"
                  />
                </h1>
              </div>
              <div className="col-6 d-flex">
                <input
                  onChange={searchEvent}
                  name="search"
                  value={search}
                  class="form-control me-2"
                  type="search"
                  placeholder="Search"
                  aria-label="Search"
                />
              </div>
            </div>

            <hr />
          </div>
        </div>
        <div className="container  d-flex justify-content-center flex-column">
          <div className="row">
            <div className="col-10 mx-auto d-flex">
              <div className="col-6 text-center">
                <a
                  onClick={MovieEvent}
                  className="btn w-100 foc_content text-uppercase fw-4"
                >
                  movies
                </a>
              </div>
              <div className="col-6 text-center">
                <a
                  className="btn foc_content w-100 text-uppercase fw-4"
                  onClick={SeriesEvent}
                >
                  series
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="container pt-5 bg-light img_fix">
          <div className="row">
            <div className="col-10 mx-auto">
              <div className="row">
                <Movie only={List} check="check" search={search} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Content;
