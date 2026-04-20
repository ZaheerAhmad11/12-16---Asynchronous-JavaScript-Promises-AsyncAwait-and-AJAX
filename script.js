'use strict';

// NEW COUNTRIES API URL (use instead of the URL shown in videos):
// https://restcountries.com/v2/name/portugal

// NEW REVERSE GEOCODING API URL (use instead of the URL shown in videos):
// https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${lat}&longitude=${lng}

///////////////////////////////////////

// -----------------------01 Section Intro
// -----------------------03 Asynchronous JavaScript, AJAX and APIs

// -----------------------05
// -------------------------Our First AJAX Call XMLHttpRequest
///////////////////////////////////////////////////
// const btn = document.querySelector('.btn-country');
// const countriesContainer = document.querySelector('.countries');
// ///////////////////////////////////////////////////
// const getCountryData = function (country) {
//   const request = new XMLHttpRequest();
//   request.open('GET', `https://restcountries.com/v3.1/name/${country}`);
//   request.send();
//   console.log(request.responseText);

//   request.addEventListener('load', function () {
//     const [data] = JSON.parse(this.responseText);
//     console.log(data);
//     const html = `<article class="country">
//     <img class="country__img" src="${data.flags.png}" />
//     <div class="country__data">
//     <h3 class="country__name">${data.name.common}</h3>
//     <h4 class="country__region">${data.region}</h4>
//     <p class="country__row">
//     <span>👫</span>${(data.population / 1000000).toFixed(1)} M
//     </p>
//     <p class="country__row">
//     <span>🗣️</span>${
//       Object.values(data.languages)[1] || Object.values(data.languages)[0]
//     }
//             </p>
//             <p class="country__row">
//             <span>💰</span>${Object.values(data.currencies)[0].name}
//             </p>
//             </div>
//             </article>
//             `;
//     countriesContainer.insertAdjacentHTML('beforeend', html);
//     countriesContainer.style.opacity = 1;
//   });
// };

// getCountryData('portugal');
// getCountryData('pakistan');
// getCountryData('india');
// getCountryData('USA');
// getCountryData('germany');

// -----------------------06
// -------------------------[OPTIONAL] How the Web Works Requests and Responses
// ///////////////////////////////////////////////////
// const btn = document.querySelector('.btn-country');
// const countriesContainer = document.querySelector('.countries');
// ///////////////////////////////////////////////////
// const getCountryData = function (country) {
//   const request = new XMLHttpRequest();
//   request.open('GET', `https://restcountries.com/v3.1/name/${country}`);
//   request.send();
//   console.log(request.responseText);

//   request.addEventListener('load', function () {
//     const [data] = JSON.parse(this.responseText);
//     console.log(data);
//     const html = `<article class="country">
//     <img class="country__img" src="${data.flags.png}" />
//     <div class="country__data">
//     <h3 class="country__name">${data.name.common}</h3>
//     <h4 class="country__region">${data.region}</h4>
//     <p class="country__row">
//     <span>👫</span>${(data.population / 1000000).toFixed(1)} M
//     </p>
//     <p class="country__row">
//     <span>🗣️</span>${
//       Object.values(data.languages)[1] || Object.values(data.languages)[0]
//     }
//             </p>
//             <p class="country__row">
//             <span>💰</span>${Object.values(data.currencies)[0].name}
//             </p>
//             </div>
//             </article>
//             `;
//     countriesContainer.insertAdjacentHTML('beforeend', html);
//     countriesContainer.style.opacity = 1;
//   });
// };

// getCountryData('portugal');
// // getCountryData('pakistan');
// // getCountryData('india');
// // getCountryData('germany');
// getCountryData('USA');

// -----------------------07
// -------------------------Welcome to Callback Hell
///////////////////////////////////////////////////
// const btn = document.querySelector('.btn-country');
// const countriesContainer = document.querySelector('.countries');
// ///////////////////////////////////////////////////
// const renderCountry = function (data, className  = '') {
//   const html = `<article class="country ${className}" >
//     <img class="country__img" src="${data.flags.png}" />
//     <div class="country__data">
//     <h3 class="country__name">${data.name.common}</h3>
//     <h4 class="country__region">${data.region}</h4>
//     <p class="country__row">
//     <span>👫</span>${(data.population / 1000000).toFixed(1)} M
//     </p>
//     <p class="country__row">
//     <span>🗣️</span>${
//       Object.values(data.languages)[1] || Object.values(data.languages)[0]
//     }
//     </p>
//     <p class="country__row"><span>💰</span>${Object.values(data.currencies)[0].name}</p></div>
//     </article>
//     `;
//   countriesContainer.insertAdjacentHTML('beforeend', html);
//   countriesContainer.style.opacity = 1;
// };

