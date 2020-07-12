function listActivities(){
    console.log("In list activities function");
    $.get("/list", function (data) {
        console.log("Back from server with....");
        console.log(data);
        for (var i = 0; i < data.list.length; i++) {
            var activity = data.list[i];

            $("#results").append("<li>" + activity.name + " " + activity.amount + ":" + activity.type + "</li>");
        }

    })
}