/* Adapted from the StackAbuse article for parsing proof of concept */

const csv = require('csv-parser');
const fs = require('fs');

fs.createReadStream('sample.csv')
  .pipe(csv())
  .on('data', row => {
    console.log(row);
  })
  .on('end', () => {
    console.log('CSV file successfully processed');
  });
