const UserService = require('./../app/services/user-service')

describe('Tests for UserService', () => {
    test('1. Create a new user using the UserService', () => {
        const user = UserService.create(1, 'Kaserola4', 'Daniel')
        expect(user.username).toBe('Kaserola4')
        expect(user.name).toBe('Daniel')
        expect(user.id).toBe(1)
        expect(user.bio).not.toBeUndefined()
    });
    
    test('2. Get all user data in a list', () => {
        const user = UserService.create(1, 'Kaserola4', 'Daniel')
        const userInfoInList = UserService.getInfo(user)

        expect(userInfoInList[0]).toBe(1)
        expect(userInfoInList[1]).toBe('Kaserola4')
        expect(userInfoInList[2]).toBe('Daniel')
        expect(userInfoInList[3]).toBe('Sin bio')
    });

    test('3. Update username', () => {
        const user = UserService.create(1, 'Kaserola4', 'Daniel')
        UserService.updateUserUsername(user, 'Kas')
        expect(user.username).toBe('Kas')
    });

    test('4. Given a list of users give me the list of usernames', () => {
        const user1 = UserService.create(1, 'Kaserola41', 'Daniel')
        const user2 = UserService.create(1, 'Kaserola42', 'Daniel')
        const user3 = UserService.create(1, 'Kaserola43', 'Daniel')
        const usernames = UserService.getAllUsernames([user1, user2, user3])

        expect(usernames).toContain('Kaserola41')
        expect(usernames).toContain('Kaserola42')
        expect(usernames).toContain('Kaserola43')
    });
});