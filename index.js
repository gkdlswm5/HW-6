var key = "b7a4c8c110f06bafe1aa3f40c9773396";
var search = document.getElementById("search");
var cityName = search.value;
var stateName = "NV";
var img = new Image();
//K to F
function tempChange(kelvin) {
  var fahr = ((kelvin - 273.15) * 9) / 5 + 32;
  fahr = fahr.toFixed(2);
  return fahr;
}

// console.log(tempChange(1));
//how to splice?

//jquery weather for the day
$("#searchBut").on("click", function (event) {
  event.preventDefault();
  var searchVal = $("#search").val();

  //constructing URL
  let queryURL =
    "http://api.openweathermap.org/data/2.5/weather?q=" +
    searchVal +
    "&appid=" +
    key;

  // console.log(queryURL);
  $.ajax({
    url: queryURL,
    method: "GET",
  }).then(function (response) {
    //icon api
    let icon = response.weather[0].icon;
    let iconURL = "http://openweathermap.org/img/wn/" + icon + "@2x.png";
    // var img = new Image();
    img.src = iconURL;
    // console.log(iconURL);

    $("#weatherIcon").html(img);
    $("#Temperature").text(
      "Weather: " + tempChange(response.main.temp) + " °F"
    );
    $("#Humidty").text("Humidity: " + response.main.humidity + "%");
    // console.log(response.main.humidity);
    $("#WindSpeed").text("Wind Speed: " + response.wind.speed + " MPH");
    $("#Sky").text("Sky: " + response.weather[0].main);
    // $("#searchedCity").html(iconURL);

    // console.log(iconURL);
    // $("#searchedCity").append("</br>");
    // $("#searchedCity").text("Temp: " + response.main.temp);
  });
});

// 5-day forecast
$("#searchBut").on("click", function (event) {
  event.preventDefault();
  var searchVal = $("#search").val();

  //constructing URL
  let queryURL =
    "http://api.openweathermap.org/data/2.5/forecast?q=" +
    searchVal +
    "&appid=" +
    key;

  // console.log(queryURL);
  // console.log(queryURL);

  $.ajax({
    url: queryURL,
    method: "GET",
  }).then(function (response) {
    // console.log(response);
    // console.log(searchVal);
    // console.log(queryURL);

    //5day Icon constructor
    // var icon = response.weather[0].icon;
    // var iconURL = "http://openweathermap.org/img/wn/" + icon + "@2x.png";

    //date1
    $("#day1").text(
      //   let icon = response.list[4].weather[1].icon;
      //   let iconURL = "http://openweathermap.org/img/wn/" + icon + "@2x.png";
      //   img.src = iconURL;

      // img +
      "\n" +
        response.list[4].dt_txt.substring(0, 10) +
        "\n" +
        "Temp: " +
        tempChange(response.list[4].main.temp) +
        "\n" +
        "Humidity: " +
        response.list[4].main.humidity +
        "%"
    );
    //icon
    // $("#fiveDayForecast").text(response.list[5].dt_txt);
    //Temp

    //date2
    $("#day2").text(
      // let icon = response.weather[4].icon;
      //   let iconURL = "http://openweathermap.org/img/wn/" + icon + "@2x.png";
      //   img.src = iconURL;

      //   icon +
      response.list[12].dt_txt.substring(0, 10) +
        "\n" +
        "Temp: " +
        tempChange(response.list[12].main.temp) +
        "\n" +
        "Humidity: " +
        response.list[12].main.humidity +
        "%"
    );

    //date3
    $("#day3").text(
      response.list[20].dt_txt.substring(0, 10) +
        "\n" +
        "Temp: " +
        tempChange(response.list[20].main.temp) +
        "\n" +
        "Humidity: " +
        response.list[20].main.humidity +
        "%"
    );

    //date4
    $("#day4").text(
      response.list[28].dt_txt.substring(0, 10) +
        "\n" +
        "Temp: " +
        tempChange(response.list[28].main.temp) +
        "\n" +
        "Humidity: " +
        response.list[28].main.humidity +
        "%"
    );

    //date5
    $("#day5").text(
      response.list[36].dt_txt.substring(0, 10) +
        "\n" +
        "Temp: " +
        tempChange(response.list[36].main.temp) +
        "\n" +
        "Humidity: " +
        response.list[36].main.humidity +
        "%"
    );
  });
});

// http://api.openweathermap.org/data/2.5/forecast?q=Renoappid=b7a4c8c110f06bafe1aa3f40c9773396

// console.log("qweqwe" + 1);
