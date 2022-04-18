const explorers = [
 {
   name: "Explorer 1",
   exercises_completed: 10,
   rate: 99,
   city: "CDMX",
   stack: [
     "js",
     "c#"
   ],
   missions: {
     onboarding: {
       isFinished: true,
       exercisesFinished: true
     },
     frontend: {
       isFinished: true,
       exercisesFinished: true
     }
   }
 },
 {
   name: "Explorer 2",
   exercises_completed: 9,
   city: "Veracruz",
   rate: 50,
   stack: [
     "js"
   ],
   missions: {
     onboarding: {
       isFinished: false,
       exercisesFinished: false
     },
     frontend: {
       isFinished: false,
       exercisesFinished: false
     }
   }
 },
 {
   name: "Explorer 3",
   exercises_completed: 3,
   city: "Sonora",
   rate: 100,
   stack: [
     "elixir"
   ],
   missions: {
     onboarding: {
       isFinished: true,
       exercisesFinished: true
     },
     frontend: {
       isFinished: false,
       exercisesFinished: false
     }
   }
 }
]

console.log("2.1 Nombre de los explorers")
explorers.forEach(getName => console.log(getName.name));

console.log("2.2 Stack de los explorers")
explorers.forEach(getStack => console.log(getStack.stack));

console.log("2.3 Stack de los explorers usando Map")
explorers.map(getStackMap => console.log(getStackMap.stack));

console.log("2.4 Stack de los explorers usando Filter para saber mostrar JS")
const stackJS = explorers.filter( stacksConJS => stacksConJS.stack.includes('js'))
console.log(stackJS)

console.log("2.5 Primer explorer de CDMX usando Find")
const ciudad = explorers.find(enCDMX => enCDMX.city === "CDMX")
console.log(ciudad)

console.log("2.6 Suma de ejercicios completados de los explorers usando Reduce")
const result_of_exercises_completed = explorers.reduce((acc, element) => acc + element.exercises_completed, 0)
console.log(result_of_exercises_completed)

console.log("2.7 Al Menos un Explorer con exercisesFinished en frontend como true usando SOME ")
const areSomeTrue = explorers.some((termino) =>   termino.missions.frontend.exercisesFinished === true)
console.log(areSomeTrue)

console.log("2.8 Explorers tienen la propiedad isFinished del onboarding como true usando EVERY.")
const areTrue = explorers.every((termino) =>   termino.missions.onboarding.isFinished === true)
console.log(areTrue)