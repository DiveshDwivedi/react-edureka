import { useState, useEffect, useRef } from "react";
import { registerUser } from "../../services/api.js";
import now from "../../services/helpers/DateTime.js";
import {USER_NAME_REGEX, PASSWORD_REGEX} from "../../services/helpers/Regex.js";
import toast, { Toaster } from "react-hot-toast";
import { Link } from "react-router-dom";

import {
  faCheck,
  faTimes,
  faInfoCircle,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Register = () => {
  const userRef = useRef();
  const errorRef = useRef();

  const [user, setUser] = useState("");
  const [validName, setValidName] = useState(false);
  const [userFocus, setUserFocus] = useState(false);

  const [email, setEmail] = useState("");
  // const [validEmail, setValidEmail] = useState(false);
  // const [emailFocus, setEmailFocus] = useState(false);

  const [psw, setPsw] = useState("");
  const [validPsw, setValidPsw] = useState(false);
  const [pswFocus, setPswFocus] = useState(false);

  const [matchPsw, setMatchPsw] = useState("");
  const [validMatch, setValidMatch] = useState(false);
  const [matchFocus, setMatchFocus] = useState(false);

  const [errMsg, setErrMsg] = useState("");
  const [success, setSuccess] = useState(false);

  useEffect(() => {
    userRef.current.focus();
  }, []);

  useEffect(() => {
    setValidName(USER_NAME_REGEX.test(user));
  }, [user]);

  useEffect(() => {
    setValidPsw(PASSWORD_REGEX.test(psw));
    const match = psw === matchPsw;
    setValidMatch(match);
  }, [psw, matchPsw]);

  useEffect(() => {
    setErrMsg("");
  }, [user, psw, matchPsw]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validName || !validPsw) {
      setErrMsg("Invalid user inputs");
      return;
    }

    try {
      const data = {
        username: user,
        email: email,
        password: psw,
        role: "user",
        createdAt: now(),
      };

      const res = await registerUser(data);
      console.log(res);
      console.log(JSON.stringify(res));
    } catch (error) {
      if (error?.res) {
        setErrMsg("No server responce");
      } else if (error.res?.status === 409) {
        setErrMsg("User name already exists");
      } else {
        console.log(now(), " current time with date");
        setErrMsg("Registration failed");
      }
      errorRef.current.focus();
    }
    toast.success("User registered Successfully");
    setUser("");
    setEmail("");
    setPsw("");
    setMatchPsw("");
  };

  return (
    <>
      {success ? (
        <></>
      ) : (
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
              <label htmlFor="username">
                Username:
                <FontAwesomeIcon
                  icon={faCheck}
                  className={validName ? "valid" : "hide"}
                />
                <FontAwesomeIcon
                  icon={faTimes}
                  className={validName || !user ? "hide" : "invalid"}
                />
              </label>
              <input
                type="text"
                id="username"
                ref={userRef}
                autoComplete="off"
                onChange={(e) => setUser(e.target.value)}
                value={user}
                required
                aria-invalid={validName ? "false" : "true"}
                aria-describedby="uidnote"
                onFocus={() => setUserFocus(true)}
                onBlur={() => setUserFocus(false)}
              />
              <p
                id="uidnote"
                className={
                  userFocus && user && !validName ? "instructions" : "offscreen"
                }
              >
                <FontAwesomeIcon icon={faInfoCircle} />
                4 to 24 characters.
                <br />
                Must begin with a letter.
                <br />
                Letters, numbers, underscores, hyphens allowed.
              </p>

              <label htmlFor="email">
                email:
                {/* <FontAwesomeIcon
                icon={faCheck}
                className={validEmail ? "valid" : "hide"}
              />
              <FontAwesomeIcon
                icon={faTimes}
                className={validEmail || !email ? "hide" : "invalid"}
              /> */}
              </label>

              <input
                type="email"
                id="email"
                autoComplete="off"
                onChange={(e) => setEmail(e.target.value)}
                value={email}
                required
                // aria-invalid={validEmail ? "false" : "true"}
                aria-describedby="uidnote"
                // onFocus={() => setEmailFocus(true)}
                // onBlur={() => setEmailFocus(false)}
              />
              {/* <p
              id="uidnote"
              className={
                emailFocus && email && !validEmail
                  ? "instructions"
                  : "offscreen"
              }
            >
              <FontAwesomeIcon icon={faInfoCircle} />
              4 to 24 characters.
              <br />
              Must begin with a letter.
              <br />
              Letters, numbers, underscores, hyphens allowed.
            </p> */}

              <label htmlFor="password">
                Password:
                <FontAwesomeIcon
                  icon={faCheck}
                  className={validPsw ? "valid" : "hide"}
                />
                <FontAwesomeIcon
                  icon={faTimes}
                  className={validPsw || !psw ? "hide" : "invalid"}
                />
              </label>
              <input
                type="password"
                id="password"
                onChange={(e) => setPsw(e.target.value)}
                value={psw}
                required
                aria-invalid={validPsw ? "false" : "true"}
                aria-describedby="pwdnote"
                onFocus={() => setPswFocus(true)}
                onBlur={() => setPswFocus(false)}
              />
              <p
                id="pwdnote"
                className={pswFocus && !validPsw ? "instructions" : "offscreen"}
              >
                <FontAwesomeIcon icon={faInfoCircle} />
                8 to 24 characters.
                <br />
                Must include uppercase and lowercase letters, a number and a
                special character.
                <br />
                Allowed special characters:{" "}
                <span aria-label="exclamation mark">!</span>{" "}
                <span aria-label="at symbol">@</span>{" "}
                <span aria-label="hashtag">#</span>{" "}
                <span aria-label="dollar sign">$</span>{" "}
                <span aria-label="percent">%</span>
              </p>

              <label htmlFor="confirm_pwd">
                Confirm Password:
                <FontAwesomeIcon
                  icon={faCheck}
                  className={validMatch && matchPsw ? "valid" : "hide"}
                />
                <FontAwesomeIcon
                  icon={faTimes}
                  className={validMatch || !matchPsw ? "hide" : "invalid"}
                />
              </label>
              <input
                type="password"
                id="confirm_pwd"
                onChange={(e) => setMatchPsw(e.target.value)}
                value={matchPsw}
                required
                aria-invalid={validMatch ? "false" : "true"}
                aria-describedby="confirmnote"
                onFocus={() => setMatchFocus(true)}
                onBlur={() => setMatchFocus(false)}
              />
              <p
                id="confirmnote"
                className={
                  matchFocus && !validMatch ? "instructions" : "offscreen"
                }
              >
                <FontAwesomeIcon icon={faInfoCircle} />
                Must match the first password input field.
              </p>

              <button
                disabled={!validName || !validPsw || !validMatch ? true : false}
              >
                Sign Up
              </button>
            </form>
            <p>
              Already registered?
              <br />
              <span className="line">
                <Link to={`/login`}>
                  <a>Sign In</a>
                </Link>
              </span>
            </p>
          </section>
        </div>
      )}
    </>
  );
};

export default Register;
