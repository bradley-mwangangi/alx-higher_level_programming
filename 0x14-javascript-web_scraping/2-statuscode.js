#!/usr/bin/node
/* displays the status code of a GET request */

const request = require('request');
const url = process.argv[2];

request.get(url, (error, response, body) => {
  if (error) console.error(error);
  else console.log(`code: ${response.statusCode}`);
});
