fetch("https://jsonplaceholder.typicode.com/users")
//Returns a promise
//Can be a success or error
  .then(response => response.json())
  .then (data => console.log(data))
  //The response returned from the promise is an object
  //If succesful, make a JSON format

  fetch("https://jsonplaceholder.typicode.com/posts")
  .then(response => console.log(response.status))


  //Async function
  try {
    fetch("https://jsonplaceholder.typicode.com/users")
    .then(response => response.json())
    .then (data => console.log(data));
  } catch (error) {
    console.log(error);
  }