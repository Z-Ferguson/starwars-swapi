
function showPerson(frm1){
    clearSingle()
    var $stuff = $("<ol class='ol'>")
    j = document.getElementById("frm1").value
    var pr = $.ajax("https://swapi.co/api/people/?search=" + j).done(function(results) {
        var rr = results.results
        console.log(rr[0]['name'])
        console.log(rr[1]['name'])
        console.log(rr[2]['name'])
        for(var i = 0; i < rr.length; i++){
            if(j==rr[i]['name']){
        homeworldByUrl(rr['homeworld'])
        speciesbyUrl(rr['species'])
        filmsbyUrl(rr['films'])
        vehiclesbyUrl(rr['vehicles'])
        starshipsbyUrl(rr['starships'])
        $stuff.html("Name: " + rr['name'] + "<br>" +
                    "Skin Color: " + rr['skin_color'] + "<br>" +
                    "Hair Color: " + rr['hair_color'] + "<br>" +
                    "Eye Color: " + rr['eye_color'] + "<br>" +
                    "Birth Year: " + rr['birth_year'] + "<br>" +
                    "Gender: " + rr['gender'] + "<br>" +
                    "Homeworld: <span id='homeworld'></span><br>" +
                    "Films: <li class='tab' id='films'></li><br>" +
                    "Vehicles: <li class='tab' id='vehicles'></li><br>" +
                    "Starships: <li class='tab' id='starships'></li><br>" +
                    "Species: <span id='species'></span>")
                    $("#singleInfo").append($stuff)
                }
            }
})
}


function oneVehicle(frm2){
    clearSingle()
    var $stuff = $("<ol class='ol'>")
    j = document.getElementById("frm2").value
    var pr = $.ajax("https://swapi.co/api/vehicles/?search=" + j).done(function(results) {
        rr = results.results[0]
        pilotsbyUrl(rr['pilots'])
        console.log(results.results[0]['name'])
    $stuff.html("Name: " + rr['name'] + "<br>" +
                "Model: " + rr['model'] + "<br>" +
                "Length: " + rr['length'] + "<br>" +
                "Manufacturer: " + rr['manufacturer'] + "<br>" +
                "Crew: " + rr['crew'] + "<br>" +
                "max atmosphere speed: " + rr['max_atmosphering_speed'] + "<br>" +
                "Vehicle class: " + rr['vehicle_class'] + "<br>" +
                "pilots: <ul class='tab' id='pilots'></ul>")
                $("#singleInfo").append($stuff)

        })
}


function oneFilm(frm3){
    clearSingle()
    var $stuff = $("<ol>")
    j = document.getElementById("frm3").value
    var pr = $.ajax("https://swapi.co/api/films/?search=" + j).done(function(results){
        rr = results.results[0]
        actorsbyUrl(rr['characters'])
        vehiclesbyUrl(rr['vehicles'])
        species_byUrl(rr['species'])
        planetsbyUrl(rr['planets'])
        starshipsbyUrl(rr['starships'])
        $stuff.html("Title: " + rr['title'] + "<br>" +
                    "Director: " + rr['director'] + "<br>" +
                    "Producer(s): " + rr['producer'] + "<br>" +
                    "Release Date: " + rr['release_date'] + "<br>" +
                    "Characterss: <ol class='tab' id='characters'></ol><br>" +
                    "planets: <ul class='tab' id='planets'></ul><br>" +
                    "starships: <ul class='tab' id='starships'></ul><br>" +
                    "vehicles: <ul class='tab' id='vehicles'></ul><br>" +
                    "species: <ul class='tab' id='species'></ul>")
                    $("#singleInfo").append($stuff)
        })
}

function showPeople(){
    clearFunction()
    var $stuff = $("<p>")
    var peopleList = []
    for(var j = 1; j < 10; j++){
    var pr = $.ajax("http://swapi.co/api/people?page=" + j).done(function(results) {
        var peopleStuff = results.results
        for(var i = 0; i < peopleStuff.length; i++){
            $stuff.html($stuff.html()+ peopleStuff[i]["name"] + "<br>")
            $("#xinfo").append($stuff)}
        })
    }
}

function showVehicles(){
    clearFunction()
    var $stuff = $("<p>")
    var vehicleList = []
    for(var j = 1; j < 5; j++){
    var vl = $.ajax("http://swapi.co/api/vehicles?page=" + j).done(function(results) {
        var vehicleStuff = results.results
        for(var i = 0; i < vehicleStuff.length; i++){
            $stuff.html($stuff.html()+ vehicleStuff[i]["name"] + "<br>")
            $("#xinfo").append($stuff)}
        })
    }
}

function showFilms(){
    clearFunction()
    var $stuff = $("<p>")
    var filmList = []
    for(var j = 1; j <= 1; j++){
    var sl = $.ajax("http://swapi.co/api/films?page=" + j).done(function(results) {
        var filmStuff = results.results
        for(var i = 0; i < filmStuff.length; i++){
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
    $.ajax(url).done(function(results){
        $('#species').html(results['name'])
    })
}

function filmsbyUrl(list_urls){
    var list_films = list_urls
    for(var i=0; i<list_films.length; i++){
    jQuery.ajax(list_films[i]).done(function(results){
        $('#films').html($('#films').html() + '<br>' + results['title'] )
    })
}
}

function vehiclesbyUrl(list_urls){
    var list_vehicles = list_urls
    for(var i=0; i<list_vehicles.length; i++){
    jQuery.ajax(list_vehicles[i]).done(function(results){
        $('#vehicles').html($('#vehicles').html() + '<br>' + results['name'] )
    })
}
}

function starshipsbyUrl(list_urls){
    var list_starships = list_urls
    for(var i=0; i<list_starships.length; i++){
    jQuery.ajax(list_starships[i]).done(function(results){
        $('#starships').html($('#starships').html() + '<br>' + results['name'] )
    })
}
}

function actorsbyUrl(list_urls){
    var list_characters = list_urls
    for(var i=0; i<list_characters.length; i++){
    jQuery.ajax(list_characters[i]).done(function(results){
        $('#characters').html($('#characters').html() + '<br>' + results['name'] )
    })
}
}

function species_byUrl(list_urls){
    var list_species = list_urls
    for(var i=0; i<list_species.length; i++){
    jQuery.ajax(list_species[i]).done(function(results){
        $('#species').html($('#species').html() + '<br>' + results['name'] )
    })
}
}

function planetsbyUrl(list_urls){
    var list_planets = list_urls
    for(var i=0; i<list_planets.length; i++){
    jQuery.ajax(list_planets[i]).done(function(results){
        $('#planets').html($('#planets').html() + '<br>' + results['name'] )
    })
}
}

function pilotsbyUrl(list_urls){
    var list_pilots = list_urls
    for(var i=0; i<list_pilots.length; i++){
    jQuery.ajax(list_pilots[i]).done(function(results){
        $('#pilots').html($('#pilots').html() + '<br>' + results['name'] )
    })
}
}

function clearFunction(){
    document.getElementById("xinfo").innerHTML = ""
}

function clearSingle(){
    document.getElementById("singleInfo").innerHTML = ""
}

$("#personbutton").click(showPerson)
$("#peopleButton").click(showPeople)
$("#vehicleButton").click(showVehicles)
$("#filmButton").click(showFilms)
$("#oneVehicleButton").click(oneVehicle)
$("#oneFilmButton").click(oneFilm)
