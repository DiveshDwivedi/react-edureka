import { useState, useEffect, useRef } from "react";
import { faCheck, faTimes, faInfoCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const user_regex = '/^[a-zA-Z][a-zA-Z0-9-_]{3,23}$/';
const psw_regex = '/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#%$]).{8,24}$/';

const Register = () => {
    const userRef = useRef();
    const errorRef = useRef();

    const [user, setUser] = useState('');
    const [validName, setValidName] = useState(false);
    const [userFocus, setUserFocus] = useState(false);

    const [psw, setPsw] = useState('');
    const [validPsw, setValidPsw] = useState(false);
    const [pswFocus, setPswFocus] = useState(false);

    const [matchPsw, setMatchPsw] = useState('');
    const [validMatch, setValidMatch] = useState(false);
    const [matchFocus, setMatchFocus] = useState(false);

    const [errMsg, setErrMsg] = useState('');
    const [success, setSuccess] = useState(false);

    return (
        <>
        </>
    )
}


export default Register;