// const getCountryAndNeighbour = function (country) {
//   //Ajax Call Country 1
//   const request = new XMLHttpRequest();
//   request.open('GET', `https://restcountries.com/v3.1/name/${country}`);
//   request.send();

//   request.addEventListener('load', function () {
//     const [data] = JSON.parse(this.responseText);
//     console.log(data);

//     // Render Country 1
//     renderCountry(data);

//     // Get Neighbour Country (2)
//     const [neighbour] = data.borders;
//     if (!neighbour) return;

//     //Ajax Call Country 2
//     const request2 = new XMLHttpRequest();
//     request2.open('GET', `https://restcountries.com/v3.1/alpha/${neighbour}`);
//     request2.send();

//     request2.addEventListener('load', function () {
//       const [data2] = JSON.parse(this.responseText);
//       console.log(data2);

//       renderCountry(data2, 'neighbour')
//     });
//   });
// };

// // getCountryAndNeighbour('portugal');
// getCountryAndNeighbour('Afghanistan');

// -----------------------08 Promises and the Fetch API
// const request = fetch(`https://restcountries.com/v3.1/name/portugal`);
//   console.log(request);
//   //Same Method
//   const getCountryData = function (country) {
//     const request = fetch(`https://restcountries.com/v3.1/name/${country}`);
//     console.log(request);
//   }
//   getCountryData('pak');

// -----------------------09
// -------------------------Consuming Promises
// const countriesContainer = document.querySelector('.countries');
// const renderCountry = function (data, className = '') {
//   const html = `<article class="country ${className}" >
//      <img class="country__img" src="${data.flags.png}" />
//      <div class="country__data">
//      <h3 class="country__name">${data.name.common}</h3>
//      <h4 class="country__region">${data.region}</h4>
//      <p class="country__row">
//      <span>👫</span>${(data.population / 1000000).toFixed(1)} M
//      </p>
//      <p class="country__row">
//      <span>🗣️</span>${
//        Object.values(data.languages)[1] || Object.values(data.languages)[0]
//      }
//     </p>
//     <p class="country__row"><span>💰</span>${Object.values(data.currencies)[0].name}</p></div>
//     </article>
//     `;
//   countriesContainer.insertAdjacentHTML('beforeend', html);
//   countriesContainer.style.opacity = 1;
// };

// //With Asynch
// const getCountryData = function (country) {
//   fetch(`https://restcountries.com/v3.1/name/${country}`)
//     .then(response => response.json())
//     .then(data => renderCountry(data[0]));
// };

// getCountryData('portugal');

// -----------------------10
// -------------------------Chaining Promises
// const countriesContainer = document.querySelector('.countries');
// const renderCountry = function (data, className = '') {
//   const html = `<article class="country ${className}" >
//      <img class="country__img" src="${data.flags.png}" />
//      <div class="country__data">
//      <h3 class="country__name">${data.name.common}</h3>
//      <h4 class="country__region">${data.region}</h4>
//      <p class="country__row">
//      <span>👫</span>${(data.population / 1000000).toFixed(1)} M
//      </p>
//      <p class="country__row">
//      <span>🗣️</span>${
//        Object.values(data.languages)[1] || Object.values(data.languages)[0]
//      }
//     </p>
//     <p class="country__row"><span>💰</span>${Object.values(data.currencies)[0].name}</p></div>
//     </article>
//     `;
//   countriesContainer.insertAdjacentHTML('beforeend', html);
//   countriesContainer.style.opacity = 1;
// };

// //With Asynch
// const getCountryData = function (country) {
//   // Country (1)
//   fetch(`https://restcountries.com/v3.1/name/${country}`)
//     .then(response => response.json())
//     .then(data => {
//       renderCountry(data[0]);
//       console.log(data);
//       const neighbour = data[0].borders[0];
//       if (!neighbour) return;

