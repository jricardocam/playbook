// Ejemplo 5: Objeto con método que recibe parámetros
const myPet = {
    name: "Woopa",
    age:1,
    sayHelloToMyPet: function(yourPet){
      console.log(`${this.name} say's hello to ${yourPet}`)
    },
    petAge: function(petAge){
        console.log(`Woopa has ${this.age} month and niky has ${petAge} years`)
    }
  }
  
  console.log("Ejemplo 5: Objeto con método que recibe parámetros")
  myPet.sayHelloToMyPet("Niky")
  myPet.petAge(5)