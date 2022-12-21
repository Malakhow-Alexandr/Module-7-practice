// №1
// За допомогою методу forEach() потрібно заповнити uploadedFiles
// baseUrl ротрібно передати як this

// const imagesName = [
//   "car.png",
//   "grass.png",
//   "avatar.png",
//   "user.png",
//   "sea.png",
//   "water.png",
//   "bird.png",
// ];
// const baseUrl = { domain: "domain-name.com" };

// let uploadedFIles = [];

// Перебор forEach с необязательним параметром this

// const resultUploadFiles = [
//   "domain-name.com/upload/car.png",
//   "domain-name.com/upload/grass.png",
//   "domain-name.com/upload/avatar.png",
//   "domain-name.com/upload/user.png",
//   "domain-name.com/upload/sea.png",
//   "domain-name.com/upload/water.png",
//   "domain-name.com/upload/bird.png",
// ];

// imagesName.forEach(function (image) {
//   const src = `${this.domain}/upload/${image}`;
//   uploadedFIles.push(src);
// }, baseUrl);

// перебор через map

// uploadedFIles = imagesName.map((image) => {
//   return `${baseUrl.domain}/upload/${image}`;
// });

// console.log(uploadedFIles);

// перебор через reduse

// uploadedFIles = imagesName.reduce((acc, element) => {
//   return [...acc, `${baseUrl.domain}/upload/${element}`];
// }, []);

// console.log(uploadedFIles);

// №2
//Напишіть функцію addItemToBasket, яка буде за допомогою методу find перевіряти,
// чи є вже такий єлемент у кошику
// якщо він є то потрібно оновити його в корзині
// якщо немає то потрібно додати новий продукт до кошику

// let total = 0;

// const tShirt = {
//   id: 33,
//   title: "T-Shirt",
//   price: 99,
//   count: 1,
// };

// const jeans = {
//   id: 29,
//   title: "Jeans",
//   price: 199,
//   count: 1,
// };

// let basketItems = [
//   {
//     id: 28,
//     title: "iPhone 14",
//     price: 1599,
//     count: 3,
//   },
//   {
//     id: 29,
//     title: "Jeans",
//     price: 199,
//     count: 2,
//   },
// ];

// console.log(basketItems);

// function addItemToBasket(product) {
//   const currentProduct = basketItems.find(({ id }) => id === product.id);
//   if (currentProduct) {
//     const updatedBasketItems = basketItems.map((item) => {
//       const { id, count } = item;
//       if (id === product.id) {
//         return {
//           ...item,
//           count: count + 1,
//         };
//       } else {
//         return item;
//       }
//     });
//     return updatedBasketItems;
//   } else {
//     return [...basketItems, product];
//   }
// }

// basketItems = addItemToBasket(tShirt);
// basketItems = addItemToBasket(tShirt);
// basketItems = addItemToBasket(tShirt);
// basketItems = addItemToBasket(jeans);
// basketItems = addItemToBasket(jeans);
// basketItems = addItemToBasket(jeans);

// console.log(basketItems);

// total = basketItems.reduce((sum, { price, count }) => {
//   return sum + price * count;
// }, 0);

// console.log(total);

// №3

// Потрібно отримати URL адресу із адресного рядка браузера.
// Далі необхідно параметри запиту записати в об'єкт (query) - ключ, значення (axios)

// const link =
//   "http://www.npmjs.com/?query=axios&version=0.3&module=render&size=32&date=12212183311";

// const url = new URL(link);

// const { search } = url;

// console.log(search);

// const updatedSearch = search.slice(1).split("&");

// console.log(updatedSearch);

// const parameters = updatedSearch.reduce((obj, param) => {
//   const [key, value] = param.split("=");
//   obj[key] = value;
//   console.log(obj);
//   return obj;
// }, {});

// №4

// Напишіть метод який очищає масив від усіх непотрібних єлементів, таких як false,
// undefind, "", 0, null

// const data = [0, 1, false, 2, undefined, "", 3, null];

// Вариант 1

// let newData = [];

// data.forEach((item) => {
//   if (!item) {
//     return;
//   } else {
//     newData.push(item);
//   }
// });

// console.log(newData);

// Вариант 2

// const newData = data.filter((item) => item);

// Вариант 3

// const newData = data.filter(Boolean);

// console.log(newData);

// №5

// Видалення з масиву через filter

// let basketItems = [
//   {
//     id: 28,
//     title: "iPhone 14",
//     price: 1599,
//     count: 3,
//   },
//   {
//     id: 33,
//     title: "T-Shirt",
//     price: 99,
//     count: 1,
//   },

//   {
//     id: 29,
//     title: "Jeans",
//     price: 199,
//     count: 2,
//   },
// ];

// function removeItemFromBasket(idToDelete) {
//   return basketItems.filter(({ id }) => id !== idToDelete);
// }
// console.log(basketItems);

// basketItems = removeItemFromBasket(29);

// console.log(basketItems);

// №6

// Перетворіть масив Об'єктів виборців на підрахунок кількость людей, які
// проголосували

// const voters = [
//   { name: "Bob", age: 30, voted: true },
//   { name: "Jake", age: 32, voted: true },
//   { name: "Kate", age: 25, voted: false },
//   { name: "Sam", age: 20, voted: false },
//   { name: "Phil", age: 21, voted: true },
//   { name: "Ed", age: 55, voted: true },
//   { name: "Tami", age: 54, voted: true },
//   { name: "Mary", age: 31, voted: false },
//   { name: "Becky", age: 43, voted: false },
//   { name: "Joey", age: 41, voted: true },
//   { name: "Jeff", age: 30, voted: true },
//   { name: "Zack", age: 19, voted: false },
// ];

// const totalVoters = voters.filter(({ voted }) => voted).length;

// console.log(voters);
// console.log(totalVoters);

// №7

// Напишіть функцію sortByAge(users),яка приймає масив об'єктів із властивістю age
// та сортує їх за ним.

// let bruce = { name: "Bruce", age: 25 };
// let jhon = { name: "Jhon", age: 30 };
// let maria = { name: "Maria", age: 28 };

// let arr = [bruce, jhon, maria];

// function sortByAge(users) {
//   return [...users].sort((prevUser, nextUser) => prevUser.age - nextUser.age);
// }

// const sortedArr = sortByAge(arr);

// console.log(sortedArr);

// №8

// Розробюники люблять скорочувати все:
// k8s означає Kubernetes, a11y означає accessibility, l10n означає localization.
// Ви отримуєте нумероніми Dev, буручи першу та останню букви
// та підраховуючи кількість літер між ними.
// Слова що містять менше 4 літер, не скорочуются, тому що це булоб просто дивно.
// Змінна input є реченням, і ви повинні скорочувати кожне слово довжиною 4 літери або більше.
// У реченні не буде розділових знаків. g2d l2k e6e

// const input = "Every developer likes to mix kubernetes and javascript";

// function abbreviationWord(string) {
//   return string
//     .split(" ")
//     .map((word) => {
//       if (word.length < 4) {
//         return word;
//       } else {
//         return `${word[0]}${word.length - 2}${word[word.length - 1]}`;
//       }
//     })
//     .join(" ");
// }

// const abbreviatedWords = abbreviationWord(input);

// console.log(abbreviatedWords);
