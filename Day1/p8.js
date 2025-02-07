const fs = require('fs');

const path = fs.mkdir('MyFolder',{recursive: true},(err)=>{
    console.log(err);
})
