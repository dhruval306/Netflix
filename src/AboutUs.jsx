import React, { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import FlipCameraAndroidIcon from "@material-ui/icons/FlipCameraAndroid";

const AboutUs = () => {
  const [check, setCheck] = useState({
    fullname: "",
    email: "",
    phonenumber: "",
    feedback: "",
  });
  const submitEvent = (event) => {
    console.log(check.feedback);
    if (check.fullname && check.email && check.phonenumber && check.feedback) {
      toast.error("entered field is not valid", {
        position: "bottom-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    } else {
      toast.success("Thanks for your visit", {
        position: "bottom-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
      setCheck({
        fullname: "",
        email: "",
        phonenumber: "",
        feedback: "",
      });
    }
  };
  const checkEvent = (event) => {
    const { name, value } = event.target;
    setCheck(() => {
      return {
        [name]: value,
      };
    });
    console.log({ name, value });
  };
  return (
    <>
      <div className="container-fluid">
        <div className="container">
          <div className="row">
            <h1 className="text-center pt-4 text-uppercase">form</h1>
            <hr className="w-25 mx-auto " />
            <div className="container">
              <div className="row">
                <div className="col-6 mx-auto">
                  <form>
                    <div className="input-group input-group-sm mb-3">
                      <label className="input-group-text text-capitalize">
                        full name
                      </label>
                      <input
                        onChange={checkEvent}
                        value={check.fullname}
                        name="fullname"
                        type="text"
                        className="form-control"
                        aria-label="Sizing example input"
                        aria-describedby="inputGroup-sizing-sm"
                      />
                    </div>
                    <div className="input-group input-group-sm mb-3">
                      <label className="input-group-text text-capitalize">
                        email
                      </label>
                      <input
                        onChange={checkEvent}
                        value={check.email}
                        name="email"
                        type="email"
                        className="form-control"
                        aria-label="Sizing example input"
                        aria-describedby="inputGroup-sizing-sm"
                      />
                    </div>

                    <div className="input-group input-group-sm mb-3">
                      <label className="input-group-text text-capitalize">
                        phone number
                      </label>
                      <input
                        onChange={checkEvent}
                        value={check.phonenumber}
                        name="phonenumber"
                        type="number"
                        className="form-control"
                        aria-label="Sizing example input"
                        aria-describedby="inputGroup-sizing-sm"
                      />
                    </div>
                    <div className="input-group input-group-sm mb-3">
                      <label className="input-group-text text-capitalize">
                        feeback
                      </label>
                      <textarea
                        name="feedback"
                        onChange={checkEvent}
                        value={check.feedback}
                        className="form-control"
                        aria-label="Sizing example input"
                        aria-describedby="inputGroup-sizing-sm"
                      />
                    </div>
                    <div className="modal-footer">
                      <button
                        type="button"
                        onClick={submitEvent}
                        className="btn text-capitalize btn-outline-primary"
                      >
                        submit
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <ToastContainer />
    </>
  );
};
export default AboutUs;

// https://api.themoviedb.org/3/movie/{movie_id}?api_key=dhruval&language=en-US
