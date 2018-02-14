let mysql = require('mysql')

let connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'admin',
    database: 'tuto_express'
})

connection.connect()

module.exports = connection