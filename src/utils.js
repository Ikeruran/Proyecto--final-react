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

async function getTeacherId() {
    const token = getToken()
    const decoded = await decodedToken(token)
    const id = decoded.user.id

    const url = "https://localhost:1443/api/user/" + id;
    const options = {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
            Authorization: "Bearer " + token,
        },
    }
    let usersApi = await fetch(url, options);
    const users = await usersApi.json();
    const teacherId= users.teacher.id
    return teacherId
}

export { convertDate, getToken, decodedToken,getTeacherId}