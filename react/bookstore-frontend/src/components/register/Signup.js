const Signup = () => {
  return (
    <div className="container register">
      <div className="row">
        <div className="col-md-3 register-left">
          <h3>Welcome</h3>
          <p>Explore the World with new Books of your own choice!</p>
          <input type="submit" name="" value="Login" />
          <br />
        </div>
        <div className="col-md-9 register-right">
          <div className="tab-content" id="myTabContent">
            <div
              className="tab-pane fade show active"
              id="home"
              role="tabpanel"
              aria-labelledby="home-tab"
            >
              <h3 className="register-heading">Register New Account</h3>
              <div className="row register-form">
                <div className="col-md-6">
                  <div className="form-group">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="First Name *"
                    />
                  </div>
                  <div className="form-group mt-3">
                    <input
                      type="text"
                      required
                      className="form-control"
                      placeholder="Last Name *"
                    />
                  </div>

                  <div className="form-group mt-3">
                    <input
                      type="password"
                      required
                      className="form-control"
                      placeholder="Password *"
                    />
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="form-group">
                    <input
                      type="password"
                      required
                      className="form-control"
                      placeholder="Confirm Password *"
                    />
                  </div>
                  <div className="form-group mt-3">
                    <input
                      type="email"
                      required
                      className="form-control"
                      placeholder="Your Email *"
                    />
                  </div>
                  <div className="form-group mt-3">
                    <input
                      type="text"
                      minLength="10"
                      maxLength="10"
                      name="txtEmpPhone"
                      className="form-control"
                      placeholder="Your Phone *"
                    />
                  </div>

                  <input
                    type="submit"
                    className="btnRegister"
                    value="Register"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Signup;
