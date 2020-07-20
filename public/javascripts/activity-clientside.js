function listActivities(){
    console.log("In list activities function");
    $.get("/list", function (data) {
        console.log("Back from server with....");
        console.log(data);
        for (var i = 0; i < data.list.length; i++) {
            var activity = data.list[i];

            // $("#results").append("<li>" + activity.name + " " + activity.amount + ":" + activity.type + "</li>");
            $(".home").remove();
            $("#results").append("<div class='card' style='width: 18rem;'><img src=\"...\" class=\"card-img-top\" alt=\"...\"><div class='card-body'><p class='card-text'>" + activity.name + "</p><p class='card-text'>" + activity.amount + "</p><p class='card-text'>" + activity.type + "</p><i class=\"fas fa-edit\"></i></div></div>");
        }

    })
}