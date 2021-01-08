const activityModel = require("../models/activityModel");

function getActivityList(req, res) {
    activityModel.listAll(function (err, results) {
        res.json(results);
    })
}

function getActivityById(req, res) {

    let actID = req.query.id;
    console.log("activity Controller line 12 ACTIVITY ID = ", actID)
    activityModel.getActivityById(actID, function (err, results) {
        res.json(results)
    });
}

function updateActivity(req, res) {
    let aName = req.body.name;
    let aId = req.body.id;
    console.log("activity Controller line 21 Update for ", aName, " ID = ", aId)
    activityModel.updateActivity(aId, aName, function (err, results) {
        res.json(results)
    });
}

function addActivity(req, res) {
    activityModel.addActivity(function (err, results) {
        res.json(results)
    });
}

function addActivityToDB(req, res) {
    let act = req.body.activity;
    console.log("activity Controller line 35 CONTROLLER ACTIVITY = ", act)
    activityModel.addActivityToDB(act, function (err, results) {
        res.json(results)
    });
}

function deleteActivity(req, res){
    let dId = req.body.id;
    activityModel.deleteActivity(dId, function (err, results) {
        res.json(results)
    });

}

module.exports = {
    getActivityList: getActivityList,
    getActivityById: getActivityById,
    updateActivity: updateActivity,
    addActivity: addActivity,
    addActivityToDB: addActivityToDB,
    deleteActivity: deleteActivity
};