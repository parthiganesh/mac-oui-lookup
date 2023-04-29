const request = require('request');
const csvParser = require('csv-parser');
const fs = require('fs');

const urls = [
  'http://standards-oui.ieee.org/oui/oui.csv',
  'http://standards-oui.ieee.org/oui28/mam.csv',
  'http://standards-oui.ieee.org/oui36/oui36.csv'
];
const outputFile = './src/vendor-data.json';

const vendorData = {};
let oui_count = 0;

function processCsvFile(url) {
  return new Promise((resolve, reject) => {

    rejectWithError = (e) => reject(e);
    console.log(`Downloading ${url}`);
    
    request.get(url)
      .on('error', rejectWithError)

      .pipe(csvParser())
      .on('error', rejectWithError)

      .on('data', (data) => {
        const oui = data['Assignment'];
        const vendorName = data['Organization Name'];
        vendorData[oui] = vendorName;
        process.stdout.write(`${oui_count++} \r`);
      })

      .on('end', () => {
        console.log(`Processed ${url}`);
        resolve();
      });
  });
}

Promise.all(urls.map(processCsvFile))
  .then((result) => {
    console.log(`Writing ${oui_count} OUIs`);
    fs.writeFileSync(outputFile, JSON.stringify(vendorData, Object.keys(vendorData).sort(), 2));
    console.log(`${outputFile} created successfully`);
  })
  .catch((err) => {
    console.error('Error:', err);
  });
