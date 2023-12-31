const mysql = require('mysql2')

const config = {
    host:"127.0.0.1",
    user:"root",
    password:"123456",
    database:"food"
}

class Database {
    constructor() {
        this.connect()
    }

    async connect(type = 'MySQL') {
        try {
            this.connection = mysql.createConnection(config)
            console.log("DB connected");
        } catch (error) {
            console.log(error.message || "Cannot connect to DB");
        }
    }

    static getInstance() {
        if (!Database.instance) {
            Database.instance = new Database()
        }

        return Database.instance
    }
}

const instanceMySQL = Database.getInstance()
module.exports = instanceMySQL.connection