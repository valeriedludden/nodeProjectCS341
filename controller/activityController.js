const activityModel = require("../models/activityModel");
// const { body, validationResult } = require('express-validator');

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
function updateActivity(req, res) {
    let aName = req.body.name;
    let aId = req.body.id;
    console.log("Update for ", aName, " ID = ", aId)
    activityModel.updateActivity(aId, aName,  function (err, results) {
        res.json(results)
    });
}

module.exports = {
    getActivityList: getActivityList,
    getActivityById: getActivityById,
    updateActivity: updateActivity
};