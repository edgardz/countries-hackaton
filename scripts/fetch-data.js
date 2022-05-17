const fs = require('fs');
const path = require('path');
const axios = require('axios');

function downloadImage(code, url, extension) {
  console.log(code, url);
  return axios({ url, responseType: 'stream' }).then(
    (response) =>
      new Promise((resolve, reject) => {
        response.data
          .pipe(fs.createWriteStream(path.join(__dirname, `../public/flags/${extension}/${code}.${extension}`)))
          .on('finish', () => resolve())
          .on('error', (e) => reject(e));
      })
  );
}

function fetchData() {
  return new Promise(async function (resolve, reject) {
    const parsed = [];
    axios
      .get('https://restcountries.com/v3.1/all')
      .then(async ({ data }) => {
        for (const country of data) {
          parsed.push({
            code: country.cca3,
            name: country.name.common || country.cca3,
            nativeNames: country.name.nativeName || {},
            population: country.population || 0,
            continents: country.continents || [],
            capitals: country.capital || [],
            languages: country.languages || {},
            currencies: country.currencies
              ? Object.keys(country.currencies).map((key) => `${country.currencies[key].name} (${key})`)
              : [],
            borders: country.borders || [],
          });
          // await downloadImage(country.cca3, country.flags.svg, 'svg');
          // await downloadImage(country.cca3, country.flags.png, 'png');
        }

        fs.writeFileSync(
          path.join(__dirname, '../public/json/countries.json'),
          JSON.stringify(parsed, null, 2).replace(/\u0085|\u2028|\u2029/g, '\\n')
        );
      })
      .catch((e) => {
        reject(e);
      });
  });
}

fetchData();

exports.fetchData = fetchData;
