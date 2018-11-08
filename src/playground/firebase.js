
import * as firebase from 'firebase';


const config = {
  apiKey: "AIzaSyDNulN58HtDMcwSAIk08e4xOIRNXGLomWQ",
  authDomain: "expense-gc.firebaseapp.com",
  databaseURL: "https://expense-gc.firebaseio.com",
  projectId: "expense-gc",
  storageBucket: "expense-gc.appspot.com",
  messagingSenderId: "962548393364"
};


firebase.initializeApp(config);
const database = firebase.database();

// child_removed
database.ref('expenses').on('child_removed', (snapshot) => {
  console.log(snapshot.key, snapshot.val())
});

// child_changed
database.ref('expenses').on('child_changed', (snapshot) => {
  console.log(snapshot.key, snapshot.val());
});
// child_added - wierd, gets called for new and existing
database.ref('expenses').on('child_added', (snapshot) => {
  console.log(snapshot.key, snapshot.val());
})


// database.ref('expenses')
//   .on('value', (snapshot) => {
//     const expenses = [];
//     snapshot.forEach((childSnapshot) => {
//       expenses.push({
//         id: childSnapshot.key,
//         ...childSnapshot.val()

//       })
//     });
//     console.log(expenses)
//   });
// database.ref('expenses')
//   .once('value')
//   .then((snapshot) => {
//     const expenses = []

//     snapshot.forEach((childSnapshot) => {
//       expenses.push({
//         id: childSnapshot.key,
//         ...childSnapshot.val()

//       })
//     });
//     console.log(expenses)
//   });




// database.ref('expenses').push({
//   description: 'Tennis Lessons',
//   note: 'fun',
//   amount: 350.00,
//   createdAt: '20181107'

// });


// database.ref('notes').push({
//   title: 'Course topics',
//   body: 'React, Angular, Python'
// })

// database.ref('notes/-LQih3OEfYPiXEa8hzTB').update({
//   body: 'Buy food'
// })
// database.ref('notes/-LQih3OEfYPiXEa8hzTB').remove();


// fetching data using .once
// database.ref('location/city')
//   .once('value')
//   .then((snapshot) => {
//     const val = snapshot.val();
//     console.log(val);
//   }).catch((e) => {
//     console.log('error fetching data', e)
//   });

// const onValueChange = database.ref().on('value', (snapshot) => {
//   console.log(snapshot.val());
// }, (e) => {
//   console.log('error fetching data', e)
// });
// setTimeout(() => {
//   database.ref('age').set(75);
// }, 4500);
// setTimeout(() => {
//   database.ref().off('value');
// }, 7500);
// setTimeout(() => {
//   database.ref('age').set(80);
// }, 10000);

//******************************* */
// database.ref().on('value', (snapshot) => {
//   const val = snapshot.val();
//   console.log(`${val.name} is a ${val.job.title} at ${val.job.company}`);
// });


// database.ref().update({
//   name: 'Mike Abernathy',
//   'job/company': 'Partiot'
// });


// *********************************
// database.ref().set({
//   name: 'Glenn Curry',
//   age: 50,
//   stressLevel: 6,
//   job: {
//     title: 'software developer',
//     company: 'Google'
//   },
//   location: {
//     city: 'Neptune Beach',
//     country: 'United States'
//   }
// }).then(() => {
//   console.log('Data was saved');
// }).catch((e) => {
//   console.log('This failed bad:', e);
// });
// ************************************

//database.ref().set('this is my data!');

// database.ref('age').set(52);
// database.ref('location/city').set('Jax Beach');


// database.ref('attributes').set({
//   height: 72,
//   weight: 188
// }).then(() => {
//   console.log('attrubute tree was added')
// }).catch((e) => {
//   console.log('adding attributes failed miserably:', e)

// });

// console.log('I made a request to change this data');

// use .ref and remove, better than using .set(null), more explicit
// database.ref('isSingle')
//   //database.ref() // to remove all 
//   .remove()
//   .then(() => {
//     console.log('data was removed');

//   }).catch((e) => {
//     console.log('data was not removed', e);

// });
// use ref and .set(null)
///database.ref('isSingle').set(null)



// update needs to be called with an object, unlike .set()
// database.ref().update({
//   name: 'Mike Abernathy',
//   age: 42,
//   job: 'IT Manager',
//   isSingle: null

// });

// database.ref().update({
//   job: 'manager',
//   'location/city': 'Chicago' // ugly, need to wrapped nested node.

// });

// database.ref().update({
//   stressLevel: 9,
//   'job/company': 'Amazon',
//   'location/city': 'Seattle'
// });