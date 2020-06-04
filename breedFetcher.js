const request = require('request');
const breed = process.argv[2];
// const url = process.argv[2] + breed;
const url = `https://api.thecatapi.com/v1/breeds/search?q=${breed}`;

request(url, (error, response, body) => {
  if (error) {
    console.log('error:', error);
  }
  // console.log('statusCode:', response && response.statusCode);

  const data = JSON.parse(body);
  if (data[0] === undefined) {
    console.log("breed could not be found");
  } else {
    console.log(data[0]["description"]);
  }


});