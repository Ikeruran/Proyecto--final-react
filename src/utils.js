function convertDate(rawDate) {
    let date = new Date(rawDate);
    let day = date.getDate();
    let month = date.getMonth() + 1;
    let year = date.getFullYear();
    let dateWithFormat = day + "-" + month + "-" + year;
    return dateWithFormat
}

export {convertDate}