const fs = require('fs');

fs.rmdir('MyFolder',{recursive:true},(err)=>{
    console.log(err);
})