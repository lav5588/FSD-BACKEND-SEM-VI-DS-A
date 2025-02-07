const fs = require('fs');

const data = "i am async write data from file p5.js code";

fs.writeFile('data.txt', data, (err) => {
    if (err){
        console.log(err);
        return;
    }
    console.log('data:', data);
})