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

// -----------------------11
// -------------------------Handling Rejected Promises
const btn = document.querySelector('.btn-country');
const countriesContainer = document.querySelector('.countries');
const renderCountry = function (data, className = '') {
  const html = `<article class="country ${className}" >
     <img class="country__img" src="${data.flags.png}" />
     <div class="country__data">
     <h3 class="country__name">${data.name.common}</h3>
     <h4 class="country__region">${data.region}</h4>
     <p class="country__row">
     <span>👫</span>${(data.population / 1000000).toFixed(1)} M
     </p>
     <p class="country__row">
     <span>🗣️</span>${
       Object.values(data.languages)[1] || Object.values(data.languages)[0]
     }
    </p>
    <p class="country__row"><span>💰</span>${Object.values(data.currencies)[0].name}</p></div>
    </article>
    `;
  countriesContainer.insertAdjacentHTML('beforeend', html);
  countriesContainer.style.opacity = 1;
};

//With Asynch
const getCountryData = function (country) {
  // Country (1)
  fetch(`https://restcountries.com/v3.1/name/${country}`)
    .then(response => response.json())
    .then(data => {
      renderCountry(data[0]);
      console.log(data);
      const neighbour = data[0].borders[0];
      if (!neighbour) return;

      //Country (2)
      return fetch(`https://restcountries.com/v3.1/alpha/${neighbour}`);
    })
    .then(response => response.json())
    .then(data => renderCountry(data[0], 'neighbour'))
    .catch(err => alert(err));
};

btn.addEventListener('click', function () {
  getCountryData('portugal');
});

// getCountryData('germany');
