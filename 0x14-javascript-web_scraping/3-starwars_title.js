#!/usr/bin/node
/* prints the title of a Star Wars movie
 * where the episode number matches a given integer
 */

const request = require('request');
const movieId = process.argv[2];
const url = `https://swapi-api.alx-tools.com/api/films/${movieId}`;

request.get(url, (error, response, body) => {
  if (error) {
    console.error(error);
    return;
  }

  if (response.statusCode !== 200) {
    console.log(`Error: ${response.statusCode}`);
    return;
  }

  const data = JSON.parse(body);
  console.log(data.title);
});
