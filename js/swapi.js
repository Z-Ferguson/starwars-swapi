url = "http://swapi.co/api/people/3"

function showPerson(){
    $.ajax({
        url: url
    }).done(function(results) {
        var name = results.name
        var height = results.height
        var hair_color = results.hair_color
        var skin_color = results.skin_color
        var eye_color = results.eye_color
        var birth_year = results.birth_year
        var homeworld = results.homeworld
        console.log(results)
        var text = ("name: " + name + "<br>" + "height: " + height + "<br>" + "eye color: " + eye_color + "<br>" +
                    "hair color: " + hair_color + "<br>" + "homeworld: " + homeworld)
        $("#person").html(text)
    })
}

function showPeople(){
    var $stuff = $("<li>")
    var peopleList = []
    var pr = $.ajax("http://swapi.co/api/people/").done(function(results) {
        var peopleStuff = results.results
        for(var i = 0; i < 10; i++){
            console.log(peopleStuff[i]["name"])
            $stuff.html($stuff.html()+ peopleStuff[i]["name"] + "<br>")
            // peopleList.push(peopleStuff[i])
            $("#xpeople").append($stuff)}
        })
    }



$("#button").click(showPerson)
$("#peopleButton").click(showPeople)
