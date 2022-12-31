// №1 Promise syntax

// const promise = new Promise((resolve, reject) => {
//   const canFullfill = Math.random() > 0.5;

//   setTimeout(() => {
//     if (canFullfill) {
//       resolve(`Promise is done. Fullfilled`);
//     }
//     reject(`Promise with error. Reject`);
//   }, 1000);
// });

// // promise.then(onFullfilled,onRejected);

// console.log(promise);

// function onFullfilled(result) {
//   console.log(result);
// }

// function onRejected(error) {
//   console.log(error);
// }

// №1.1  Promise chain

// promise
//   .then((result) => {
//     console.log(result);
//     return 5;
//   })
//   .then((x) => {
//     console.log(x);
//     throw new Error("error please reload");
//     return 10;
//   })
//   .then((y) => {
//     console.log(y);
//   })
//   .catch((error) => console.log(error))
//   .finally(() => {
//     console.log(
//       "Everywhere in the parameters, a callback is thrown. Finally is performed in any case."
//     );
//   });

//  №2 Function promisification

// const makeOrder = (dish) => {
//   const DELAY = 1000;
//   const passed = Math.random() > 0.5;
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       if (passed) {
//         resolve(`Hi heare is your ${dish}`);
//       } else {
//         reject(`sorry, there is not enough food for your ${dish}`);
//       }
//     }, DELAY);
//   });

// };

// makeOrder("pie")
//   .then(onMakeOrderSuccess)
//   .catch(onMakeOrderError);

// function onMakeOrderSuccess(result) {
//   console.log("onMakeOrderSuccess");
//   console.log(result);
// }

// function onMakeOrderError(error) {
//   console.log("onMakeOrderError");
//   console.log(error);
// }

// №3 Backend request. return is always a promise.

// const fetchPokemonById = (id) => {
//   return fetch(`https://pokeapi.co/api/v2/pokemon/${id}`).then((r) => r.json());
// };

// fetchPokemonById(15).then(onFetchSuccess).catch(onFetchError);

// fetchPokemonById(14).then(onFetchSuccess).catch(onFetchError);

// fetchPokemonById(11).then(onFetchSuccess).catch(onFetchError);

// function onFetchSuccess(pokemon) {
//   console.log("Fetch is success");
//   console.log(pokemon)
//   return pokemon;
// }

// function onFetchError(error) {
//   console.log("fetch error");
//   console.log(error);
//   return error;
// }



