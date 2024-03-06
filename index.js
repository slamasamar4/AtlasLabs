const http = require('http');
const app = require('./app'); // Assuming app.js is in the same directory

app.set('port', process.env.PORT || 3001);

const server = http.createServer(app);

server.listen(process.env.PORT || 3001, () => {
    console.log('listening on port ' + (process.env.PORT || 3001));
    
});

