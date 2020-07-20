const { Pool } = require('pg');

const pool = new Pool({
    connectionString: process.env.DATABASE_URL,
    ssl: process.env.NODE_TLS_REJECT_UNAUTHORIZED = 0
});

function listAll(callback) {
    console.log("Getting list of activities");

    let sql = "SELECT a.name, a.price, a.type_id, t.type, p.amount FROM activity a, type t, price p where a.type_id = t.id AND a.price = p.id;"

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

module.exports = {
    listAll: listAll
};