
export const getGeoLocation = async() => {
    if("geolocation" in navigator) {

        navigator.geolocation.getCurrentPosition(
            function(position) {
                return position
            }
        );

    } else{
        const res = await axios.get('https://ipapi.co/json/')
    }
}