//       //Country (2)
//       return fetch(`https://restcountries.com/v3.1/alpha/${neighbour}`);
//     })
//     .then(response => response.json())
//     .then(data => renderCountry(data[0], 'neighbour'));
// };

// getCountryData('portugal');
// // getCountryData('germany');

// // -----------------------11
// // -------------------------Handling Rejected Promises
// const btn = document.querySelector('.btn-country');
// const countriesContainer = document.querySelector('.countries');
// const renderError = function (msg) {
//   countriesContainer.insertAdjacentText('beforeend', msg);
//   // countriesContainer.style.opacity = 1;
// };
// const renderCountry = function (data, className = '') {
//   const html = `<article class="country ${className}" >
//      <img class="country__img" src="${data.flags.png}" />
//      <div class="country__data">
//      <h3 class="country__name">${data.name.common}</h3>
//      <h4 class="country__region">${data.region}</h4>
//      <p class="country__row">
//      <span>👫</span>${(data.population / 1000000).toFixed(1)} M
//      </p>
//      <p class="country__row">
//      <span>🗣️</span>${
//        Object.values(data.languages)[1] || Object.values(data.languages)[0]
//      }
//     </p>
//     <p class="country__row"><span>💰</span>${Object.values(data.currencies)[0].name}</p></div>
//     </article>
//     `;
//   countriesContainer.insertAdjacentHTML('beforeend', html);
//   // countriesContainer.style.opacity = 1;
// };

// //With Asynch
// const getCountryData = function (country) {
//   // Country (1)
//   fetch(`https://restcountries.com/v3.1/name/${country}`)
//     .then(response => response.json())
//     .then(data => {
//       renderCountry(data[0]);
//       console.log(data);
//       const neighbour = data[0].borders[0];
//       if (!neighbour) return;

//       //Country (2)
//       return fetch(`https://restcountries.com/v3.1/alpha/${neighbour}`);
//     })
//     .then(response => response.json())
//     .then(data => renderCountry(data[0], 'neighbour'))
//     .catch(err => {
//       console.error(`${err}💥💥`);
//       renderError(`Something Went Wrong💥💥 ${err}. Try Again!`);
//     })
//     .finally(() => {
//       countriesContainer.style.opacity = 1;
//     });
// };

// btn.addEventListener('click', function () {
//   getCountryData('portugal');
// });

// // getCountryData('germany');

// -----------------------12
// -------------------------Throwing Error Manually
// const btn = document.querySelector('.btn-country');
// const countriesContainer = document.querySelector('.countries');

// const renderCountry = function (data, className = '') {
//   const html = `<article class="country ${className}" >
//      <img class="country__img" src="${data.flags.svg}" />
//      <div class="country__data">
//      <h3 class="country__name">${data.name.common}</h3>
//      <h4 class="country__region">${data.region}</h4>
//      <p class="country__row">
//      <span>👫</span>${(data.population / 1000000).toFixed(1)} M
//      </p>
//      <p class="country__row">
//      <span>🗣️</span>${
//        Object.values(data.languages)[1] || Object.values(data.languages)[0]
//      }
//     </p>
//     <p class="country__row"><span>💰</span>${Object.values(data.currencies)[0].name}</p></div>
//     </article>
//     `;
//   countriesContainer.insertAdjacentHTML('beforeend', html);
//   // countriesContainer.style.opacity = 1;
// };
// /////////////////------------Functions
// const renderError = function (msg) {
//   countriesContainer.insertAdjacentText('beforeend', msg);
//   // countriesContainer.style.opacity = 1;
// };

// const getJSON = function (url, errorMsg = 'Country Not Found') {
//   return fetch(url).then(response => {
//     if (!response.ok) throw new Error(`${errorMsg}     ${response.status}`);
//     return response.json();
//   });
// };
// ////////////////----------------------
// //With Asynch
// const getCountryData = function (country) {
//   // Country (1)
//   getJSON(
//     `https://restcountries.com/v3.1/name/${country}`,
//     `Country Not Found `,
//   )
//     .then(data => {
//       renderCountry(data[0]);
//       const neighbour = data[0].borders[0];

