const { Pool } = require('pg');


const pool = new Pool({
    connectionString: process.env.DATABASE_URL,
    ssl: process.env.NODE_TLS_REJECT_UNAUTHORIZED = 0
});

function listAll(callback) {
    console.log("Getting list of activities");

    let sql = "SELECT a.name, a.id, a.price, a.type_id, t.type, p.amount FROM activity a, type t, price p where a.type_id = t.id AND a.price = p.id ORDER BY a.name;"

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
    // let actName ="Lets PARTY";
    console.log("Updating Activity ID = " + actID);

    let sql1 = `SELECT a.name, a.id, a.price, a.type_id, t.type, p.amount FROM activity a, type t, price p WHERE a.id = ${actID} AND  a.type_id = t.id AND a.price = p.id ORDER BY a.name;`;
    let sql2 = `UPDATE activity a SET "name" = '${actName}' where id=${actID};`;


    pool.query(sql2, function(err, dbResults){
        if(err){
            console.log("Error line 61 activityModel ", err)
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

module.exports = {
    listAll: listAll,
    getActivityById: getActivityById,
    updateActivity:updateActivity
};