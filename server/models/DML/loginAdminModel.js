const mongoose = require('mongoose')
const Admin = require('../DDL/adminSchema')
const URL = 'mongodb://localhost:27017/'

exports.loginAdminModel = (data) => {
    return new Promise((resolve, reject) => {
        mongoose.connect(URL, {dbName: 'the_books'})
        .then(() => Admin.findOne({adminname: data.adminname}))
        .then(result => {
            if(result) {
                if(result.password===data.password) {
		            resolve(result)
                    mongoose.disconnect()
		        } else {
                    reject('Wrong Email or Password!')
                    mongoose.disconnect()
                }
            } else {
                reject('No Admin Found!')
                mongoose.disconnect()
            }
        })
        .catch(error => {
            reject(error)
            mongoose.disconnect()
        })
    })
}