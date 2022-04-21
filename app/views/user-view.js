const UserService = require('../services/user-service')

class UserView {
    static createUser(payload){
        if (payload == null) return {error: 'Payload no existe'}
        if (payload.username == null || typeof(payload.name) != 'string' || typeof(payload.id) != 'number') return {error: 'Necesitan tener un valor válido'}
        return UserService.create(payload.id, payload.username, payload.name)
    }

}

module.exports = UserView