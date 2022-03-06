const request = require("request");
//http://api.weatherstack.com/current?access_key=c33dc032612f00f049b7a1ca43f52d83&query=37.8267,-122.4223
const forecast = (latitude, longitude, callback) => {
  // const url = 'https://api.darksky.net/forecast/9d1465c6f3bb7a6c71944bdd8548d026/' + latitude + ',' + longitude

  const url =
    "http://api.weatherstack.com/current?access_key=c33dc032612f00f049b7a1ca43f52d83&query=" +
    latitude +
    "," +
    longitude;
  request({ url, json: true }, (error, { body }) => {
    if (error) {
      callback("Unable to connect to weather service!", undefined);
    } else if (body.error) {
      callback("Unable to find location", undefined);
    } else {
      callback(
        undefined,
        " It is currently " +
          body.current.temperature +
          " degress out. The weather currently is " +
          body.current.weather_descriptions[0] +
          "."
      );
    }
  });
};

module.exports = forecast;