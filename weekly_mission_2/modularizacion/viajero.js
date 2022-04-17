import Explorer from './explorer.js'

export default class Viajero extends Explorer {
  constructor(name, username, mission, cycle){
    super(name, username, mission)
    this.cycle = cycle
  }

  getGeneralInfo(){
    let nameAndUsername = this.getNameAndUsername()
    return `${nameAndUsername}, Ciclo ${this.cycle}`
  }
  saludo(){
      console.log(`Hola soy: ${this.name} gusto en saludarte!`)
  }
} 
