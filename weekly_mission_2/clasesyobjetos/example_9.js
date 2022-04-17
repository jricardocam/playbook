// Ejemplo  9: Herencia entre dos clases
class Developer {
  constructor(name, mainLang, stack){
    this.name =  name
    this.mainLang = mainLang
    this.stack = stack
  }

  get getName() {
		return this.name
	}
  get getMain(){
    return this.mainLang
  }
}

console.log("Ejemplo  9: Herencia entre dos clases")
const carloDev = new Developer("Carlo", "js", ["elixir", "groovy", "lisp"])
console.log("Clase developer")
console.log(carloDev)

// Se usa la palabra extends para indicar que heredarás las propiedades de la clase Padre (Developer) en la clase definida.
// Podemos definir una clase vacía y rehusar todos los componentes de la clase padre

class LaunchXStudent extends Developer{
}

const carloLaunchXDev = new LaunchXStudent("Carlo", "js", ["elixir", "groovy", "lisp"])
console.log("Clase LauchX")
console.log(carloLaunchXDev)
console.log(carloLaunchXDev.getName) // getter de la clase padre rehusada en la clase hija

class Explorer extends Developer{
}

const ricardoExplorer = new Explorer("Ricardo", "js",["HTML","CSS"])
console.log("Clase Explorer")
console.log(ricardoExplorer)
console.log(ricardoExplorer.getMain)