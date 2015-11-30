var get = function (uri) {
  return new Promise(function (resolve, reject) {
    var xhr = new XMLHttpRequest();
    xhr.open("GET", uri, true);
    xhr.onload = function (e) {
      if (xhr.readyState === 4) {
        if (xhr.status === 200) {
          resolve(xhr.responseText);
        } else {
          reject(xhr.statusText);
        }
      }
    };
    xhr.onerror = function (e) {
      reject(xhr.statusText);
    };
    xhr.send(null);
  });
};

var getWeather = function (city) {
  return get(openWeatherMapURI(city));
};

var getPixplorerImage = function (s) {
  return get(pixplorerURI(s));
};

var getWeatherImage = function (responseText) {
  var weather = unsafePluckOpenWeatherMap(JSON.parse(responseText));
  return getPixplorerImage(weather);
};

var appendWeatherImage = function (responseText) {
  var image = unsafePluckPixplorer(JSON.parse(responseText));
  appendImage(image);
};

getWeather("Manchester")
  .then(getWeatherImage)
  .then(appendWeatherImage)
  .catch(appendUnavailableImage);

