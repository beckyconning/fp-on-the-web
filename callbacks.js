var get = function (uri, success, error) {
  var xhr = new XMLHttpRequest();
  xhr.open("GET", uri, true);
  xhr.onload = function (e) {
    if (xhr.readyState === 4) {
      if (xhr.status === 200) {
        success(xhr.responseText);
      } else {
        error(xhr.statusText);
      }
    }
  };
  xhr.onerror = function (e) {
    error(xhr.statusText);
  };
  xhr.send(null);
};

var getWeather = function (city, success, error) {
  get(openWeatherMapURI(city), success, error);
};

var getPixplorerImage = function (s, success, error) {
  get(pixplorerURI(s), success, error);
};

var appendPixplorerImage = function (responseText) {
  appendImage(unsafePluckPixplorer(JSON.parse(responseText)));
};

var appendWeatherImage = function (responseText) {
  var weather = unsafePluckOpenWeatherMap(JSON.parse(responseText));
  getPixplorerImage(weather, appendPixplorerImage, appendUnavailableImage);
};

getWeather("Manchester", appendWeatherImage, appendUnavailableImage);