//       if (!neighbour) throw new Error(`No Neighbour Found!`);

//       //Country (2)
//       return getJSON(
//         `https://restcountries.com/v3.1/alpha/${neighbour}`,
//         `Country Not Found `,
//       );
//     })
//     .then(data => renderCountry(data[0], 'neighbour'))
//     .catch(err => {
//       console.error(`${err}💥💥`);
//       renderError(`Something Went Wrong💥💥 ${err}. Try Again!`)
//       })
//       .finally(() => {
//         countriesContainer.style.opacity = 1;
//       ;
//     });
// };

// btn.addEventListener('click', function () {
//   getCountryData('AFG');
// });

// -----------------------13
// -------------------------Coding Challnege # 1

// const whereAmI = function (lat, lng) {
//   fetch(`https://geocode.xyz/${lat},${lng}?geoit=json`)
//     .then(res => {
//       if (!res.ok) throw new Error(`Problem with geocoding!${res.status}`);
//       return res.json();
//     })
//     .then(data => {
//       console.log(data);
//       console.log(`You Are in ${data.city}, ${data.country}`);
//     })
//     .catch(err => console.error(`${err.message}💥`));
// };
// whereAmI(52.508, 13.381);
// whereAmI(30.2950737, 71.9401338);

///////////////////---------14 Asynchronous Behind the Scenes The Event Loop

// -----------------------15
// -------------------------The Event Loop in Practice
// console.log('Test Start');
// setTimeout(() => console.log('0 Sec Timer'), 0);
// Promise.resolve('Resolve Promise 1').then(res => console.log(res));
// Promise.resolve('Resolve Promise 2').then(res => console.log(res));
// console.log('Test End');

// -----------------------16
// -------------------------Building a Simple Promise

// const lotteryPromise = new Promise(function (resolve, reject) {
//   console.log('Lotter Draw is Happening🔁...')
//   setTimeout(() => {
//     if (Math.random() >= 0.5) {
//       resolve('You Win 🤑💰');
//     } else {
//       reject(new Error('You Lost Your Money 💩💩'));
//     }
//   }, 2000);
// });

// lotteryPromise.then(res => console.log(res)).catch(err => console.error(err));

// const wiat = function (seconds) {
//   return new Promise(function (resolve) {
//     setTimeout(resolve, seconds * 1000);
//   });
// };
// wiat(1).then(() => {
//   console.log(`1 seconds Passed`);
//   wiat(2).then(() => {
//     console.log(`2 seconds Passed`);
//   });
//   wiat(3).then(() => {
//     console.log(`3 seconds Passed`);
//   });
//   wiat(4).then(() => {
//     console.log(`4 seconds Passed`);
//   });
//   wiat(5).then(() => {
//     console.log(`5 seconds Passed`);
//   });
// });

// Promise.resolve('ABC').then(x => console.log(x));
// Promise.reject(new Error('Problem!')).catch(x => console.error(x));

// -----------------------17
// -------------------------Promisifying the Geolocation API
// const btn = document.querySelector('.btn-country');
// const getPosition = function () {
//   return new Promise(function (resolve, reject) {
//     navigator.geolocation.getCurrentPosition(resolve, reject);
//   });
// };

// const countriesContainer = document.querySelector('.countries');
// const renderCountry = function (data, className = '') {
//   const html = `<article class="country ${className}" >
//      <img class="country__img" src="${data.flags.png}" />
//      <div class="country__data">
//      <h3 class="country__name">${data.name.common}</h3>
//      <h4 class="country__region">${data.region}</h4>
//      <p class="country__row">
//      <span>👫</span>${(data.population / 1000000).toFixed(1)} M
//      </p>
//      <p class="country__row">
//      <span>🗣️</span>${
//        Object.values(data.languages)[1] || Object.values(data.languages)[0]
//      }
//     </p>
//     <p class="country__row"><span>💰</span>${Object.values(data.currencies)[0].name}</p></div>
//     </article>
//     `;
//   countriesContainer.insertAdjacentHTML('beforeend', html);
//   countriesContainer.style.opacity = 1;
// };

// //With Asynch
// const getCountryData = function (country) {
//   fetch(`https://restcountries.com/v3.1/name/${country}`)
//     .then(response => response.json())
//     .then(data => renderCountry(data[0]));
// };

