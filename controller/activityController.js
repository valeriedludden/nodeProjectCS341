const activityModel = require("../models/activityModel");

function getActivityList(req, res) {
    console.log("made it to the controller");
    activityModel.listAll(function (err, results) {
        res.json(results);
        // res.render("index");
    })
}

module.exports = {
    getActivityList: getActivityList
};