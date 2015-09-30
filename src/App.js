thermostat = new Thermostat();

var userInterate = function(interaction) {
  interaction;
  updateHtmlTemperature();
};

var updateHtmlTemperature = function() {
  document.getElementById("temperature").innerHTML = thermostat.temperature;
};

document.addEventListener('DOMContentLoaded', function() {
  document.getElementById("Up").addEventListener("click", function() {
    userInterate(thermostat.increaseTemperature());
  });

  document.getElementById("Down").addEventListener("click", function() {
    userInterate(thermostat.decreaseTemperature());
  });

  document.getElementById("Reset").addEventListener("click", function() {
    userInterate(thermostat.resetTemperature());
  });

  document.getElementById("PowerSaver").addEventListener("click", function() {
    userInterate(thermostat.switchPowerSaving());
  });
});
