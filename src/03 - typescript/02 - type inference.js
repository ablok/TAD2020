function getYearsSince(year = 1970) {
    return new Date().getFullYear() - year;
}

let yearsPassed = getYearsSince();
yearsPassed = "forty";
yearsPassed;
