function weatherDataFetch(city) {
    var key="c827e4dd7e017064b364d6b506bf2217"
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${key}`)
        .then(function(resp){
            return resp.json()
        })
        .then(function(data){
            console.log(data);
        })
        .catch(function(){

        });
}
function cityWeather(e){
    weatherDataFetch('Tallinn')
}
