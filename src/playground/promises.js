
const promise = new Promise((resolve, reject) => {
  setTimeout(() => {
    //resolve('this is my resolved data');
    reject('something went wrong');
  }, 9000);

});

console.log('before')
//then registers a callback.
promise.then((data) => {
  console.log('1', data);
}).catch((error) => {
  console.log('error: ', error);
});
//alternative to .catch
// promise.then((data) => {
//   console.log('1', data);
// }, (error) => {
//   console.log('error: ', error);
// });

console.log('after')