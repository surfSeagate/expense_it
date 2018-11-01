
//
// Object Desctructuring
//

// const person = {
//   name: 'GlennBo',
//   age: 55,
//   location: {
//     city: 'Neptune Beach',
//     temp: 88
//   }
// };
// const { name: firstName = 'anon', age } = person

// console.log(`${firstName} is ${age}`)

// const { city, temp: temperature } = person.location

// if (temperature && city) {
//   console.log(`its ${temperature} in ${city}`)
// }

// const book = {
//   title: 'Ego is the enemy',
//   author: 'Ryan Holiday',
//   publisher: {
//     // name: 'Penguin'
//   }
// };
// const { name: publisherName = 'Self-Published' } = book.publisher
// console.log(publisherName)

//
//  Array Destructuring 
//

// const address = ['216 Seagate Ave', 'Neptune Beach', 'Florida', '32266']
// //const address = []

// const [street, city, state, zip] = address;
// //const [, , state = 'New York'] = address;

// console.log(`your are in ${city} ${state}`)

const item = ['coffee (iced)', '$2.00', '$2.45', '$2.75']
const [itemtype, , medium] = item
console.log(`${itemtype} costs ${medium}.`)

