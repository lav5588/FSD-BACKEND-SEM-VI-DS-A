const fs = require('fs');

const data = "I am appended to last"

fs.appendFile('data.txt', data, (err) => {
    if (err){
        console.log('Error appending data:', err);
        return;
    };
    console.log(`${data} appended to the file.`);
});