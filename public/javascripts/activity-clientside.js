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
      <li class="list-group-item listTitle lgi1">Activity</li>
      <li class="list-group-item listTitle lgi1">Type</li>
      <li class="list-group-item listTitle lgi3">Price</li>
      <li class="list-group-item listTitle lgi2">City</li>
      <li class="list-group-item listTitle lgi3">State</li>
      <li class="list-group-item listTitle lgi3">Details</li>
    </ul>
</div>`)

        for (var i = 0; i < data.list.length; i++) {
            var activity = data.list[i];


            $("#results").append(`<div class='activityList'>  
    <ul class="list-group list-group-horizontal" id="actListContainer"> 
      <li class="list-group-item lgi1">${activity.name}</li>
      <li class="list-group-item lgi1">${activity.type}</li>
      <li class="list-group-item lgi3">${activity.amount}</li>
      <li class="list-group-item lgi2">${activity.city}</li>
      <li class="list-group-item lgi3">${activity.state}</li>
      <li class="list-group-item lgi3"><button onclick='getActivityById(${activity.id})'>See Details</button></li>
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

        for (var i = 0; i < data.list.length; i++) {
            var activity = data.list[i];

            if (activity.description != null) {
                $("#singleActivity").append("<div class='card' style='width: 18rem;'>" +
                    "<div class='card-body'><p class='card-text'> Activity:" + activity.name + "</p>" +
                    "<p class='card-text'> Amount: " + activity.amount + "</p>" +
                    "<p class='card-text'> Type: " + activity.type + "</p>" +
                    "<p class='card-text'> Description: " + activity.description + "</p>")
            } else {
                $("#singleActivity").append("<div class='card' style='width: 18rem;'>" +
                    "<div class='card-body'><p class='card-text'> Activity:" + activity.name + "</p>" +
                    "<p class='card-text'> Amount: " + activity.amount + "</p>" +
                    "<p class='card-text'> Type: " + activity.type + "</p>" +
                    "<p class='card-text'> Description: None</p>")
            }
            $("#updateActivity").append(`<div><label>Change Name To: </label>` +
                `<input placeholder='New Name'type='text' id='activityName' name='activityName'>` +
                `<p><input type='submit' value='Update Name' onclick="updateActivity(${id})"></p>` +
                `<p><input type='submit' value='Delete Activity' onclick="deleteActivity(${id})"></p>` +
                `</form><button onclick="listActivities()">Return to List of Activities</button></div>`)

        }

    });
}

function updateActivity(id) {

    let name1 = $("#activityName").val();

    $("#singleActivity").empty();
    $("#updateActivity").empty();

    $.post("/item/:id", {id: id, name: name1}, function (data) {

        if (data.success) {
            $('#updated').append(`<h1>Updated activity name to ${name1}</h1>` +
                `<button onclick="listActivities()">Return to List of Activities</button>`)
        } else {
            $('#updated').append(`<h1>Sorry, your activity could not be updated at this time</h1>` +
                `<button onclick="listActivities()">Return to List of Activities</button>`)
        }
    });

}

function deleteActivity(id) {
    let name1 = $("#activityName").val();
    $("#updateActivity").empty();
    $.post("/delete/:id", {id: id}, function (data) {

        if (data.success) {
            $('#updated').append(`<h1>You have successfully deleted an activity</h1>` +
                `<button onclick="listActivities()">Return to List of Activities</button>`)
        } else {
            $('#updated').append(`<h1>Sorry, your activity could not be deleted at this time</h1>` +
                `<button onclick="listActivities()">Return to List of Activities</button>`)
        }
    });
}

function addActivityToDB() {
    $("#home").empty();

    let act = {
        name: $("#addName").val(),
        city: $("#addCity").val(),
        state: $("#addState").val(),
        price: $("#selectAmount").val(),
        type: $("#selectType").val(),
        description: $("#addDescription").val()
    }

    $.post("/add", {activity: act}, function (data) {
        if (data.success) {
            $("#add").empty();
            $('#add').append(`<h2 class="addContainer">NEW ACTIVITY ${act.name} ADDED</h2>` +
                '<button onclick="listActivities()">Return to List of Activities</button> ' +
                '<button onclick="addActivity()">Add Another Activity</button>')

        } else {
            $("#add").empty();
            $('#add').append('<h2 class="addContainer">SORRY YOUR ACTIVITY WAS NOT ADDED. PLEASE TRY AGAIN</h2>')
        }
    })
}

function addActivity() {

    $("#home").empty();
    $("#add").empty();

    $.get("/add", function (data) {

        $('#add').append('<div class="addContainer">' +
            '<p><lable >Name:</lable><input placeholder="Activity Name" type="text" id="addName"></p>' +
            '<p><lable>City:</lable><input type="text" id="addCity"></p>' +
            '<p><lable>State:</lable>' +
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
            '<option value="MD">Maryland</option>\n' +
            '<option value="MA">Massachusetts</option>\n' +
            '<option value="MI">Michigan</option>\n' +
            '<option value="MN">Minnesota</option>\n' +
            '<option value="MS">Mississippi</option>\n' +
            '<option value="MO">Missouri</option>\n' +
            '<option value="MT">Montana</option>\n' +
            '<option value="NE">Nebraska</option>\n' +
            '<option value="NV">Nevada</option>\n' +
            '<option value="NH">New Hampshire</option>\n' +
            '<option value="NJ">New Jersey</option>\n' +
            '<option value="NM">New Mexico</option>\n' +
            '<option value="NY">New York</option>\n' +
            '<option value="NC">North Carolina</option>\n' +
            '<option value="ND">North Dakota</option>\n' +
            '<option value="OH">Ohio</option>\n' +
            '<option value="OK">Oklahoma</option>\n' +
            '<option value="OR">Oregon</option>\n' +
            '<option value="PA">Pennsylvania</option>\n' +
            '<option value="RI">Rhode Island</option>\n' +
            '<option value="SC">South Carolina</option>\n' +
            '<option value="SD">South Dakota</option>\n' +
            '<option value="TN">Tennessee</option>\n' +
            '<option value="TX">Texas</option>\n' +
            '<option value="UT">Utah</option>\n' +
            '<option value="VT">Vermont</option>\n' +
            '<option value="VA">Virginia</option>\n' +
            '<option value="WA">Washington</option>\n' +
            '<option value="WV">West Virginia</option>\n' +
            '<option value="WI">Wisconsin</option>\n' +
            '<option value="WY">Wyoming</option>\n' +
            '</select></p>' +

            '<p><label for="price">Price:</label>' +
            '<select name="amount" id="selectAmount">\n' +
            '<option value=1>$</option>' +
            '<option value=2>$$</option>' +
            '<option value=3>$$$</option>' +
            '<option value=4>$$$$</option>' +
            '</select></p>' +
            '<p><label for="type">Activity Type:</label>' +
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
            '</select></p>' +

            '<p><lable>Description</lable><input type="text" id="addDescription"></p>' +
            '' +
            '</div>' +
            '<button onclick="addActivityToDB()">Add Activity</button>')
    })
}