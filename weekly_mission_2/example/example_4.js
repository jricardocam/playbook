const pet = {
    name: "Niky",
    age: 5,
    nickName:"Kiky",
    // Esta es una función que se guarda como propiedad
    sayHello: function(){
      // this.name hace referencia a la propiedad del objeto
      console.log(`${this.name} te saluda! Tengo ${this.age} años`)
    },
    sayNickname: function(){
        console.log(`A veces me dicen ${this.nickName}!`)
    }
  }
  
  console.log("Ejemplo 4: Objeto con métodos")
  pet.sayHello()
  pet.sayNickname()