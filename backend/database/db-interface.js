const database = require("./database.js")
const { Pool } = require("pg");



exports.doTransaction = database.doTransaction;

exports.getClient = async function(db_url) {
    const connectionString = db_url;
    const pool = new Pool({
        connectionString,
        application_name: "$ docs_simplecrud_node-postgres",
    });

    console.log("yee")
    return await pool.connect();
}

exports.userExists = async function(client, id) {
    const data = {
        id: id
    };

    let is_valid_id = false;

    const cb = async function(err, res) {
        is_valid_id = !err && res.rows !== undefined && res.rows.length !== 0;
    }

    await exports.doTransaction(client, data, cb, exports.getIdfromId, 5);
    return is_valid_id;
}

// sql functions

exports.getIdfromId = async function (client, data, callback) {
    // used to verify if the id exists
    const getId = "SELECT id FROM userinfo WHERE id = $1";
    const args = [data.id];
    await client.query(getId, args, callback);
}

exports.getAccountData = async function(client, data, callback) {
    // data contains:
    // id(uuid)
    const accountDataStatement = "SELECT id, email, firstname, lastname, tags FROM userinfo WHERE id = $1";
    const args = [data.id];
    await client.query(accountDataStatement, args, callback);
}

exports.getId = async function(client, data, callback) {
    // data contains:
    // email(string)
    // password(string)

    const getAccountStatement = "SELECT id FROM userinfo WHERE email = $1 AND password = $2;";
    const args = [data.email, data.password];
    await client.query(getAccountStatement, args, callback);
}

exports.addAccount = async function(client, data, callback) {
    // data contents:
    // id(uuid)
    // password(string)
    // email(string)
    // firstname(string)
    // lastname(string)
    // tags(string array)
    const addAccountStatement =
        "INSERT INTO userinfo (id, password, email, firstname, lastname, tags) VALUES ($1, $2, $3, $4, $5, $6);";
    const args = [data.id, data.password, data.email, data.firstname, data.lastname, data.tags];
    await client.query(addAccountStatement, args, callback);
}


exports.getPost = async function(client, data, callback) {

}

exports.getPostsFromUser = async function(client, data, callback) {

}

exports.addPost = async function(client, data, callback) {
    const addPostStatement =
        "INSERT INTO posts (id, title, description, tags, author) VALUES ($1, $2, $3, $4, $5)";
    const args = [data.id, data.title, data.description, data.tags, data.author]
    await client.query(addPostStatement, args, callback);
}

exports.addPostToUser = async function(client, data, callback) {
    // get list of posts from user
    // append
    // set list of posts from user
}