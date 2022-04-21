const UserView = require('./../app/views/user-view')

describe('Tests for UserView', () => {
    test('Return an error object when try to create a new userr with a null payload', () => {
        const payload = null
        const result = UserView.createUser(payload)

        expect(result.error).toMatch(/Payload no existe/)
    });

    test('Return an error object when try to create a new user with a payload with invalid properties', () => {
        const payload = { username: 'null', name: 12, id: 'id' }
        const result = UserView.createUser(payload)

        expect(result.error).toMatch(/Necesitan tener un valor válido/)
    });

    test('Return an error object when trying to create a new user with a payload with missing properties', () => {
        const payload = { username: 'Username' }
        const result = UserView.createUser(payload)

        expect(result.error).toMatch(/Necesitan tener un valor válido/)
    });

    test('Create a user by giving a valid payload', () => {
        const payload = { username: 'Kas', id: 1, name: 'Daniel' }
        const result = UserView.createUser(payload)

        expect(result.name).toBe('Daniel')
        expect(result.username).toBe('Kas')
        expect(result.id).toBe(1)

    });
});