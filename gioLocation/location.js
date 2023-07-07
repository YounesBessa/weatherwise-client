
export const getGeoLocation = async() => {
    if("geolocation" in navigator) {

        // console.info("Geolocation available");
        navigator.geolocation.getCurrentPosition(
            function(position) {
                // console.log("Latitude is :", position.coords.longitude);
                // console.log("longitude is:",position.coords.latitude);
                return position
            }
        );

    } else{
        const res = await axios.get('https://ipapi.co/json/')
        console.log(' ip api ', res)
    }
}