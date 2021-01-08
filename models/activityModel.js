const {Pool} = require('pg');


const pool = new Pool({
    connectionString: process.env.DATABASE_URL,
    ssl: process.env.NODE_TLS_REJECT_UNAUTHORIZED = 0
});

function listAll(callback) {

    let sql = "SELECT a.name, a.id, a.price, a.type_id, t.type, p.amount, a.city, a.state FROM activity a, type t, price p where a.type_id = t.id AND a.price = p.id ORDER BY a.name;"

    pool.query(sql, function (err, dbResults) {
        if (err) {
            console.log("Error lin 15 activityModel ", err)
        } else {
            let results = {
                success: true,
                list: dbResults.rows
            }
            callback(null, results)
        }
    })
}

function getActivityById(id, callback) {
    let actID = id;

    let sql = `SELECT a.name, a.id, a.price, a.type_id, a.description, t.type, p.amount FROM activity a, type t, price p WHERE a.id = ${actID} AND  a.type_id = t.id AND a.price = p.id ORDER BY a.name;`;

    pool.query(sql, function (err, dbResults) {
        if (err) {
            console.log("Error line 33 activityModel ", err)
        } else {
            let results = {
                success: true,
                list: dbResults.rows
            }
            callback(null, results)
        }
    })

}

function updateActivity(id, name, callback) {
    let actID = id;
    let actName = name;

    let sql = `UPDATE activity a SET "name" = '${actName}' where id=${actID};`;

    pool.query(sql, function (err) {

        if (err) {
            console.log("Error line 54 activityModel ", err)
        } else {
            let results = {
                success: true
            }
            callback(null, results)
        }
    })
}

function addActivity(callback) {

    let results = {
        success: true,
    };
    callback(null, results)

}

function addActivityToDB(act, callback) {
    let act1 = act;

    let sql = `INSERT INTO activity VALUES (DEFAULT, '${act1.name}','${act1.city}','${act1.state}',${act1.type}, ${act1.price}, '${act1.description}')`;


    pool.query(sql, function (err) {

        if (err) {
            console.log("Error line 82 activityModel ", err)
        } else {
            let results = {
                success: true,
            }
            callback(null, results)
        }
    })
}

function deleteActivity(id, callback) {
    let actID = id;

    let sql = `DELETE FROM activity where id=${actID};`;

    pool.query(sql, function (err) {

        if (err) {
            console.log("Error line 100 activityModel ", err)
        } else {
            let results = {
                success: true
            }
            callback(null, results)
        }
    })
}

module.exports = {
    listAll: listAll,
    getActivityById: getActivityById,
    updateActivity: updateActivity,
    addActivityToDB: addActivityToDB,
    addActivity: addActivity,
    deleteActivity: deleteActivity

};