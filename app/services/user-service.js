const User = require('./../models/user')

class UserService {
    static create(id, username, name) {
        return new User(id, username, name, "Sin bio")
    }
    static getInfo(user) {
        return [user.id, user.username, user.name, user.bio]
    }
    static updateUserUsername(user, username) {
        user.username = username
    }
    static getAllUsernames(listOfUsers) {
        return listOfUsers.map(user => {
            return user.username
        });
    }
}

module.exports = UserService