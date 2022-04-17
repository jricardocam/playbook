// Ejemplo 4: Métodos en los objetos
class Repository {
    constructor(name, author, language, stars){
     this.name = name
     this.author = author
     this.language = language
     this.stars = stars
    }
  
    getInfo(){ // es una función que ejecutará cualquier objeto instanciado de esta clase
      return `Repository ${this.name} has ${this.stars} stars`
    }
    getMoreInfo(){
    return `Author: ${this.author} Language: ${this.language}`
    }
  }
  console.log("Ejemplo 4: Métodos en los objetos")
  const myRepo = new Repository("LaunchX", "carlogilmar", "js", 100)
  console.log(myRepo.getInfo())
  console.log(myRepo.getMoreInfo())

  class Mascota{
      constructor(name, nikname, age,){
          this.name=name,
          this.nikname=nikname,
          this.age=age
      }
      infoMascota(){
           return `Mi Nombre es ${this.name} a veces me dicen ${this.nikname} y tengo ${this.age} años`
      }
  }

  const Mascota1 =new Mascota("Niky","Kikia",7)
  console.log(Mascota1)
  console.log(Mascota1.infoMascota())