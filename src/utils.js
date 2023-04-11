const csv = require('csv-parser');
const path = require('path');
const fs = require('fs');

const vendorData = {};
const dataDir = 'data';
const csvFiles = ["oui24.csv", "oui28.csv", "oui36.csv"];

csvFiles.forEach((filename) => {

  file=path.join(dataDir, filename)
  console.log(file)
  fs.createReadStream(file)
    .pipe(csv())
    .on('data', (data) => {
      vendorData[data.Assignment] = data['Organization Name']
    })
    .on('end', () => {
      try {
        fs.writeFileSync('vendor-data.json', JSON.stringify(vendorData));
      }
      catch (e) {
        console.log(e)
      }
    });
});
