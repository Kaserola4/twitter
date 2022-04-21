const User = require('./../app/models/user')

describe('Unit tests for User class', () => {
    test('Create an User object', () => {
        // Aquí invocas el código que vas a usar en tu app
        const user = new User(1, 'Kaserola4', 'Daniel', 'Bio')
        // Auí validas los resultados de ese código
        // Esta es una comparación que va a igualar el valor de la izquierda
        // con el valor de la derecha (valor esperado)
        
        expect(user.id).toBe(1)
        expect(user.username).toBe('Kaserola4')
        expect(user.name).toBe('Daniel')
        expect(user.bio).toBe('Bio')
        expect(user.dateCreated).not.toBeUndefined() // Verifica que el valor no sea undefined
        expect(user.lastUpdated).not.toBeUndefined()
    });

    test('Add getters', () => {
        // Aquí invocas el código que vas a usar en tu app
        const user = new User(1, 'Kaserola4', 'Daniel', 'Bio')
        // Auí validas los resultados de ese código
        // Esta es una comparación que va a igualar el valor de la izquierda
        // con el valor de la derecha (valor esperado)
        
        expect(user.getUsername).toBe('Kaserola4')
        expect(user.getBio).toBe('Bio')
        expect(user.getDateCreated).not.toBeUndefined() // Verifica que el valor no sea undefined
        expect(user.getLastUpdated).not.toBeUndefined()
    });

    test('Add setters', () => {
        const user = new User(1, 'Kaserola4', 'Daniel', 'Bio')
        user.setUsername = 'Kas'
        expect(user.username).toBe('Kas')

        user.setBio = 'New bio'
        expect(user.bio).toBe('New bio')
    });
});
