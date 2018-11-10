
const promise = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve('this is my first promise');
    //reject('something went wrong');
  }, 3000);

});

console.log('before')
//then registers a callback.
promise.then((data) => {
  console.log('1', data);

  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('this is my other promise');
      //reject('something went wrong');
    }, 3000);

  });
}).then((str) => {
  console.log('did this chain then run?', str)
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