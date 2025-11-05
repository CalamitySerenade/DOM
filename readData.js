fetch("https://jsonplaceholder.typicode.com/users")
//Returns a promise
//Can be a success or error
  .then(response => response.json())
  .then (data => console.log(data))
  //The response returned from the promise is an object
  //If succesful, make a JSON format

  fetch("https://jsonplaceholder.typicode.com/posts")
  .then(response => console.log(response.status))

  //Try-catch
  try {
    fetch("https://jsonplaceholder.typicode.com/users")
    .then(response => response.json())
    .then (data => console.log(data));
  } catch (error) {
    console.log(error);
  }

  //Async-await

  async function getData(){
    //Note: await needs to wait for the promise to resolve
    //Note: fetch returns a promise
    //I have to define what is response here
    try{
      const response=await fetch("https://jsonplaceholder.typicode.com/users");
      const data=await response.json();
      console.log(data);
    }
    catch(error){
      console.log(error);
    }
  }

  //Call the function to see the results
  getData();