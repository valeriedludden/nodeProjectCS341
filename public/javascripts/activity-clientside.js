function listActivities(){
    console.log("In list activities function");
    $.get("/list", function (data) {
        console.log("Back from server with....");
        console.log(data);
        for (var i = 0; i < data.list.length; i++) {
            var activity = data.list[i];

            $(".home").empty();
            $("#results").append(`<div class='card' style='width: 18rem;'><div class='card-body'><p class='card-text'> ${activity.name}</p><p class='card-text'>${activity.amount}</p><p class='card-text'>${activity.type}</p><button onclick='getActivityById(${activity.id})'><i class=\"fas fa-edit\"></i></button></div></div>`);
        }

    })
}

function getActivityById(id){
    console.log("In list activities function");
    $.get("/item/:id", {id:id}, function (data) {
        console.log("Back from server with....");
        console.log(data);
        for (var i = 0; i < data.list.length; i++) {
            var activity = data.list[i];

            $("#results").empty();
            $("#singleActivity").append("<div class='card' style='width: 18rem;'><div class='card-body'><p class='card-text'>" + activity.name + activity.id + "</p><p class='card-text'>" + activity.amount + "</p><p class='card-text'>" + activity.type + "</p><i class=\"fas fa-edit\"></i></a></div></div>");
        }
        $("#updateActivity").append(`<div><label>Name: </label><input placeholder='Name'type='text' id='activityName' name='activityName'><input type='submit' value='Submit' onclick="updateActivity(${id})"></form></div>`)

    });
}
function updateActivity(id){
    let name1 = $("#activityName").val();
    console.log("NEW NAME = ", name1);
    $.post("/item/:id", {id:id, name:name1}, function (data){
        console.log("Back from UPDATING with....");
        console.log(data);
        for (var i = 0; i < data.list.length; i++) {
            var activity = data.list[i];
            $('#updated').append(`<div>Updated an activity with ${activity.id}</div>`)
        }
    });

}