// const { connect, disconnect } = require('../config/db.config');
const db = require('../conn');

class Apis {
    
    async getUserById(userId) {
        return new Promise((resolve, reject) => {
            db.serialize(() => {
                db.all('SELECT * FROM users WHERE id= ?', userId, (err, rows) => {
                    if (err)
                        reject(err)
                    resolve(rows)
                })
            });
        })
    }

    async getUsersAlbum(userId) {
        return new Promise((resolve, reject) => {
            db.serialize(() => {
                db.all('SELECT u.name as Username,u.email as Useremail,a.id as AlbumId,a.title as AlbumTitle FROM users u JOIN albums a on u.id = a.userId WHERE u.id = ?', userId, (err, rows) => {
                    if (err)
                        reject(err)
                    resolve(rows)
                })
            });
        })
    }

    async getAlbumwithImage(userId, pageSize, offset) {
        return new Promise((resolve, reject) => {
            db.serialize(() => {
                db.all(`
                select a.id as albumId,u.name as userName,u.email as userEmail,a.title as albumTitle, i.title as imageTitle, i.url as imageUrl from users u join albums a on a.userId = u.id JOIN images i on i.id = a.id where u.id = ? LIMIT ? offset ?`, [userId, pageSize,offset], (err, rows) => {
                    if (err)
                        reject(err)
                    resolve(rows)
                })
            });
        })
    }   
}

module.exports = new Apis();