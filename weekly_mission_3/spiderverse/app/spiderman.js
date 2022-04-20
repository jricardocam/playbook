/*Crea una clase spiderman que tenga como atributos los siguientes campos: nombre, edad, 
actor que lo interpretó, número de películas en las que apareció, estudio de cine.*/
class Spiderman {
    constructor (name,age,actor,nuMovies,studio) {
      this.name = name
      this.age = age
      this.actor = actor
      this.nuMovies = nuMovies
      this.studio = studio
    }
    getInfo(){
        return`Hey, I'm ${this.actor} from ${this.studio} studio`
    }
  }
  
  // Esta línea nos permite exportar nuestra clase
  module.exports = Spiderman
