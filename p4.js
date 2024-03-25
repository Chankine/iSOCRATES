//File System

const fs = require('fs');
// fs.readFile('./Docs/iSOC1.txt', (err, data) => {
//     if (err) {
//         console.log(err);
//     }
//     console.log(data.toString());
// });

// fs.writeFile('./docs/iSOC2.txt', 'Hello, again iSOCRATES', () => {
//     console.log('File Written Successfully')
// })


// if (!fs.existsSync("./assets")) {
//     fs.mkdir('./assets', err => {
//         if (err) {
//             console.log(err);
//         }
//         else {
//             console.log('Folder created');
//         }
//     })
// }
// else {
//     console.log('Folder already exists');
// }

// if (!fs.existsSync("./assets")) {
//     fs.rmdir('./assets', err => {
//         if (err) {
//                     console.log(err);
//                 }
//                 else {
//                     console.log('Folder deleted');
//                 }
//     })
// }
// else {
//     console.log('File is not exists');
// }

if (fs.existsSync('./docs/iSOC2.txt')){
    fs.unlink('./docs/iSOC2.txt', err => {
        if (err) {
            console.log(err);
        }
        else {
            console.log('File deleted');
        }
    });
}

