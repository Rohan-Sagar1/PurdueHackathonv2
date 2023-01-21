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
app.get('/login', async (req, res) => {
    res.send(`
    <html>
        <form>
            <input type="text" id="email"><br>
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
                const data = {
                    email: email_box.value,
                    password: password
                }
                await fetchPOSTFunc("\login", "application/json", );
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
    // TODO: hash password
    const password = req.body.password;

    const data = {
        email: email,
        password: password
    };

    const client = await db.getClient(DB_URL);

    const cb = async function(err, res) {
        if (err) throw err;

        if (res.rows.length > 0) {
            console.log("db rows:");
            res.rows.forEach((row) => {
                console.log(row);
            });
        }
    }

    const trans_res = await db.doTransaction(client, data, cb, db.getAccountData, 5);

    res.send("200 success");
});

// create account page
app.get('/login/new', async (req, res) => {
    // new account page
});

// new account submit
app.post('/login/new/submit/', async (req, res) => {
    // submit all details for a user so they can be added to the database
    const id = req.body.id;
    const password = req.body.password;
    const email = req.body.email;
    const firstname = req.body.firstname;
    const lastname = req.body.lastname;
    const tags = req.body.tags;

    if(id === undefined || password === undefined ||
        email === undefined || firstname === undefined ||
        lastname === undefined || tags === undefined) {
        // all values must be defined
        // request failed: redirect user
        res.send('400 error');
        return;
    }

    const data = {
        id: id,
        password: password,
        email: email,
        firstname: firstname,
        lastname: lastname,
        tags: tags
    };

    const pool = await db.getClient(DB_URL);

    const cb = async function(err, res) {
        if (err) {
            console.log("Error in database callback for /login/new/submit/");
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

    const transRes = await db.doTransaction(pool, data, cb, db.addAccount, 5);

    // callback for doTransaction
    res.send("200 success");
});

app.listen(PORT, () =>
    console.log(`HTTP Server is up. Now go to ${HOST}:${PORT}`)
);





(async () => {

})();
