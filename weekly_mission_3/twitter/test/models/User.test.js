const User = require('./../../app/models/User');
describe("Unit test for Users", () => {
    test('Case 1 user1', () => {
        const user1 = new User(1,"username","name","bio","dateCreated","lastUpdated")
         expect(user1.id).toBe(1);
         expect(user1.username).toBe("username");
         expect(user1.name).toBe("name");
         expect(user1.bio).toBe("bio");
         expect(user1.dateCreated).toBe("dateCreated");
         expect(user1.lastUpdated).toBe("lastUpdated");
        });
  })