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
  })