// const whereAmI = function () {
//   getPosition()
//     .then(pos => {
//       const { latitude: lat, longitude: lng } =
//       pos.coords;
//       return fetch(`https://nominatim.openstreetmap.org/reverse?lat=${lat}&lon=${lng}&format=json`);
//     })
//     .then(res => {
//       if (!res.ok) throw new Error(`Problem with geocoding! ${res.status}`);
//       return res.json();
//     })
//     .then(data => {
//       console.log(data);
//       console.log(`You Are in ${data.address.village}, ${data.address.country}`);
//       getCountryData(`${data.address.country}`);
//     })
//     .catch(err => console.error(`${err.message} 💥`));
// };

// btn.addEventListener('click', whereAmI);

// -----------------------18 Coding Challenge # 2
// const wait = function (seconds) {
//   return new Promise(function (resolve) {
//     setTimeout(resolve, seconds * 1000);
//   });
// };

// const imgContainer = document.querySelector('.images');

// const createImage = function (imgPath) {
//   return new Promise(function (resolve, reject) {
//     const img = document.createElement('img');
//     img.src = imgPath;

//     img.addEventListener('load', function () {
//       imgContainer.append(img);
//       resolve(img);
//     });

//     img.addEventListener('error', function () {
//       reject(new Error('Image not found'));
//     });
//   });
// };

// let currentImg;

// createImage('img/img-1.jpg')
//   .then(img => {
//     currentImg = img;
//     console.log('Image 1 loaded');
//     return wait(2);
//   })
//   .then(() => {
//     currentImg.style.display = 'none';
//     return createImage('img/img-2.jpg');
//   })
//   .then(img => {
//     currentImg = img;
//     console.log('Image 2 loaded');
//     return wait(2);
//   })
//   .then(() => {
//     currentImg.style.display = 'none';
//   })
//   .catch(err => console.error(err));

// -----------------------19
// -------------------------Consuming Promises with AsyncAwait
// const btn = document.querySelector('.btn-country');
// const countriesContainer = document.querySelector('.countries');

// const renderCountry = function (data, className = '') {
//   const html = `<article class="country ${className}" >
//      <img class="country__img" src="${data.flags.png}" />
//      <div class="country__data">
//      <h3 class="country__name">${data.name.common}</h3>
//      <h4 class="country__region">${data.region}</h4>
//      <p class="country__row">
//      <span>👫</span>${(data.population / 1000000).toFixed(1)} M
//      </p>
//      <p class="country__row">
//      <span>🗣️</span>${
//        Object.values(data.languages)[1] || Object.values(data.languages)[0]
//      }
//     </p>
//     <p class="country__row"><span>💰</span>${Object.values(data.currencies)[0].name}</p></div>
//     </article>
//     `;
//   countriesContainer.insertAdjacentHTML('beforeend', html);
//   countriesContainer.style.opacity = 1;
// };

// const getPosition = function () {
//   return new Promise(function (resolve, reject) {
//     navigator.geolocation.getCurrentPosition(resolve, reject);
//   });
// };

// const whereAmI = async function (country) {
//   // Geo Location
//   const pos = await getPosition();
//   const { latitude: lat, longitude: lng } = pos.coords;
//   // Reverse Coding
//   const resGeo =  await fetch(
//     `https://nominatim.openstreetmap.org/reverse?lat=${lat}&lon=${lng}&format=json`,
//   )
//   const dataGeo = await resGeo.json()

//   const res = await fetch(`https://restcountries.com/v3.1/name/${dataGeo.address.country}`);
//   const data = await res.json();
//   console.log(data[0]);
//   renderCountry(data[0]);
// };

//  whereAmI();
//  console.log(`Second`)

// -----------------------20
// -------------------------Error Handling With try...catch
// const btn = document.querySelector('.btn-country');
// const countriesContainer = document.querySelector('.countries');

// const renderError = function (msg) {
//   countriesContainer.insertAdjacentText('beforeend', msg);
//   countriesContainer.style.opacity = 1;
// };

