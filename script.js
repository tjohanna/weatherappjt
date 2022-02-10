let weatherData;

const $city = $('#city')
const $temperature = $('#temperature')
const $feelsLike = $('#feelsLike')
const $mood = $('#mood')
const $icon = $('#icon')
const $input = $('input[type="text');

function handleGetData(event){
    event.preventDefault();


$.ajax({
    url:`https://api.openweathermap.org/data/2.5/weather?q=${$input.val()}&appid=9d27618893c2cf79265d6096196abe00`
  }).then(
    function(data){
    // console.log("It works")
    console.log(data);
    weatherData = data;
    fahrenheit = ((weatherData.main.temp - 273.15) *1.8) +32;
    fahrenheitFinal = ((Math.round(fahrenheit)) + " \u00B0 F" )
    fahrenheitFeelsLike = ((weatherData.main.feels_like - 273.15) * 1.8) +32;
    //  console.log(fahrenheit)
    feelsLikefinal = ((Math.round(fahrenheitFeelsLike)) + " \u00B0 F" )

    weatherIcon = (weatherData.weather[0].icon)
    weatherIconLink = ("http://openweathermap.org/img/wn/" + weatherIcon + "@2x.png")
    
     render();
    },
    function(error){
     console.log('somethings WRONG!', error);
    }
  )
}


function render(){
    $city.text(weatherData.name);
    $temperature.text(fahrenheitFinal);
    // $temperature.text(Math.round(fahrenheit));
    // $feelsLike.text(Math.round(fahrenheitFeelsLike));
    $feelsLike.text(feelsLikefinal)
    $mood.text(weatherData.weather[0].main);
    $icon.attr("src", weatherIconLink)

  } 
  

$('form').on('submit', handleGetData);


