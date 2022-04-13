const myObject3 = {
  name: "Niky",
  age: 7,
  nicknames: [
   "Kiky",
    "Minia",
    "Nikandra"
  ],
  address: {
    zip_code: "50100",
    street: "Miguel Hidalgo",
    city: "Toluca"
  }
}
console.log("Ejemplo 3: Objeto con diferentes propiedades")
console.log(myObject3)
console.log(myObject3.name)
console.log(myObject3["address"])
console.log(myObject3.nicknames[0])
console.log(myObject3.address.city)