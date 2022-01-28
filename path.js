const path = require('path');
const path1 = path.join(__dirname,'firstProject','app.js');
console.log(path1);
const path2 = path.resolve(__dirname,'firstProject','app.js');
console.log(path2);
console.log(path.sep);