//Streams

const fs = require('fs');
const readStream = fs.createReadStream('./docs/iSOC1.txt', { encoding: 'utf-8' });
const wtiteStream = fs.createWriteStream('./docs/iSOC3.txt');
readStream.on('data', chunk => {
    console.log(chunk);
    wtiteStream.write(chunk);
})