const Spiderman = require('./../app/spiderman');
describe("Unit test for Spiderman Class", () => {
    test('Case 1 Spiderman Object', () => {
        const andrewGarfield = new Spiderman("Spiderman Sony",31,"Andrew Garfield",4,"Marvel")
         expect(andrewGarfield.name).toBe("Spiderman Sony");
         expect(andrewGarfield.age).toBe(31);
         expect(andrewGarfield.actor).toBe("Andrew Garfield");
         expect(andrewGarfield.nuMovies).toBe(4);
         expect(andrewGarfield.studio).toBe("Marvel");

    });
    test('Case 2 Spiderman GetInfo', () => {
        const tomHolland = new Spiderman("Spiderman Marvel",25,"Tom Holland",5,"Marvel")
         expect(tomHolland.getInfo()).toBe("Hey, I'm Tom Holland from Marvel studio");
    });
  })