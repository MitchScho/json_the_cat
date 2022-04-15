const request = require("request");


const fetchBreedDescription = function(breedName, callback) {

  const url = `https://api.thecatapi.com/v1/breeds/search?q=${breedName}`;
  
  request(url, (error, response, body) => {
    //In the event that the request fails, the error argument in our callback function would NOT be undefined, and instead contain details.
    
    if (error) {
      
      return callback(error, null);
    }
    
    const data = JSON.parse(body);

    if (data[0]) {
      //Write code to output an appropriate message if the requested breed is not found
      
      callback(null, data[0].description);
    } else {
      callback("ERROR: Breed does not exist");
    }
    
    
  });
};
module.exports = { fetchBreedDescription };