// const renderCountry = function (data, className = '') {
//   const html = `<article class="country ${className}" >
//      <img class="country__img" src="${data.flags.png}" />
//      <div class="country__data">
//      <h3 class="country__name">${data.name.common}</h3>
//      <h4 class="country__region">${data.region}</h4>
//      <p class="country__row">
//      <span>👫</span>${(data.population / 1000000).toFixed(1)} M
//      </p>
//      <p class="country__row">
//      <span>🗣️</span>${
//        Object.values(data.languages)[1] || Object.values(data.languages)[0]
//      }
//     </p>
//     <p class="country__row"><span>💰</span>${Object.values(data.currencies)[0].name}</p></div>
//     </article>
//     `;
//   countriesContainer.insertAdjacentHTML('beforeend', html);
//   countriesContainer.style.opacity = 1;
// };

// const getPosition = function () {
//   return new Promise(function (resolve, reject) {
//     navigator.geolocation.getCurrentPosition(resolve, reject);
//   });
// };

// const whereAmI = async function (country) {
//   try {
//     // Geo Location
//     const pos = await getPosition();
//     const { latitude: lat, longitude: lng } = pos.coords;
//     // Reverse Coding
//     const resGeo = await fetch(
//       `https://nominatim.openstreetmap.org/reverse?lat=${lat}&lon=${lng}&format=json`,
//     )
//     if (!resGeo.ok) throw new Error(`Problem getting Location Data..`)
//     const dataGeo = await resGeo.json();

//     const res = await fetch(
//       `https://restcountries.com/v3.1/name/${dataGeo.address.country}`,
//     );
//      if (!res.ok) throw new Error(`Problem getting Location Country..`)
//     const data = await res.json();
//     console.log(data[0]);
//     renderCountry(data[0]);
//   } catch (err) {
//     console.error(`${err}💥`);
//     renderError(`Something went to wrong💥${err.message} `);
//   }
// };

// whereAmI();
// console.log(`Second`);

// -----------------------21
// -------------------------Returning Values from Async Functions
// const btn = document.querySelector('.btn-country');
// const countriesContainer = document.querySelector('.countries');

// const renderError = function (msg) {
//   countriesContainer.insertAdjacentText('beforeend', msg);
//   countriesContainer.style.opacity = 1;
// };

// const renderCountry = function (data, className = '') {
//   const html = `<article class="country ${className}" >
//      <img class="country__img" src="${data.flags.png}" />
//      <div class="country__data">
//      <h3 class="country__name">${data.name.common}</h3>
//      <h4 class="country__region">${data.region}</h4>
//      <p class="country__row">
//      <span>👫</span>${(data.population / 1000000).toFixed(1)} M
//      </p>
//      <p class="country__row">
//      <span>🗣️</span>${
//        Object.values(data.languages)[1] || Object.values(data.languages)[0]
//      }
//     </p>
//     <p class="country__row"><span>💰</span>${Object.values(data.currencies)[0].name}</p></div>
//     </article>
//     `;
//   countriesContainer.insertAdjacentHTML('beforeend', html);
//   countriesContainer.style.opacity = 1;
// };

// const getPosition = function () {
//   return new Promise(function (resolve, reject) {
//     navigator.geolocation.getCurrentPosition(resolve, reject);
//   });
// };

// const whereAmI = async function (country) {
//   try {
//     // Geo Location
//     const pos = await getPosition();
//     const { latitude: lat, longitude: lng } = pos.coords;
//     // Reverse Coding
//     const resGeo = await fetch(
//       `https://nominatim.openstreetmap.org/reverse?lat=${lat}&lon=${lng}&format=json`,
//     );
//     if (!resGeo.ok) throw new Error(`Problem getting Location Data..`);
//     const dataGeo = await resGeo.json();

//     const res = await fetch(
//       `https://restcountries.com/v3.1/name/${dataGeo.address.country}`,
//     );
//     if (!res.ok) throw new Error(`Problem getting Location Country..`);
//     const data = await res.json();
//     renderCountry(data[0]);
//     return `You are in ${dataGeo.address.village},${dataGeo.address.country}`;
//   } catch (err) {
//     console.error(`${err}💥`);
//     renderError(`Something went to wrong💥${err.message}
//     `);
//     throw err;
//   }
// };

