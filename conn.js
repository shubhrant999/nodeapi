const sqlite3 = require('sqlite3').verbose();
const fs = require("fs");
const filepath = './database.sqli' ;


function createDbConnection() {
    if (fs.existsSync(filepath)) {
        return new sqlite3.Database(filepath);
    } else {
        const db = new sqlite3.Database(filepath, (error) => {
            if (error) {
                return console.error(error.message);
            }
            createTable(db);
        });
        console.log("Connection with SQLite has been established");
        return db;
    }
}
module.exports = createDbConnection();
// module.exports = {
//     connectToServer: async function (callback) {
//         const dbname = 'awsmean';
//         try {
//             // Connect to the MongoDB cluster
//             await client.connect();
//             dbConnection = client.db(dbname);
//         } catch (e) {
//             console.error(e);
//         } 
        
//         // finally {
//         //     await client.close();
//         // }
//         return callback();
//     },

//     getDb: function () {
//         return dbConnection;
//     },
// };