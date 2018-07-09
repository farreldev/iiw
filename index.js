const express = require('express');

let app = express();

app.use(express.static('dist'));

app.listen(3000, function () {
   console.log('====================================');
   console.log('Express server is run on port 3000');
   console.log('====================================');
})