var pixplorerURI = function (s) {
  return "http://api.pixplorer.co.uk/image?word=" + s + " weather icon&amount=1";
};

var unsafePluckPixplorer = function (o) {
  return o.images[0].imageurl;
};

var openWeatherMapURI = function (s) {
  return "http://api.openweathermap.org/data/2.5/weather?q=" + s + ",uk&appid=2de143494c0b295cca9337e1e96b00e0";
}

var unsafePluckOpenWeatherMap = function (o) {
  return o.weather[0].main;
};

var appendImage = function (s) {
  var img = document.createElement("img");
  img.src = s;
  document.body.appendChild(img);
};

var appendUnavailableImage = function (e) {
  appendImage("http://s28.postimg.org/wggx1nowd/image.jpg");
};
