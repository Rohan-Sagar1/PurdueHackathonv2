const database = require("./database.js")
const { Pool } = require("pg");



exports.doTransaction = database.doTransaction;

exports.getClient = async function(db_url) {
    const connectionString = db_url;
    const pool = new Pool({
        connectionString,
        application_name: "$ docs_simplecrud_node-postgres",
    });

    return await pool.connect();
}

// sql functions

exports.getAccountData = async function(client, data, callback) {
    // data contains:
    // email(string)
    // password(string)

    let getAccountStatement = "SELECT id, email, firstname, lastname, tags, posts, media FROM accounts WHERE email = $1 AND password = $2;";
    const args = [data.email, data.password];
    await client.query(getAccountStatement, args, callback);
}


exports.addAccount = async function(client, data, callback) {
    // data contents:
    // id(uuid)
    // password(string)
    // email(string)
    // first_name(string)
    // last_name(string)
    // tags(string array)
    let addAccountStatement =
        "INSERT INTO userinfo (id, password, email, firstname, lastname, tags) VALUES ($1, $2, $3, $4, $5, $6);";
    const args = [data.username, data.password, data.firstname, data.lastname, data.age, data.country];
    await client.query(addAccountStatement, args, callback);
}