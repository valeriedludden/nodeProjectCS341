const activityModel = require("../models/activityModel");

function getActivityList(req, res) {
    console.log("made it to the controller");
    activityModel.listAll(function (err, results) {
        res.json(results);
    })
}
function getActivityById(req, res){

    let actID = req.query.id;
    console.log("ACTIVITY ID = ", actID)
    activityModel.getActivityById(actID, function (err, results) {
        res.json(results)
    });
}

module.exports = {
    getActivityList: getActivityList,
    getActivityById: getActivityById
};