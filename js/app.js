window.addEventListener('load', () => {
    let long;
    let lat;
    let temperatureDescription = document.querySelector('.temperature-descreption');
    let temperatureDegree = document.querySelector('.temperature-degree');
    let locationTimezone = document.querySelector('.location-timezone');
    let temperatureSection = document.querySelector('.temperature');
    const temperatureSpan = document.querySelector('.temperature span');


    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(position => {
            long = position.coords.longitude;
            lat = position.coords.latitude;

            const api = `https://fcc-weather-api.glitch.me/api/current?lat=${lat}&lon=${long}`;

            fetch(api)
                .then(response => {
                    return response.json();
                })
                .then(data => {
                    console.log(data);
                    const { temp } = data.main;
                    const { description } = data.weather[0];
                    /*const { icon } = data.current.weather[0];*/
                    //SET ELEMENTS FROM API
                    temperatureDegree.textContent = temp;
                    temperatureDescription.textContent = description;
                    locationTimezone.textContent = data.name;

                    //FORMULA FOR CELSIUS
                    let degree = temp * (9 / 5) + 32;

                    //CHANGE TEMPERATURE C TO F
                    temperatureSection.addEventListener('click', () => {
                        if (temperatureSpan.textContent === "°C") {
                            temperatureSpan.textContent = "°F";
                            temperatureDegree.textContent = Math.floor(degree);
                        }
                        else {
                            temperatureSpan.textContent = "°C";
                            temperatureDegree.textContent = temp;
                        }
                    })

                });

        });
    }
});