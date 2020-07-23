const { Pool } = require('pg');


const pool = new Pool({
    connectionString: process.env.DATABASE_URL,
    ssl: process.env.NODE_TLS_REJECT_UNAUTHORIZED = 0
});

function listAll(callback) {
    console.log("Getting list of activities");

    let sql = "SELECT a.name, a.id, a.price, a.type_id, t.type, p.amount, a.city, a.state FROM activity a, type t, price p where a.type_id = t.id AND a.price = p.id ORDER BY a.name;"

    pool.query(sql, function(err, dbResults){
        if(err){
            console.log("Error lin 15 activityModel ", err)
        }
        else{
             let results = {
                success: true,
                list: dbResults.rows
            }
            callback(null, results)
        }
    })
}

function getActivityById(id,callback){
    console.log("Getting list of activities");
    let actID = id;
    console.log("ID = " + actID)

    let sql = `SELECT a.name, a.id, a.price, a.type_id, t.type, p.amount FROM activity a, type t, price p WHERE a.id = ${actID} AND  a.type_id = t.id AND a.price = p.id ORDER BY a.name;`;


    pool.query(sql, function(err, dbResults){
        if(err){
            console.log("Error line 34 activityModel ", err)
        }
        else{
            let results = {
                success: true,
                list: dbResults.rows
            }
            callback(null, results)
        }
    })

}

function updateActivity(id, name, callback){
    let actID = id;
    let actName = name;
    console.log("Updating Activity ID = " + actID);

    let sql = `UPDATE activity a SET "name" = '${actName}' where id=${actID};`;

    pool.query(sql, function(err, dbResults){

        if(err){
            console.log("Error line 61 activityModel ", err)
        }
        else{
            let results = {
                success: true,
                // list: dbResults.rows
            }
            callback(null, results)
        }
    })
}

function addActivity(callback){

            let results = {
                success: true,
            }
            callback(null, results)

}
function addActivityToDB(act, callback){
    let act1 = act;
    console.log("New Activty = " + act1.name);
    console.log("New Activty = " + act1.type);
    // act1.type = 3;
    // act1.price = 4;

    // let sql = `-- INSERT INTO activity VALUES (DEFAULT, ${act1.name},${act1.city},${act1.state},${act1.type},${act1.price})`;
    let sql = `INSERT INTO activity VALUES (DEFAULT, 'Red','MV','CA',${act1.type}, 2)`;


    pool.query(sql, function(err){

        if(err){
            console.log("Error line 94 activityModel ", err)
        }
        else{
            let results = {
                success: true,
            }
            callback(null, results)
        }
    })
}

module.exports = {
    listAll: listAll,
    getActivityById: getActivityById,
    updateActivity:updateActivity,
    addActivity: addActivity,
    addActivityToDB,addActivityToDB
};