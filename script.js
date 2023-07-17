// const { pickPlanet, addDestinationInfo } = require("./scriptHelper");

// const { formSubmission } = require("./scriptHelper");

window.addEventListener("load", function() {
    let form = document.querySelector("form");
    form.addEventListener("submit", function(event) {
       let pilot = document.querySelector("input[name=pilotName]");
       let  copilot = document.querySelector("input[name=copilotName]");
       let fuel = document.querySelector("input[name=fuelLevel]");
       let cargo = document.querySelector("input[name=cargoMass]");
       event.preventDefault();

       formSubmission(document, list, pilot.value, copilot.value, fuel.value, cargo.value)
    });

   let listedPlanets;
   // Set listedPlanetsResponse equal to the value returned by calling myFetch()
   let listedPlanetsResponse = myFetch()
   listedPlanetsResponse.then(function (result) {
       listedPlanets = result;
       console.log(listedPlanets);
   }).then(function () {
       console.log(listedPlanets);
       let selectedPlanet = pickPlanet(listedPlanets)
       addDestinationInfo(document, selectedPlanet.name, selectedPlanet.diameter, selectedPlanet.star, selectedPlanet.distance, selectedPlanet.moons, selectedPlanet.image)
       // Below this comment call the appropriate helper functions to pick a planet fom the list of planets and add that information to your destination.
       
   })
       
   let list = document.getElementById("faultyItems");
   list.style.visibility = "hidden";
});