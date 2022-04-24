const User = require('../../app/models/User');
const UserService = require('./../../app/models/UserService');

describe("Unit test for UserService", () => {
    test('Case 1  ', () => {
            const user= UserService.create(1,"username","name")
             expect(user.id).toBe(1);
             expect(user.username).toBe("username");
             expect(user.name).toBe("name");
             expect(user.bio).nottoBeUndefined;
            });
    test('Case 2  ', () => {
        const user= UserService.create(1,"username","name")
        const userInfoInList = UserService.getInfo(user)
            expect(userInfoInList[0]).toBe(1);
            expect(userInfoInList[1]).toBe("username");
            expect(userInfoInList[2]).toBe("name");
            expect(userInfoInList[3]).toBe("Sin bio");
        });
    test('Case 3  ', () => {
        const user= UserService.create(1,"username","name")
        UserService.updateUserUsername(user,"ricardo")
            expect(user.username).toBe("ricardo");
        });
    test('Case 4  ', () => {
        const user1= UserService.create(1,"username1","name1")
        const user2= UserService.create(1,"username2","name2")
        const user3= UserService.create(1,"username3","name3")
        const usernames=UserService.getAllUsernames([user1,user2,user3])
        expect(usernames).toContain("username1");
        expect(usernames).toContain("username2");
        expect(usernames).toContain("username3");
        });
  })