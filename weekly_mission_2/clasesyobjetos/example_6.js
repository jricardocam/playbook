// Ejemplo 6: Getters para acceder a los atributos del objeto

class Ajolonauta {
    constructor(name, age, stack){
     this.name = name
     this.age = age
     this.stack = stack
     this.exercises_completed = 0
     this.exercises_todo = 99
    }
  
    // Podemos acceder a los atributos de esta clase
    get getExercisesCompleted() {
          return this.exercises_completed
    }
     get getExercisesTodo(){
          return this.exercises_todo
    }
    get getName(){
          return this.name
    }
    get getAge(){
      return this.age
}
  }
  
  console.log("Ejemplo 6: Getters para acceder a los atributos del objeto")
  const woopa = new Ajolonauta("Woopa", 1, [])
  console.log(woopa.getExercisesCompleted)
  console.log(woopa.getExercisesTodo)
  console.log(woopa.name)
  console.log(woopa.age)