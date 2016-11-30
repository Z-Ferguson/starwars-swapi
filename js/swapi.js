
function showPerson(frm1){
    var $stuff = $("<li>")
    console.log(this)
    j = document.getElementById("frm1").value
    var pr = $.ajax("https://swapi.co/api/people/?search=" + j).done(function(results) {
        console.log(results)
        console.log(results.results[0])
        rr = results.results[0]
        var name = results.results[0].name
        var height = rr.height
        var hair_color = rr.hair_color
        var skin_color = rr.skin_color
        var eye_color = rr.eye_color
        var birth_year = rr.birth_year
        var homeworld = rr.homeworld
        console.log(results)
        var text = ("name: " + name + "<br>" + "height: " + height + "<br>" + "eye color: " + eye_color + "<br>" +
                    "hair color: " + hair_color + "<br>" + "homeworld: " + homeworld)
        $("#person").html(text)
        })
}

function oneVehicle(frm2){
    var $stuff = $("<li>")
    console.log(this)
    j = document.getElementById("frm2").value
    var pr = $.ajax("https://swapi.co/api/vehicles/?search=" + j).done(function(results) {
        console.log(results)
        console.log(results.results[0])
        rr = results.results[0]
        var name = results.results[0].name
        var model = rr.model
        var manufacturer = rr.manufacturer
        var cost_in_credits = rr.cost_in_credits
        var length = rr.length
        var max_atmosphering_speed = rr.max_atmosphering_speed
        var crew = rr.crew
        var passengers = rr.passengers
        var cargo_capacity = rr.cargo_capacity
        var consumables = rr.consumables
        var vehicle_class = rr.vehicle_class
        var pilots = rr.pilots
        console.log(results)
        var text = ("name: " + name + "<br>" + "model: " + model + "<br>" + "manufacturer: "
                    + manufacturer + "<br>" + "Credit cost: " + cost_in_credits + "<br>"
                    + "length: " + length + "<br>" + "max atmosphere speed: " + max_atmosphering_speed
                    + "<br>" + "crew: " + crew + "<br>" + "passengers: " + passengers + "<br>"
                    + "cargo capacity: " + cargo_capacity + "<br>" + "consumables: " + consumables + "<br>"
                    + "vehicle class: " + vehicle_class + "<br>" + "pilots: " + pilots + "<br>")
        $("#vehicle").html(text)
        })
}


function showPeople(){
    var $stuff = $("<li>")
    var peopleList = []
    for(var j = 1; j < 10; j++){
    var pr = $.ajax("http://swapi.co/api/people?page=" + j).done(function(results) {
        var peopleStuff = results.results
        for(var i = 0; i < peopleStuff.length; i++){
            console.log(peopleStuff[i]["name"])
            $stuff.html($stuff.html()+ peopleStuff[i]["name"] + "<br>")
            // peopleList.push(peopleStuff[i])
            $("#xpeople").append($stuff)}
        })
    }
}


function showPlanets(){
    var $stuff = $("<li>")
    var planetList = []
    for(var j = 1; j < 8; j++){
    var pl = $.ajax("http://swapi.co/api/planets?page=" + j).done(function(results) {
        var planetStuff = results.results
        for(var i = 0; i < planetStuff.length; i++){
            console.log(planetStuff[i]["name"])
            $stuff.html($stuff.html()+ planetStuff[i]["name"] + "<br>")
            $("#xplanet").append($stuff)}
        })
    }
}

function showVehicles(){
    var $stuff = $("<li>")
    var vehicleList = []
    for(var j = 1; j < 5; j++){
    var vl = $.ajax("http://swapi.co/api/vehicles?page=" + j).done(function(results) {
        var vehicleStuff = results.results
        for(var i = 0; i < vehicleStuff.length; i++){
            console.log(vehicleStuff[i]["name"])
            $stuff.html($stuff.html()+ vehicleStuff[i]["name"] + "<br>")
            // peopleList.push(peopleStuff[i])
            $("#xvehicle").append($stuff)}
        })
    }
}

function showStarships(){
    var $stuff = $("<li>")
    var starshipList = []
    for(var j = 1; j < 5; j++){
    var vl = $.ajax("http://swapi.co/api/starships?page=" + j).done(function(results) {
        var starshipStuff = results.results
        for(var i = 0; i < starshipStuff.length; i++){
            console.log(starshipStuff[i]["name"])
            $stuff.html($stuff.html()+ starshipStuff[i]["name"] + "<br>")
            // peopleList.push(peopleStuff[i])
            $("#xstarship").append($stuff)}
        })
    }
}

function showSpecies(){
    var $stuff = $("<li>")
    var speciesList = []
    for(var j = 1; j < 5; j++){
    var sl = $.ajax("http://swapi.co/api/species?page=" + j).done(function(results) {
        var speciesStuff = results.results
        for(var i = 0; i < speciesStuff.length; i++){
            console.log(speciesStuff[i]["name"])
            $stuff.html($stuff.html()+ speciesStuff[i]["name"] + "<br>")
            // peopleList.push(peopleStuff[i])
            $("#xspecies").append($stuff)}
        })
    }
}

function showFilms(){
    var $stuff = $("<li>")
    var filmList = []
    for(var j = 1; j <= 1; j++){
    var sl = $.ajax("http://swapi.co/api/films?page=" + j).done(function(results) {
        var filmStuff = results.results
        for(var i = 0; i < filmStuff.length; i++){
            console.log(filmStuff[i]["title"])
            $stuff.html($stuff.html()+ filmStuff[i]["title"] + "<br>")
            $("#xfilms").append($stuff)}
        })
    }
}



$("#personbutton").click(showPerson)
$("#peopleButton").click(showPeople)
$("#planetButton").click(showPlanets)
$("#vehicleButton").click(showVehicles)
$("#starshipButton").click(showStarships)
$("#speciesButton").click(showSpecies)
$("#filmButton").click(showFilms)
$("#oneVehicleButton").click(oneVehicle)
