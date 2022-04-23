const UserService = require('./../../app/services/UserService');
describe("Unit test for UsersServices", () => {
    test('Caso 1 ', () => {
            const user = new UserService.create(1,"username","name")
             expect(user.id).toBe(1);
             expect(user.username).toBe("username");
             expect(user.name).toBe("name");
           
            })
        })