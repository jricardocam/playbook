const User = require('./../../app/models/User');
describe("Unit test for Users", () => {
    test('Case 1 date datos tipo fecha ', () => {
            const user1 = new User(1,"username","name","bio")
             expect(user1.getId).toBe(1);
             expect(user1.getUsername).toBe("username");
             expect(user1.getName).toBe("name");
             expect(user1.getBio).toBe("bio");
             expect(user1.dateCreated).nottoBeundefined;
             expect(user1.lastUpdated).nottoBeundefined;
            });
  })