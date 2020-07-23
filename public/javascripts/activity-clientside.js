function listActivities() {

    $.get("/list", function (data) {


        $("#home").empty();
        $("#results").empty();
        $("#singleActivity").empty();
        $("#updateActivity").empty();
        $("#deleteActivity").empty();
        $("#updated").empty();
        $("#add").empty();
        $("#addedActivity").empty();

        $("#results").append(`<h1>Activities</h1>
<div>
<ul class="list-group list-group-horizontal" id="actListContainer"> 
      <li class="list-group-item b">Activity Name</li>
      <li class="list-group-item b">Type</li>
      <li class="list-group-item b">Price}</li>
      <li class="list-group-item b">City</li>
      <li class="list-group-item b">State</li>
    </ul>
</div>`)

        for (var i = 0; i < data.list.length; i++) {
            var activity = data.list[i];


            $("#results").append(`<div class='activityList'>  
    <ul class="list-group list-group-horizontal" id="actListContainer"> 
      <li class="list-group-item">${activity.name}</li>
      <li class="list-group-item">${activity.type}</li>
      <li class="list-group-item">${activity.amount}</li>
      <li class="list-group-item">${activity.city}</li>
      <li class="list-group-item">${activity.state}</li>
      <li class="list-group-item"><button onclick='getActivityById(${activity.id})'><i class='fas fa-edit'></i></button></li>
    </ul>
    </div>`);

        }

    })
}

function getActivityById(id) {
    console.log("In list activities function");
    $("#home").empty();
    $("#results").empty();
    $.get("/item/:id", {id: id}, function (data) {
        console.log("Back from server with....");
        console.log(data);

        for (var i = 0; i < data.list.length; i++) {
            var activity = data.list[i];

            $("#singleActivity").append("<div class='card' style='width: 18rem;'><div class='card-body'><p class='card-text'>" + activity.name + activity.id + "</p><p class='card-text'>" + activity.amount + "</p><p class='card-text'>" + activity.type + "</p><i class=\"fas fa-edit\"></i></a></div></div>");
        }
        $("#updateActivity").append(`<div><label>Name: </label><input placeholder='Name'type='text' id='activityName' name='activityName'><input type='submit' value='Submit' onclick="updateActivity(${id})"></form></div>`)

    });
}

function updateActivity(id) {

    let name1 = $("#activityName").val();

    $("#singleActivity").empty();
    $("#updateActivity").empty();

    $.post("/item/:id", {id: id, name: name1}, function (data) {

        if(data.success){
            $('#updated').append(`<h1>Updated activity name to ${name1}</h1>
                <button onclick="listActivities()">Return to List of Activities</button>`)
        }
    });

}

function addActivityToDB() {
    $("#home").empty();

    let act = {
        name:  $("#addName").val(),
        city:  $("#addCity").val(),
        state:  $("#addState").val(),
        price: $("#selectAmount").val(),
        type:  $("#selectType").val()
    }


    console.log("ADDED ACTIVITY = ", act);
    $.post("/add", {activity: act}, function (data) {
        if (data.results) {
            console.log("SUCCESS ADDING ACTIVITY")
        } else {
            console.log("FAILURE ADDING ACTIVITY")
        }
    })
}

function addActivity() {

    $("#home").empty();

    $.get("/add", function (data) {

        $('#add').append('<div class="addContainer">' +
            '<lable>Name:</lable><input type="text" id="addName">' +
            '<lable>City:</lable><input type="text" id="addCity">' +
            '<lable>State:</lable>' +
            '<select id="addState">\n' +
            '\t<option value="AL">Alabama</option>\n' +
            '\t<option value="AK">Alaska</option>\n' +
            '\t<option value="AZ">Arizona</option>\n' +
            '\t<option value="AR">Arkansas</option>\n' +
            '\t<option value="CA">California</option>\n' +
            '\t<option value="CO">Colorado</option>\n' +
            '\t<option value="CT">Connecticut</option>\n' +
            '\t<option value="DE">Delaware</option>\n' +
            '\t<option value="DC">District Of Columbia</option>\n' +
            '\t<option value="FL">Florida</option>\n' +
            '\t<option value="GA">Georgia</option>\n' +
            '\t<option value="HI">Hawaii</option>\n' +
            '\t<option value="ID">Idaho</option>\n' +
            '\t<option value="IL">Illinois</option>\n' +
            '\t<option value="IN">Indiana</option>\n' +
            '\t<option value="IA">Iowa</option>\n' +
            '\t<option value="KS">Kansas</option>\n' +
            '\t<option value="KY">Kentucky</option>\n' +
            '\t<option value="LA">Louisiana</option>\n' +
            '\t<option value="ME">Maine</option>\n' +
            '\t<option value="MD">Maryland</option>\n' +
            '\t<option value="MA">Massachusetts</option>\n' +
            '\t<option value="MI">Michigan</option>\n' +
            '\t<option value="MN">Minnesota</option>\n' +
            '\t<option value="MS">Mississippi</option>\n' +
            '\t<option value="MO">Missouri</option>\n' +
            '\t<option value="MT">Montana</option>\n' +
            '\t<option value="NE">Nebraska</option>\n' +
            '\t<option value="NV">Nevada</option>\n' +
            '\t<option value="NH">New Hampshire</option>\n' +
            '\t<option value="NJ">New Jersey</option>\n' +
            '\t<option value="NM">New Mexico</option>\n' +
            '\t<option value="NY">New York</option>\n' +
            '\t<option value="NC">North Carolina</option>\n' +
            '\t<option value="ND">North Dakota</option>\n' +
            '\t<option value="OH">Ohio</option>\n' +
            '\t<option value="OK">Oklahoma</option>\n' +
            '\t<option value="OR">Oregon</option>\n' +
            '\t<option value="PA">Pennsylvania</option>\n' +
            '\t<option value="RI">Rhode Island</option>\n' +
            '\t<option value="SC">South Carolina</option>\n' +
            '\t<option value="SD">South Dakota</option>\n' +
            '\t<option value="TN">Tennessee</option>\n' +
            '\t<option value="TX">Texas</option>\n' +
            '\t<option value="UT">Utah</option>\n' +
            '\t<option value="VT">Vermont</option>\n' +
            '\t<option value="VA">Virginia</option>\n' +
            '\t<option value="WA">Washington</option>\n' +
            '\t<option value="WV">West Virginia</option>\n' +
            '\t<option value="WI">Wisconsin</option>\n' +
            '\t<option value="WY">Wyoming</option>\n' +
            '</select>' +

            '<label for="price">Price:</label>' +
            '<select name="amount" id="selectAmount">\n' +
            '<option value=1>$</option>' +
            '<option value=2>$$</option>' +
            '<option value=3>$$$</option>' +
            '<option value=4>$$$$</option>' +
            '</select>' +
            '<label for="type">Activity Type:</label>' +
            '<select name="type" id="selectType">\n' +
            '<option value=1>Dining</option>' +
            '<option value=2>Hike</option>' +
            '<option value=3>Theater</option>' +
            '<option value=4>Museum</option>' +
            '<option value=5>Outdoor Recreation</option>' +
            '<option value=6>Educational</option>' +
            '<option value=7>Comedy</option>' +
            '<option value=8>Christmas</option>' +
            '<option value=9>Halloween</option>' +
            '</select>' +

            '<lable>Description</lable><input type="text" id="addDescription">' +
            '' +
            '</div>' +
            '<button onclick="addActivityToDB()">Add Activity</button>')
    })
}