fetch("https://jsonplaceholder.typicode.com/users")
  .then(res => res.json())
  .then(users => {
    const container = document.getElementById("output");
    users.forEach(user => {
      container.innerHTML += `<p>${user.name} - ${user.email}</p>`;
    });
  });
