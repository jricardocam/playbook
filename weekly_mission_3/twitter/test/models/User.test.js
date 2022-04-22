const User = require('./../../app/models/User');
describe("Unit test for Users", () => {
    test('Case 1 date datos tipo fecha ', () => {
            const user1 = new User(1,"username","name","bio")
             expect(user1.id).toBe(1);
             expect(user1.username).toBe("username");
             expect(user1.name).toBe("name");
             expect(user1.bio).toBe("bio");
             expect(user1.dateCreated).nottoBeundefined;
             expect(user1.lastUpdated).nottoBeundefined;
            });
    
            test('Case 2 getters ', () => {
                const user1 = new User(1,"username","name","bio")
                 expect(user1.getId).toBe(1);
                 expect(user1.getUsername).toBe("username");
                 expect(user1.getName).toBe("name");
                 expect(user1.getBio).toBe("bio");
                 expect(user1.dateCreated).nottoBeundefined;
                 expect(user1.lastUpdated).nottoBeundefined;
                });
            test('Case 3 setters ', () => {
                    const user = new User(1,"username","name","abio")

                    user.setUserName = "uNombre"
                    expect(user.username).toBe("uNombre");

                    user.setBio = "New bio"
                    expect(user.bio).toBe("New bio");
                    });
  })