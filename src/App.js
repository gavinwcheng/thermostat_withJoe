thermostat = new Thermostat();

var updateThermostat = function(callMethodOnThermostat) {
  callMethodOnThermostat;
  updateHTML();
};

var updateHTML = function() {
  document.getElementById("temperature").innerHTML = thermostat.temperature;
  document.getElementById("temperature").style.color = thermostat.colour();
};

document.addEventListener('DOMContentLoaded', function() {
  document.getElementById("Up").addEventListener("click", function() {
    updateThermostat(thermostat.increaseTemperature());
  });

  document.getElementById("Down").addEventListener("click", function() {
    updateThermostat(thermostat.decreaseTemperature());
  });

  document.getElementById("Reset").addEventListener("click", function() {
    updateThermostat(thermostat.resetTemperature());
  });

  document.getElementById("PowerSave").addEventListener("click", function() {
    updateThermostat(thermostat.switchPowerSaving());
  });
});
