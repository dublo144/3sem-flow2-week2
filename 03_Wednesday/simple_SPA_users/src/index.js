import 'bootstrap/dist/css/bootstrap.css';
import { users } from './users';

window.addEventListener('DOMContentLoaded', () => {
  users.getAllUsers();
});

const getAllUsersBtn = document.getElementById('getAllUsersBtn');
getAllUsersBtn.addEventListener('click', () => users.getAllUsers());

const getUserByIdBtn = document.getElementById('getUserByIdBtn');
getUserByIdBtn.addEventListener('click', () => {
  const id = document.getElementById('idInput').value;
  users.getUserById(id);
});

const newUserForm = document.getElementById('newUserForm');
newUserForm.addEventListener('submit', function(e) {
  e.preventDefault();
  const formData = new FormData(this);
  const newUser = Object.fromEntries(formData);
  users.addUser(newUser);
  users.getAllUsers();
});
