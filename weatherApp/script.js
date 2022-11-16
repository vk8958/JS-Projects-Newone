
// we are using window. bcos whenever the page load this function will run.

window.addEventListener('load', () => {
    let long;
    let lat;

    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(position => {
            long = position.coords.longitude;
            lat = position.coords.latitude;

            let api = url('https://dark-sky.p.rapidapi.com/%7Blatitude%7D,%7Blongitude%7D')
            console.log(api)

        })
    } else {
        h
    }


});