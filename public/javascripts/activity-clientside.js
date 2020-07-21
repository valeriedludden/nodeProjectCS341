function listActivities(){
    console.log("In list activities function");
    $.get("/list", function (data) {
        console.log("Back from server with....");
        console.log(data);
        for (var i = 0; i < data.list.length; i++) {
            var activity = data.list[i];


            // $("#results").append("<li>" + activity.name + " " + activity.amount + ":" + activity.type + "</li>");
            $(".home").remove();
            // $("#results").append("<div class='card' style='width: 18rem;'><img src=\"...\" class=\"card-img-top\" alt=\"...\"><div class='card-body'><p class='card-text'>" + activity.name + activity.id + "</p><p class='card-text'>" + activity.amount + "</p><p class='card-text'>" + activity.type + "</p><button>Edit Activity <i class=\"fas fa-edit\"></i></button></div></div>");
            $("#results").append(`<div class='card' style='width: 18rem;'><div class='card-body'><p class='card-text'> ${activity.name}</p><p class='card-text'>${activity.amount}</p><p class='card-text'>${activity.type}</p><button onclick='getActivityById(${activity.id})'><i class=\"fas fa-edit\"></i></button></div></div>`);
            // $("#results").append("<div class='card' style='width: 18rem;'><img src=\"...\" class=\"card-img-top\" alt=\"...\"><div class='card-body'><p class='card-text'>" + activity.name + activity.id + "</p><p class='card-text'>" + activity.amount + "</p><p class='card-text'>" + activity.type + "</p><a onclick='getActivityById()' href="+'/item/' + actId + "><i class=\"fas fa-edit\"></i></a></div></div>");
            // $("#results").append("<div class='card' style='width: 18rem;'><img src=\"...\" class=\"card-img-top\" alt=\"...\"><div class='card-body'><p class='card-text'>" + activity.name + activity.id + "</p><p class='card-text'>" + activity.amount + "</p><p class='card-text'>" + activity.type + "</p><a href='/hello' onclick='getActivityById()'><i class=\"fas fa-edit\"></i></a></div></div>");
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
            var actId = data.list[i].id;

            // $("#results").append("<li>" + activity.name + " " + activity.amount + ":" + activity.type + "</li>");
            $(".home").remove();
            // $("#results").append("<div class='card' style='width: 18rem;'><img src=\"...\" class=\"card-img-top\" alt=\"...\"><div class='card-body'><p class='card-text'>" + activity.name + activity.id + "</p><p class='card-text'>" + activity.amount + "</p><p class='card-text'>" + activity.type + "</p><button>Edit Activity <i class=\"fas fa-edit\"></i></button></div></div>");
            $("#results").append("<div class='card' style='width: 18rem;'><img src=\"...\" class=\"card-img-top\" alt=\"...\"><div class='card-body'><p class='card-text'>" + activity.name + activity.id + "</p><p class='card-text'>" + activity.amount + "</p><p class='card-text'>" + activity.type + "</p><a href="+'/item/' + actId + "><i class=\"fas fa-edit\"></i></a></div></div>");
            // $("#results").append("<div class='card' style='width: 18rem;'><img src=\"...\" class=\"card-img-top\" alt=\"...\"><div class='card-body'><p class='card-text'>" + activity.name + activity.id + "</p><p class='card-text'>" + activity.amount + "</p><p class='card-text'>" + activity.type + "</p><a href='/hello'><i class=\"fas fa-edit\"></i></a></div></div>");
        }

    })
}