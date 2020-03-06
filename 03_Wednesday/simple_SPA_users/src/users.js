const getAllUsers = () => {
  fetch('http://localhost:3333/api/users/')
    .then(res => res.json())
    .then(data => populateTable(data));
};

const getUserById = id => {
  fetch(`http://localhost:3333/api/users/${id}`)
    .then(res => handleHttpErrors(res))
    .then(data => populateTable(data))
    .catch(err => {
      if (err.status) {
        err.fullError.then(e => alert(e.msg));
      } else {
        alert('Network error');
      }
    });
};

const populateTable = data => {
  if (Array.isArray(data)) {
    const dataArray = data.map(
      user =>
        `<tr> <th scope="row">${user.id}</th> <td>${user.name}</td> <td>${user.age}</td> <td>${user.gender}</td> <td>${user.email}</td> <td> <button type="button" class="btn btn-primary edit">Edit</button> </td></tr>`
    );
    document.getElementById('users').innerHTML = dataArray.join('');
  } else {
    const data = `<tr> <th scope="row">${user.id}</th> <td>${user.name}</td> <td>${user.age}</td> <td>${user.gender}</td> <td>${user.email}</td></tr>`;
    document.getElementById('users').innerHTML = data;
  }
};

const addUser = user => {
  const url = 'http://localhost:3333/api/users/';
  fetch(url, {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(user)
  })
    .then(res => res.json())
    .then(res => {
      if (!res.ok) {
        throw Error(res.msg);
      }
    })
    .catch(error => alert(error));
};

const handleHttpErrors = res => {
  if (!res.ok) {
    return Promise.reject({ status: res.status, fullError: res.json() });
  }
  return res.json();
};

export const users = {
  getAllUsers: getAllUsers,
  getUserById: getUserById,
  addUser: addUser
};
