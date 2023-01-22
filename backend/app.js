const { Pool } = require("pg");
const { v4: uuidv4 } = require("uuid");
// const { https } = require("http");
const express = require("express");
const {max} = require("pg/lib/defaults");
const app = express();
require("dotenv").config();

const db = require("./database/db-interface.js");

app.use(express.json()); // need this for express to parse incoming data as json
app.use(express.static(__dirname + '/html'));
app.use(express.static(__dirname + '/assets'));

// initialize vars
// TODO: access these only when needed
const PORT = process.env.SERVER_PORT;
const HOST = process.env.SERVER_HOST;
const DB_URL = process.env.DATABASE_URL;


// global variables
let CLIENT = undefined;
(async () => {
    CLIENT = await db.getClient(DB_URL);
    console.log("yuh")
})();

// landing page
app.get('/', async (req, res) => {
    const error = req.query.error;
    const code = req.query.code;
    const state = req.query.state;

    res.send(`
        <!DOCTYPE html>
        <html>
            <body>
            Home page placeholder
            </body>
        </html>
    `);
});


// existing user login page
app.post('/login', async (req, res) => {

    const id = req.body.id;

    if(await db.userExists(CLIENT, id)) {
        // user is already logged in. redirect them to the correct page
        res.send("already logged in.")
        return;
    }
    // user isn't logged in yet. proceed

    res.send(`
    <html>
        <form>
            <label for="email">email:</label><br>
            <input type="text" id="email"><br>
            <label for="">password:</label><br>
            <input type="password" id="password"><br>
            <input type="submit" id="submit" onclick="submit_form()"><br>
        </form>
        <script>
            const email_box = document.getElementById("email");
            const password_box = document.getElementById("password");
            
            const fetchPOSTFunc = async function(url, contentType, data) {
                const options = {
                    method: 'POST',
                    headers: {
                        'Content-Type': contentType
                    },
                    body: JSON.stringify(data)
                };
                return await fetch(url, options);
            }

            var fetchGETFunc = async function(url) {
                const options = {
                    method: 'GET'
                };
                return await fetch(url, options);
            }
            
            const submit_form = async function() {
                const email = email_box.value;
                const password = password_box.value;
                const data = {
                    email, password
                }
                console.log(data);
                const result = await fetchPOSTFunc("/login/submit", "application/json", data);
                const resultJson = await result.json();
                if(resultJson.success) {
                    location.reload();
                }
            }
        </script>
    </html>
    `);
    // login page
});

// existing user login
app.post('/login/submit', async (req, res) => {
   // submit login details

    const email = req.body.email;
    const password = req.body.password;

    const data = {
        email: email,
        password: password
    };
    const cb = async function(err, res1) {
        if (err) {
            // request failed
            console.log("request failed");
            console.log(err);
            res.send("request failed");
        } else {
            // request success
            if (res1.rows === undefined || res1.rows.length === 0) {
                // didnt find any users
                // no user found with given id
                console.log("couldn't find you");
                res.send("couldn't find you");
            } else {
                // found user with given id
                console.log(res1.rows[0].id);
                res.send("found you");
            }

        }

    }

    const trans_res = await db.doTransaction(CLIENT, data, cb, db.getId, 5);
});

// create account page
app.get('/login/new', async (req, res) => {
    res.send(`
    <html>
        <form> 
            <label for="email">email:</label><br>
            <input type="text" id="email"><br>
            <label for="password">password:</label><br>
            <input type="password" id="password"><br>
            <label for="firstname">first name:</label><br>
            <input type="text" id="firstname"><br>
            <label for="lastname">last name:</label><br>
            <input type="text" id="lastname"><br>
            <label for="tags">tags (seperate using commas):</label><br>
            <input type="text" id="tags"><br>
            <input type="submit" id="submit" onclick="submit_form()"><br>
        </form>
        <script>
            const email_box = document.getElementById("email");
            const password_box = document.getElementById("password");
            const firstname_box = document.getElementById("firstname");
            const lastname_box = document.getElementById("lastname");
            const tags_box = document.getElementById("tags");
            
            const fetchPOSTFunc = async function(url, contentType, data) {
                const options = {
                    method: 'POST',
                    headers: {
                        'Content-Type': contentType
                    },
                    body: JSON.stringify(data)
                };
                return await fetch(url, options);
            }

            var fetchGETFunc = async function(url) {
                const options = {
                    method: 'GET'
                };
                return await fetch(url, options);
            }
            
            const submit_form = async function() {
                const email = email_box.value;
                const password = password_box.value;
                const firstname = firstname_box.value;
                const lastname = lastname_box.value;
                const tags = tags_box.value;
                const data = {
                    email,
                    password,
                    firstname,
                    lastname,
                    tags
                }
                console.log(data);
                await fetchPOSTFunc("/login/new/submit", "application/json", data);
            }
        </script>
    </html>
    `);
    // new account page
});

