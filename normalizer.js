const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question('What do you think of Node.js? ', answer => {
  // TODO: Log the answer in a database
  console.log(`Thank you for your valuable feedback: ${answer}`);

  rl.close();
});

/* const csv = require('csv-parser');
const fs = require('fs');

fs.createReadStream('sample.csv')
  .pipe(csv())
  .on('data', row => {
    console.log(row);
  })
  .on('end', () => {
    console.log('CSV file successfully processed');
  });

const createCsvWriter = require('csv-writer').createObjectCsvWriter;

const csvWriter = createCsvWriter({
  path: 'output.csv',
  header: [
    { id: 'timestamp', title: 'Timestamp' },
    { id: 'address', title: 'Address' },
    { id: 'ZIP', title: 'ZIP' },
    { id: 'fullname', title: 'FullName' },
    { id: 'fooduration', title: 'FooDuration' },
    { id: 'barduration', title: 'BarDuration' },
    { id: 'totalduration', title: 'TotalDuration' },
    { id: 'notes', title: 'Notes' },
  ],
});

csvWriter
  .writeRecords('sample.csv')
  .then(() => console.log('The CSV file was written successfully'));
 */
