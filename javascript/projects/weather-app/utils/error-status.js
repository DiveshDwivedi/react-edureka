export default function error_status(error_status) {
    document.querySelector(".error").style.display = "block";
    document.querySelector(".weather").style.display = "none";
    switch (error_status) {
        case 404:
            document.querySelector(".error").innerHTML =
            "City not found. Please check the city name.";
            break;
        case 401:
            document.querySelector(".error").style.display =
            "Invalid API key. Please check your API key.";
            break;
        default:
            document.querySelector(".error").style.display =
            "An error occurred";
            break;
    }
}

