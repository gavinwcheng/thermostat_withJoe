thermostat = new Thermostat();

var userInteract = function(interaction) {
  interaction;
  updateHtmlTemperature();
};

var updateHtmlTemperature = function() {
  document.getElementById("temperature").innerHTML = thermostat.temperature;
  document.getElementById("temperature").style.color = thermostat.colour();
};

document.addEventListener('DOMContentLoaded', function() {
  document.getElementById("Up").addEventListener("click", function() {
    userInteract(thermostat.increaseTemperature());
  });

  document.getElementById("Down").addEventListener("click", function() {
    userInteract(thermostat.decreaseTemperature());
  });

  document.getElementById("Reset").addEventListener("click", function() {
    userInteract(thermostat.resetTemperature());
  });

  document.getElementById("PowerSaver").addEventListener("click", function() {
    userInteract(thermostat.switchPowerSaving());
  });
});
