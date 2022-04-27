import React from "react";
import Dark from "../src/Image/dark.jpeg";

const Card = (prop) => {
  return (
    <>
      <div className="col-md-6 col-12 col-lg-6 ">
        <div class="card mb-3 con">
          <div class="row fix">
            <div class="col-md-4">
              <img
                src={prop.logo}
                alt="/photo"
                className="img-fluid col-md-12 col-12 img-thumbnail"
                width="600"
                height="600"
              />
            </div>
            <div class="col-md-8">
              <div class="card-body  d-flex my-2 flex-column justify-content-center">
                <h4 class="card-title fw-bold  text-uppercase">{prop.name}</h4>
                <hr className="pt-0" />
                <p className="card-text text-uppercase">{prop.from}</p>
                <p class="card-text">{prop.brief}</p>

                <p class="card-text">Rating : {prop.rating}</p>
                <a
                  href={prop.link}
                  className="btn btn-outline-success px-4 text-uppercase"
                >
                  watch now
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Card;
