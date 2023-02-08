import jwt_decode from "jwt-decode";

function getToken() {
    const tokenString = localStorage.getItem("token");
    const userToken = JSON.parse(tokenString)
    return userToken?.token;
}

async function decodedToken(token) {
    const tokenDecoded =  await jwt_decode(token);
    return tokenDecoded
}

function convertDate(rawDate) {
    let date = new Date(rawDate);
    let day = date.getDate();
    let month = date.getMonth() + 1;
    let year = date.getFullYear();
    let dateWithFormat = day + "-" + month + "-" + year;
    return dateWithFormat
}

export { convertDate, getToken, decodedToken}