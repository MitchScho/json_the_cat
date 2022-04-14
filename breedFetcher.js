const request = require("request");

const breed = process.argv[2];
const url = `https://api.thecatapi.com/v1/breeds/search?q=${breed}`;

request(url, (error, response, body) => {
  //In the event that the request fails, the error argument in our callback function would NOT be undefined, and instead contain details.
  
  if (error) {
    console.log("ERROR:", error);
    return;
  }

  const data = JSON.parse(body);
  
  if (!data[0]) {
    //Write code to output an appropriate message if the requested breed is not found
    console.log("ERROR: Breed not found");
    return;
  }
  console.log("description", data[0].description);
  
});