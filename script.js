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
///////////////////////////////////////////////////
const btn = document.querySelector('.btn-country');
const countriesContainer = document.querySelector('.countries');
///////////////////////////////////////////////////
const getCountryData = function (country) {
  const request = new XMLHttpRequest();
  request.open('GET', `https://restcountries.com/v3.1/name/${country}`);
  request.send();
  console.log(request.responseText);

  request.addEventListener('load', function () {
    const [data] = JSON.parse(this.responseText);
    console.log(data);
    const html = `<article class="country">
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
            <p class="country__row">
            <span>💰</span>${Object.values(data.currencies)[0].name}
            </p>
            </div>
            </article>
            `;
    countriesContainer.insertAdjacentHTML('beforeend', html);
    countriesContainer.style.opacity = 1;
  });
};

getCountryData('portugal');
getCountryData('pakistan');
getCountryData('india');
getCountryData('USA');
getCountryData('germany');
