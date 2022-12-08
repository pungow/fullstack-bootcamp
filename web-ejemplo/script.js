console.log('Hola mundo')
// leguanje multiparadicta, debil y tipado dinamico

// permitir (le podemos reasignar)
// solo se puede ejecutar en el scope
let fisrtname = 'Wilmer'
console.log(fisrtname)
fisrtname = 'felipe'
console.log(fisrtname)

// no se puede cambiar
const lastName = 4
console.log(lastName)


// evitar usar
var isDeveloper = true


// tipos primitivos: number, string, bool, undefiend, null
// imnutables

// otro tipo: OBEJTOS (mutables) array, set, map

const firstname = 'sadasdas';
const nameUpper = firstname.toUpperCase()
console.log(nameUpper)

// LIST

const list = []
list.push(100)
const anotherList = list.concat(157)
// anotherList.map()
//anotherList.forEach()
console.log(list[0])
console.log(anotherList[1])


// objetc

const persona = {
    name: 'Wilmer',
    tw: '@pungow',
    age: '20',
    isDeveloper: true,
    email: ['wilmer.pungo@omni.pro', 'pungo2002@gmail.com']
}

console.log(persona.name)
console.log(persona.email[1])

// propiedad forma dinamica de acceder
const field = 'tw'
console.log(persona[field])

// FUNTIONS

const sum = (operando1, operando2) => {
    console.log(operando1)
    console.log(operando2)

    return operando1 + operando2
}

result = sum(15, 20)
console.log(result)

// declara funtion

function restar(a, b) {
    return a - b
}

const a = 10
const b = 2

console.log(restar(a,b))
