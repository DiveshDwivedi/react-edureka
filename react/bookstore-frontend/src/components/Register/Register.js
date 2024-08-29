import { useState, useEffect, useRef } from "react";
import { registerUser } from "../../services/api.js";
import now from "../../services/helpers/DateTime.js";
import {
  USER_NAME_REGEX,
  PASSWORD_REGEX,
  EMAIL_REGEX,
} from "../../services/helpers/Regex.js";
import toast, { Toaster } from "react-hot-toast";
import { Link } from "react-router-dom";
import {
  faCheck,
  faTimes,
  faInfoCircle,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Footer from "../layouts/Footer.js";

// Custom hook for input validation
const useValidation = (value, regex) => {
  const [isValid, setIsValid] = useState(false);

  useEffect(() => {
    setIsValid(regex.test(value));
  }, [value, regex]);

  return isValid;
};

const Register = () => {
  const userRef = useRef();
  const errorRef = useRef();

  const [formData, setFormData] = useState({
    user: "",
    email: "",
    psw: "",
    matchPsw: "",
  });

  const [focus, setFocus] = useState({
    userFocus: false,
    emailFocus: false,
    pswFocus: false,
    matchFocus: false,
  });

  const [errMsg, setErrMsg] = useState("");

  const validName = useValidation(formData.user, USER_NAME_REGEX);
  const validEmail = useValidation(formData.email, EMAIL_REGEX);
  const validPsw = useValidation(formData.psw, PASSWORD_REGEX);
  const validMatch = formData.psw === formData.matchPsw;

  useEffect(() => {
    userRef.current.focus();
  }, []);

  useEffect(() => {
    setErrMsg("");
  }, [formData]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleFocus = (field, value) => {
    setFocus((prev) => ({ ...prev, [field]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validName || !validPsw || !validEmail) {
      setErrMsg("Invalid user inputs");
      return;
    }

    try {
      const data = {
        username: formData.user,
        email: formData.email,
        password: formData.psw,
        role: "user",
        createdAt: now('ISO'),
      };

      const res = await registerUser(data);
      console.log(res);
      toast.success("User registered Successfully");
      setFormData({ user: "", email: "", psw: "", matchPsw: "" });
    } catch (error) {
      if (error?.response) {
        setErrMsg("No server response");
      } else if (error.response?.status === 409) {
        setErrMsg("Username already exists");
      } else {
        setErrMsg("Registration failed");
      }
      errorRef.current.focus();
    }
  };

  return (
    <>
      <div>
        <section className="reg">
          <p
            ref={errorRef}
            className={errMsg ? "errMsg" : "offscreen"}
            aria-live="assertive"
          >
            {errMsg}
          </p>
          <h1>Register</h1>
          <form onSubmit={handleSubmit}>
            <Toaster />
            <label htmlFor="user">
              Username:
              <FontAwesomeIcon
                icon={faCheck}
                className={validName ? "valid" : "hide"}
              />
              <FontAwesomeIcon
                icon={faTimes}
                className={validName || !formData.user ? "hide" : "invalid"}
              />
            </label>
            <input
              type="text"
              name="user"
              ref={userRef}
              autoComplete="off"
              onChange={handleChange}
              value={formData.user}
              required
              aria-invalid={!validName}
              aria-describedby="uidnote"
              onFocus={() => handleFocus("userFocus", true)}
              onBlur={() => handleFocus("userFocus", false)}
            />
            <p
              id="uidnote"
              className={
                focus.userFocus && formData.user && !validName
                  ? "instructions"
                  : "offscreen"
              }
            >
              <FontAwesomeIcon icon={faInfoCircle} />4 to 24 characters. Must
              begin with a letter. Letters, numbers, underscores, hyphens
              allowed.
            </p>

            <label htmlFor="email">
              Email:
              <FontAwesomeIcon
                icon={faCheck}
                className={validEmail ? "valid" : "hide"}
              />
              <FontAwesomeIcon
                icon={faTimes}
                className={validEmail || !formData.email ? "hide" : "invalid"}
              />
            </label>
            <input
              type="text"
              name="email"
              autoComplete="off"
              onChange={handleChange}
              value={formData.email}
              required
              aria-invalid={!validEmail}
              aria-describedby="emailnote"
              onFocus={() => handleFocus("emailFocus", true)}
              onBlur={() => handleFocus("emailFocus", false)}
            />
            <p
              id="emailnote"
              className={
                focus.emailFocus && formData.email && !validEmail
                  ? "instructions"
                  : "offscreen"
              }
            >
              <FontAwesomeIcon icon={faInfoCircle} />
              Enter a valid email.
            </p>

            <label htmlFor="psw">
              Password:
              <FontAwesomeIcon
                icon={faCheck}
                className={validPsw ? "valid" : "hide"}
              />
              <FontAwesomeIcon
                icon={faTimes}
                className={validPsw || !formData.psw ? "hide" : "invalid"}
              />
            </label>
            <input
              type="password"
              name="psw"
              onChange={handleChange}
              value={formData.psw}
              required
              aria-invalid={!validPsw}
              aria-describedby="pwdnote"
              onFocus={() => handleFocus("pswFocus", true)}
              onBlur={() => handleFocus("pswFocus", false)}
            />
            <p
              id="pwdnote"
              className={
                focus.pswFocus && !validPsw ? "instructions" : "offscreen"
              }
            >
              <FontAwesomeIcon icon={faInfoCircle} />8 to 24 characters. Must
              include uppercase and lowercase letters, a number, and a special
              character. Allowed special characters: ! @ # $ %
            </p>

            <label htmlFor="matchPsw">
              Confirm Password:
              <FontAwesomeIcon
                icon={faCheck}
                className={validMatch && formData.matchPsw ? "valid" : "hide"}
              />
              <FontAwesomeIcon
                icon={faTimes}
                className={
                  validMatch || !formData.matchPsw ? "hide" : "invalid"
                }
              />
            </label>
            <input
              type="password"
              name="matchPsw"
              onChange={handleChange}
              value={formData.matchPsw}
              required
              aria-invalid={!validMatch}
              aria-describedby="confirmnote"
              onFocus={() => handleFocus("matchFocus", true)}
              onBlur={() => handleFocus("matchFocus", false)}
            />
            <p
              id="confirmnote"
              className={
                focus.matchFocus && !validMatch ? "instructions" : "offscreen"
              }
            >
              <FontAwesomeIcon icon={faInfoCircle} />
              Must match the first password input field.
            </p>

            <button
              disabled={!validName || !validPsw || !validMatch || !validEmail}
            >
              Sign Up
            </button>
          </form>
          <p>
            Already registered?
            <br />
            <span className="line">
              <Link to={`/login`}>Sign In</Link>
            </span>
          </p>
        </section>
      </div>
      <Footer />
    </>
  );
};

export default Register;
