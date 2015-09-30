thermostat = new Thermostat();

var updateHTML = function() {
  document.getElementById("Temp").innerHTML = thermostat.temperature;
  document.getElementById("Temp").style.color = thermostat.colour();
};

var updateThermostat = function(callMethodOnThermostat) {
  callMethodOnThermostat;
  updateHTML();
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