// new account submit
app.post('/login/new/submit/', async (req, res) => {
    // submit all details for a user so they can be added to the database

    if(await db.userExists(CLIENT, req.body.id)) {
        // redirect user, they exist
        return;
    }

    const password = req.body.password;
    const email = req.body.email;
    const firstname = req.body.firstname;
    const lastname = req.body.lastname;
    const tags_str = req.body.tags;

    if(password === undefined ||
        email === undefined || firstname === undefined ||
        lastname === undefined || tags_str === undefined) {
        // all values must be defined
        // request failed: redirect user
        res.send('400 error');
        return;
    }

    const tags = tags_str.split(",");
    tags.forEach((e) => e.trim());

    const id = await uuidv4();

    const data = {
        id: id,
        password: password,
        email: email,
        firstname: firstname,
        lastname: lastname,
        tags: tags
    };

    console.log(data);

    const cb = async function(err, res) {
        if (err) {
            console.log("Error in database callback for /login/new/submit/");
            console.log(err);
            // request failed: redirect user
        } else {
            // request success: redirect user

            if (res.rows.length > 0) {
                console.log("db rows:");
                res.rows.forEach((row) => {
                    console.log(row);
                });
            }
        }
    }

    const transRes = await db.doTransaction(CLIENT, data, cb, db.addAccount, 5);

    // callback for doTransaction
    res.send("200 success");
});

// profile page
app.post('/profile/', async (req, res) => {
    const id = req.body.id;

    if(id === undefined) {
        // can't take them to the user page
        console.log("id undefined");
    } else {
        const data = {
            id: id
        };

        const cb = async function(err, res1) {
            if (err) {
                // transaction failed
                console.log("transaction failed");
                console.log(err);
                res.send("400 failed");
            } else {
                console.log("transaction success");
                res.send(res1);
            }
        }

        await db.doTransaction(CLIENT, data, cb, db.getAccountData, 5);
    }

});

// submit profile edits
app.post('/profile/edit/submit/', async (req, res) => {

});

// page showing the posts. default sort is recommended posts
app.post('/posts/', async (req, res) => {
    if(!await db.userExists(CLIENT, req.body.id)) {
        // redirect to login page
    }
    // send posts page
});

// page for user to create posts
app.post('/posts/create/', async (req, res) => {
    if(!await db.userExists(CLIENT, req.body.id)) {
        // redirect to login page
    }
    // send create page
});

// submit post
app.post('/posts/create/submit', async (req, res) => {
    if(!await db.userExists(CLIENT, req.body.id)) {
        // redirect to login page
    }

    const author = req.body.id;
    const title = req.body.title;
    const description = req.body.description;
    const tags_str = req.body.tags;

    const tags = tags_str.split(",");
    tags.forEach((e) => e.trim());

    const id = await uuidv4();

    // check if


    const data = {
        id: id,
        title: title,
        description: description,
        tags: tags,
        author: author
    };

    const cb = async function(err, res1) {
        if(err) {
            // post failed
            console.log(err);
            res.send("post not created");
        } else {
            // post success
            console.log("post created");
            res.send("post created");
        }
    }

    await db.doTransaction(CLIENT, data, cb, db.addPost, 5);

});

app.listen(PORT, () =>
    console.log(`HTTP Server is up. Now go to ${HOST}:${PORT}`)
);





(async () => {

})();
