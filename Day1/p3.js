const fs = require('fs');

const data = "I am the data write by p3.js file code";

fs.writeFileSync('data.txt', data);