import React, { useState } from "react";
import userStore from "../store/user";
import { useNavigate } from "react-router-dom";

const Login = () => {
 const [credentials, setCredentials] = useState({});
 const {loginRequest} = userStore();
 const navigate = useNavigate();


const loginInfo = (name, value) =>{
     setCredentials(
      (state)=>({
        ...state,
        [name]: value,
      })
     )   
}

const onSubmit = async(e) => {
   e.preventDefault();
   console.log("send");
   
  const res = await loginRequest(credentials);
  console.log(res);
  
  res ? navigate("/") : alert("Invalid credentials");
}


  return (
    <div>
      <section className="section register min-vh-100 d-flex flex-column align-items-center justify-content-center py-4">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-4 col-md-6 d-flex flex-column align-items-center justify-content-center">
              <div className="d-flex justify-content-center py-4">
                <a
                  href="index.html"
                  className="logo d-flex align-items-center w-auto"
                >
                  <img src="assets/img/logo.png" alt="" />
                  <span className="d-none d-lg-block">NiceAdmin</span>
                </a>
              </div>
              {/* End Logo */}
              <div className="card mb-3">
                <div className="card-body">
                  <div className="pt-4 pb-2">
                    <h5 className="card-title text-center pb-0 fs-4">
                      Login to Your Account
                    </h5>
                    <p className="text-center small">
                      Enter your email &amp; password to login
                    </p>
                  </div>
                  <form className="row g-3 needs-validation" noValidate="">
                    <div className="col-12">
                      <label htmlFor="yourUserEmail" className="form-label">
                        Email
                      </label>
                      <div className="input-group has-validation">
                      
                        <input
                          onChange={(e)=> loginInfo(e.target.name, e.target.value)}
                          type="email"
                          name="email"
                          className="form-control"
                          id="yourUserEmail"
                          required=""
                        />
                        <div className="invalid-feedback">
                          Please enter your email.
                        </div>
                      </div>
                    </div>
                    <div className="col-12">
                      <label htmlFor="yourPassword" className="form-label">
                        Password
                      </label>
                      <input
                        onChange={(e)=> loginInfo(e.target.name, e.target.value)}
                        type="password"
                        name="password"
                        className="form-control"
                        id="yourPassword"
                        required=""
                      />
                      <div className="invalid-feedback">
                        Please enter your password!
                      </div>
                    </div>
                    <div className="col-12">
                      <div className="form-check">
                        <input
                          className="form-check-input"
                          type="checkbox"
                          name="remember"
                          defaultValue="true"
                          id="rememberMe"
                        />
                        <label
                          className="form-check-label"
                          htmlFor="rememberMe"
                        >
                          Remember me
                        </label>
                      </div>
                    </div>
                    <div className="col-12">
                      <button className="btn btn-primary w-100" onClick={onSubmit}>
                        Login
                      </button>
                    </div>
                    <div className="col-12">
                      <p className="small mb-0">
                        Don't have account?{" "}
                        <a href="pages-register.html">Create an account</a>
                      </p>
                    </div>
                  </form>
                </div>
              </div>
              <div className="credits">
                Designed by <a href="#">admit_bootstrap</a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Login;
