let connection = require('../config/db')
let moment = require('../config/moment')

class Message {

    constructor (row){
        this.row = row
    }

    get id(){
        return this.row.id
    }

    get content(){
        return this.row.content
    }

    get created_at(){
        return moment(this.row.created_at)
    }
    static create(content, cb){
        connection.query('INSERT INTO messages SET content = ?, created_at = ?', [content, new Date()], (err, result) => {
            if (err) throw err
            cb(result)
        })
    }

    static all(cb){
        connection.query('SELECT * FROM messages', (err, rows) => {
            if(err) throw err
            cb(rows.map((row) => new Message(row)))
        })
    }

    static find(id, cb){
        connection.query('SELECT * FROM messages WHERE id = ?', [id], (err, rows) => {
            if(err) throw err
            cb(new Message(rows[0]))
        })
    }
}

module.exports = Message