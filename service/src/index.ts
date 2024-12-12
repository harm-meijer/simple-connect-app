import * as dotenv from 'dotenv';
dotenv.config();

import * as http from 'http';

const server = http.createServer((req, res) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    res.end('hello world\n');
});
if(process.env.ENV_TEST_SERVER_SUCCESS!=="yes"){
  throw new Error("ENV_TEST_SERVER_SUCCESS is not yes")
}
const port = 8080;
server.listen(port, () => {
    console.log(`Server running at http://localhost:${port}/`);
});