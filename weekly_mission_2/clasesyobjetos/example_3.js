class Explorer {
    // El constructor nos permite instanciar un objeto y asignarle atributos, this nos ayuda a realizar esto.
    constructor(name, age, subjects){
      this.name = name
      this.age = age
      this.subjects = subjects
      }
  }
  
  // Crear un objeto de la clase Student (esto se le llama instanciación)
  const explorer1 = new Explorer("José", 27, ["NodeJs"])
  console.log("Ejemplo 3: Instanciar un objeto con atributos")
  console.log(explorer1)

  const explorer2 = new Explorer("Ricardo", 24, ["HTML"])
  console.log(explorer2)
