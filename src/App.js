thermostat = new Thermostat();

var userInterate = function(interaction) {
  interaction;
  updateHtmlTemperature();
};

var updateHtmlTemperature = function() {
  document.getElementById("temperature").innerHTML = thermostat.temperature;
};



document.addEventListener('DOMContentLoaded', function() {
  document.getElementById("Up").addEventListener("onclick", userInterate(thermostat.increaseTemperature()));
});