// const city = whereAmI();
// console.log(city);
// console.log(`1: Will get Location`);
// whereAmI()
//   .then(city => console.log(`2: ${city}`))
//   .catch(err => console.error(`2: ${err.message}`))
//   .finally(() => {
//     console.log(`3: Finish getting Location`);
//   });
// console.log(`Second`);

// (async function () {
//   try{
//    const city = await whereAmI()
//   console.log(`2: ${city}`)
//   }
//   catch(err) { console.error(`2: ${err.message}`)}
//   console.log(`3: Finish getting Location`);
// })();

// -----------------------22
// -------------------------Running Promises in Parallel

// const getJSON = function (url, errorMsg = 'Country Not Found') {
//   return fetch(url).then(response => {
//     if (!response.ok) throw new Error(`${errorMsg}     ${response.status}`);
//     return response.json();
//   });
// };

// const get3Countries = async function (c1, c2, c3) {
//   try {
//     const data = await Promise.all([
//       getJSON(`https://restcountries.com/v3.1/name/${c1}`),
//       getJSON(`https://restcountries.com/v3.1/name/${c2}`),
//       getJSON(`https://restcountries.com/v3.1/name/${c3}`),
//     ]);
//     console.log(data.map( d => d[0].capital[0]));
//   } catch (err) {
//     console.error(err);
//   }
// };
// get3Countries('portugal', 'canada', 'tanzania')

// -----------------------23
// -------------------------Other Promise Combinators race, allSettled and any
// const getJSON = function (url, errorMsg = 'Country Not Found') {
//   return fetch(url).then(response => {
//     if (!response.ok) throw new Error(`${errorMsg}     ${response.status}`);
//     return response.json();
//   });
// };
///////////////Promise.race()
// (async function () {
//   const res = await Promise.race([
//     getJSON(`https://restcountries.com/v3.1/name/pakistan`),
//     getJSON(`https://restcountries.com/v3.1/name/italy`),
//     getJSON(`https://restcountries.com/v3.1/name/india`),
//   ]);
//   console.log(res[0]);
// })();

// const timeout = function (sec) {
//   return new Promise(function (_, reject) {
//     setTimeout(function () {
//       reject(new Error(`Requst Took To Long...`));
//     }, sec * 1000);
//   });
// };

// Promise.race([getJSON(`https://restcountries.com/v3.1/name/italy`), timeout(3)])
//   .then(res => console.log(res[0]))
//   .catch(err => console.error(err));

///////////////Promise.allSettled()
// Promise.allSettled([
//   Promise.resolve(`Success`),
//   Promise.reject(`Error`),
//   Promise.resolve(`Another Success`),
// ])
//   .then(res => console.log(res[0]))
//   .catch(err => console.error(err));

// Promise.all([
//   Promise.resolve(`Success`),
//   Promise.reject(`Error`),
//   Promise.resolve(`Another Success`),
// ])
//   .then(res => console.log(res[0]))
//   .catch(err => console.error(err));

///////////////Promise.any()
// Promise.any([
//   Promise.resolve(`Success`),
//   Promise.reject(`Error`),
//   Promise.resolve(`Another Success`),
// ])
//   .then(res => console.log(res))
//   .catch(err => console.error(err));

// -----------------------24
// -------------------------Coding Challenge # 3
// const imgContainer = document.querySelector('.images');
// const createImage = function (imgPath) {
//   return new Promise(function (resolve, reject) {
//     const img = document.createElement('img');
//     img.src = imgPath;

//     img.addEventListener('load', function () {
//       imgContainer.append(img);
//       resolve(img);
//     });

//     img.addEventListener('error', function () {
//       reject(new Error('Image not found'));
//     });
//   });
// };

// const wait = function (seconds) {
//   return new Promise(function (resolve) {
//     setTimeout(resolve, seconds * 1000);
//   });
// };

// /////////////////////////
// const loadNPuase = async function () {
//   try {
//     let img = await createImage('img/img-1.jpg');
//     console.log('image 1 Loaded');
//     wait(2);
//     img.style.display = 'none';

//      img = await createImage('img/img-2.jpg');
//     console.log('image 2 Loaded');
//     wait(2);
//     img.style.display = 'none';

//   } catch (err) {
//     console.error(err);
//   }
// };
// loadNPuase()