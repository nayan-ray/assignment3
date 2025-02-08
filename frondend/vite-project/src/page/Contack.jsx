import React from "react";
import Footer from "../components/Layout/Footer";

const Contack = () => {
  return (
    <div>
      <div className="contact-body">
      <h1 className=" text-center py-4 my-2">Contact Me</h1>
        <form className="row g-3">
          <div className="col-md-6">
            <label htmlFor="inputEmail4" className="form-label">
              Email
            </label>
            <input type="email" className="form-control" id="inputEmail4" />
          </div>
          <div className="col-md-6">
            <label htmlFor="inputPhone" className="form-label">
              Phone Number
            </label>
            <input
              type="phone"
              className="form-control"
              id="inputPhone"
            />
          </div>
          <div className="col-12">
            <label htmlFor="inputAddress" className="form-label">
              Address
            </label>
            <input
              type="text"
              className="form-control"
              id="inputAddress"
              placeholder="1234 Main St"
            />
          </div>
        
          <div className="col-md-6">
            <label htmlFor="inputCity" className="form-label">
              City
            </label>
            <input type="text" className="form-control" id="inputCity" />
          </div>
          <div className="col-md-4">
            <label htmlFor="inputState" className="form-label">
              District
            </label>
            <select id="inputState" className="form-select">
              <option selected="">Choose...</option>
              <option>Dinajpur</option>
              <option>Dhaka</option>
              <option>Dinajpur</option>
              <option>Dhaka</option>
              <option>Dinajpur</option>
              <option>Dhaka</option>
            </select>
          </div>
          <div className="col-md-2">
            <label htmlFor="inputZip" className="form-label">
              Road No
            </label>
            <input type="text" className="form-control" id="inputZip" />
          </div>
          <div className="col-12">
            <div className="form-check">
              <input
                className="form-check-input"
                type="checkbox"
                id="gridCheck"
              />
              <label className="form-check-label" htmlFor="gridCheck">
                Check me out
              </label>
            </div>
          </div>
          <div className="col-12">
            <button type="submit" className="btn btn-primary px-5">
              Contact me
            </button>
          </div>
        </form>
      </div>
      <Footer />
    </div>
  );
};

export default Contack;
