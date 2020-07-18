//File System
const fs = require('fs')
const path = require('path')

// fs.mkdir(path.join(__dirname, 'test'), (error) => {
//     if (error) {
//         throw error('NEW ERROR')
//     }
//         console.log('Directory created.');
// });

const filePath = path.join(__dirname, 'test', 'text.txt')

// fs.writeFile(filePath, 'Hello world!!!', err => {
//     if(err){
//         throw err
//     }
//     console.log('File created');
// });

// fs.appendFile(filePath, '\nHow are you?', err => {
//     if (err) {
//         throw err
//     }
//     console.log('Second file created');
// })

fs.readFile(filePath, 'utf8', (err, content) => {
    if (err) {
        throw err
    }
    console.log('Content:', content)
})