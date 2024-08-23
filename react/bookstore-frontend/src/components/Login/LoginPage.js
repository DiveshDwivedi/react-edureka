import React, { useEffect, useRef, useState } from "react";
import { username } from "../../services/api";
import toast, { Toaster } from "react-hot-toast";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const userRef = useRef();

  const [user, setUser] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();
  useEffect(() => {
    userRef.current.focus();

    sessionStorage.clear();
  }, []);

  useEffect(() => {}, [user, password]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (validate()) {
      const response = await username(user);
      if (Object.keys(response).length === 0 || response.length === 0) {
        toast.error("Please Enter Valid username");
      } else {
        console.log(response[0]?.password);
        if (response[0]?.password === password) {
          toast.success("Login Successfully");
          sessionStorage.setItem("username", username);
          setTimeout(() => {
            navigate("/");
          }, 1000);
        } else {
          toast.error("Please Enter Valid password");
        }
      }
      console.log(response);
    }
    setUser("");
    setPassword("");
  };

  const validate = () => {
    let result = true;

    if (user === "" || user === null) {
      result = false;
      toast.warninig("Please enter username");
    }
    return result;
  };

  return (
    <div className="card my_login_card">
      <Toaster />
      <div className="card-body">
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label className="form-label">Username</label>
            <input
              type="text"
              className="form-control"
              id="username"
              ref={userRef}
              aria-describedby="emailHelp"
              autoComplete="off"
              onChange={(e) => setUser(e.target.value)}
              value={user}
              required
            />
          </div>
          <div className="mb-3">
            <label className="form-label">Password</label>
            <input
              type="password"
              className="form-control"
              id="exampleInputPassword1"
              onChange={(e) => setPassword(e.target.value)}
              value={password}
              required
            />
          </div>
          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};
export default Login;
