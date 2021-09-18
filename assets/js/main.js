$(document).ready(function () {

    let lat;
    let long;

    if (navigator.geolocation) {

        navigator.geolocation.getCurrentPosition(function (position) {

            lat = position.coords.latitude;
            long = position.coords.longitude;

            let api = 'https://api.weatherbit.io/v2.0/current?lat=' + lat + '&lon=' + long + '&lang=hu&key=2b92554e16bc4061805540fec8eaeaca';

            $.getJSON(api, function (res) {

                let celsius = res.data[0].temp;
                let farenheit = (celsius * 1.8) + 32;

                let location = res.data[0].city_name;
                //*console.log(res);*//




                $('.weather-location').html(location);
                $('.temp').html(Math.floor(celsius));
                $('.weather-description').html(res.data[0].weather.description);
                $('.weatherType').attr('id', res.data[0].weather.icon);
                $('.row2').on('click', function () {
                    if ($('.temp').html() == (Math.floor(celsius))) {
                        $('.temp').html(Math.floor(farenheit));
                        $('.temp-type').html('°F');

                    } else {
                        $('.temp').html(Math.floor(celsius));
                        $('.temp-type').html('°C');
                    }
                });
                $('.sunrise').html(res.data[0].sunrise);
                $('.sunset').html(res.data[0].sunset);

                //SETTING UP THE ICON 
                let icons = new Skycons({
                    "color": "white"
                });

                icons.set("c01d", Skycons.CLEAR_DAY);
                icons.set("c01n", Skycons.CLEAR_DAY);
                icons.set("c01d", Skycons.CLEAR_NIGHT);
                icons.set("c01n", Skycons.CLEAR_NIGHT);
                icons.set("c02d", Skycons.PARTLY_CLOUDY_DAY);
                icons.set("c02n", Skycons.PARTLY_CLOUDY_NIGHT);
                icons.set("c03d", Skycons.CLOUDY);
                icons.set("c03n", Skycons.CLOUDY);
                icons.set("c04d", Skycons.CLOUDY);
                icons.set("c04n", Skycons.CLOUDY);
                icons.set("t01d", Skycons.RAIN);
                icons.set("t01n", Skycons.RAIN);
                icons.set("t02d", Skycons.RAIN);
                icons.set("t02n", Skycons.RAIN);
                icons.set("t03d", Skycons.RAIN);
                icons.set("t03n", Skycons.RAIN);
                icons.set("t04d", Skycons.RAIN);
                icons.set("t04n", Skycons.RAIN);
                icons.set("t05d", Skycons.RAIN);
                icons.set("t05n", Skycons.RAIN);
                icons.set("r01d", Skycons.RAIN);
                icons.set("r01n", Skycons.RAIN);
                icons.set("r02d", Skycons.RAIN);
                icons.set("r03n", Skycons.RAIN);
                icons.set("f01d", Skycons.RAIN);
                icons.set("f01n", Skycons.RAIN);
                icons.set("r04d", Skycons.RAIN);
                icons.set("r04n", Skycons.RAIN);
                icons.set("r05d", Skycons.RAIN);
                icons.set("r05n", Skycons.RAIN);
                icons.set("r06d", Skycons.RAIN);
                icons.set("r06n", Skycons.RAIN);
                icons.set("s04d", Skycons.WIND);
                icons.set("s04n", Skycons.WIND);
                icons.set("s05d", Skycons.WIND);
                icons.set("s05n", Skycons.WIND);
                icons.set("s01d", Skycons.SNOW);
                icons.set("s01n", Skycons.SNOW);
                icons.set("s02d", Skycons.SNOW);
                icons.set("s02n", Skycons.SNOW);
                icons.set("s003d", Skycons.SNOW);
                icons.set("s003n", Skycons.SNOW);
                icons.set("s06d", Skycons.SNOW);
                icons.set("s06n", Skycons.SNOW);
                icons.set("a01d", Skycons.FOG);
                icons.set("a01n", Skycons.FOG);
                icons.set("a02d", Skycons.FOG);
                icons.set("a02n", Skycons.FOG);
                icons.set("a03d", Skycons.FOG);
                icons.set("a03n", Skycons.FOG);
                icons.set("a04d", Skycons.FOG);
                icons.set("a04n", Skycons.FOG);
                icons.set("a05d", Skycons.FOG);
                icons.set("a05n", Skycons.FOG);
                icons.set("a06d", Skycons.FOG);
                icons.set("a06n", Skycons.FOG);
                icons.play();

            });
        });
    }
});