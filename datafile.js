fetch("https://jsonplaceholder.typicode.com/users")
  .then(res => res.json())
  .then(users => {
    const container = document.getElementById("output");
    users.forEach(user => {
      container.innerHTML += `<p>${user.name} - ${user.email}</p>`;
    });
  });

  //Task A:
  fetch("https://jsonplaceholder.typicode.com/posts")
  .then(res=>res.json())
  .then(posts=>{
    const container=document.getElementById("outext");
    posts.forEach(post=>{
      container.innerHTML += container.innerHTML += `<p>${post.id} - ${post.title}</p>`
    })
  })

//Task B:
fetch 


//Task C:
fetch("https://jsonplaceholder.typicode.com/users")
.then(res => res.json())
.then(users=>{
  const container=document.getElementById("output");
  users.forEach(user =>{
    container.innerHTML += `<p>${user.name} - ${user.address["city"]}</p>`
  })
})