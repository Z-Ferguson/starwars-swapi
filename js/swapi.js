
function showPerson(frm1){
    var $stuff = $("<li>")
    j = document.getElementById("frm1").value
    var pr = $.ajax("https://swapi.co/api/people/?search=" + j).done(function(results) {
        var rr = results.results[0]
        for(var i = 0; i < rr.length; i++){
            if(j==rr[i]['frm1']){
        homeworldByUrl(rr['homeworld'])
        var name = results.results[0].name
        var height = rr.height
        var mass = rr.mass
        var hair_color = rr.hair_color
        var skin_color = rr.skin_color
        var eye_color = rr.eye_color
        var birth_year = rr.birth_year
        var homeworld = rr.homeworld
        var films = rr.films
        var species = rr.species
        var vehicles = rr.vehicles
        var starships = rr.starships
        var text = ("name: " + name + "<br>" + "height: " + height + "<br>" + "mass: "
                    + mass + "<br>" + "hair color: " + hair_color + "<br>" + "skin color: " + skin_color
                    + "<br>" + "eye color: " + eye_color + "<br>" + "birth year: " + birth_year
                    + "<br>" +  "Homeworld: <span id='homeworld'></span><br>" +  "<br>" + "films: " + films + "<br>"
                    + "Species: <span id='species'></span><br>" + "<br>" + "vehicles: " + vehicles + "<br>"
                    + "starships: " + starships)
        $("#singleInfo").html(text)
    }
}
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
        $("#singleInfo").html(text)
        })
}


function oneFilm(frm3){
    var $stuff = $("<li>")
    j = document.getElementById("frm3").value
    var pr = $.ajax("https://swapi.co/api/films/?search=" + j).done(function(results){
        rr = results.results[0]
        var title = rr.title
        var episode_id = rr.episode_id
        var director = rr.director
        var producer = rr.producer
        var release_date = rr.release_date
        var characters = rr.characters
        var planets = rr.planets
        var starships = rr.starships
        var vehicles = rr.vehicles
        var species = rr.species
        var text = ("title: " + title + "<br>" + "episode number: " + episode_id + "<br>"
                    + "director: " + director + "<br>" + "producer: " + producer + "<br>"
                    + "release date: " + release_date + "<br>" + "characters: " + characters + "<br>"
                    + "planets: " + planets + "<br>" + "starships: " + starships + "<br>"
                    + "vehicles: " + vehicles + "<br>" + "species: " + species)
        $("#singleInfo").html(text)
        })
}

function showPeople(){
    var $stuff = $("<p>")
    var peopleList = []
    for(var j = 1; j < 10; j++){
    var pr = $.ajax("http://swapi.co/api/people?page=" + j).done(function(results) {
        var peopleStuff = results.results
        for(var i = 0; i < peopleStuff.length; i++){
            console.log(peopleStuff[i]["name"])
            $stuff.html($stuff.html()+ peopleStuff[i]["name"] + "<br>")
            $("#xinfo").append($stuff)}
        })
    }
}

function showPlanets(){
    var $stuff = $("<p>")
    var planetList = []
    for(var j = 1; j < 8; j++){
    var pl = $.ajax("http://swapi.co/api/planets?page=" + j).done(function(results) {
        var planetStuff = results.results
        for(var i = 0; i < planetStuff.length; i++){
            console.log(planetStuff[i]["name"])
            $stuff.html($stuff.html()+ planetStuff[i]["name"] + "<br>")
            $("#xinfo").append($stuff)}
        })
    }
}

function showVehicles(){
    var $stuff = $("<p>")
    var vehicleList = []
    for(var j = 1; j < 5; j++){
    var vl = $.ajax("http://swapi.co/api/vehicles?page=" + j).done(function(results) {
        var vehicleStuff = results.results
        for(var i = 0; i < vehicleStuff.length; i++){
            console.log(vehicleStuff[i]["name"])
            $stuff.html($stuff.html()+ vehicleStuff[i]["name"] + "<br>")
            $("#xinfo").append($stuff)}
        })
    }
}

function showStarships(){
    var $stuff = $("<p>")
    var starshipList = []
    for(var j = 1; j < 5; j++){
    var vl = $.ajax("http://swapi.co/api/starships?page=" + j).done(function(results) {
        var starshipStuff = results.results
        for(var i = 0; i < starshipStuff.length; i++){
            console.log(starshipStuff[i]["name"])
            $stuff.html($stuff.html()+ starshipStuff[i]["name"] + "<br>")
            $("#xstarship").append($stuff)}
        })
    }
}

function showSpecies(){
    var $stuff = $("<p>")
    var speciesList = []
    for(var j = 1; j < 5; j++){
    var sl = $.ajax("http://swapi.co/api/species?page=" + j).done(function(results) {
        var speciesStuff = results.results
        for(var i = 0; i < speciesStuff.length; i++){
            console.log(speciesStuff[i]["name"])
            $stuff.html($stuff.html()+ speciesStuff[i]["name"] + "<br>")
            $("#xspecies").append($stuff)}
        })
    }
}

function showFilms(){
    var $stuff = $("<p>")
    var filmList = []
    for(var j = 1; j <= 1; j++){
    var sl = $.ajax("http://swapi.co/api/films?page=" + j).done(function(results) {
        var filmStuff = results.results
        for(var i = 0; i < filmStuff.length; i++){
            console.log(filmStuff[i]["title"])
            $stuff.html($stuff.html()+ filmStuff[i]["title"] + "<br>")
            $("#xinfo").append($stuff)}
        })
    }
}

function homeworldByUrl(url){
    $.ajax(url).done(function(results){
        $('#homeworld').html(results['name'])
            })
}

function speciesbyUrl(url){
    $.ajax(url[0]).done(function(results){
        $('#species').html(results['name'])
    })
}

// films
// homeworlds
// vehicles
// Starships



function clearFunction(){
    document.getElementById("xinfo").innerHTML = ""
}

$("#personbutton").click(showPerson)
$("#peopleButton").click(showPeople)
$("#planetButton").click(showPlanets)
$("#vehicleButton").click(showVehicles)
$("#starshipButton").click(showStarships)
$("#speciesButton").click(showSpecies)
$("#filmButton").click(showFilms)
$("#oneVehicleButton").click(oneVehicle)
$("#oneFilmButton").click(oneFilm)
$("#clearButton").click(clearFunction)
