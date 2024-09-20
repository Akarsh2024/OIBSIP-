document.addEventListener('DOMContentLoaded', () => {
    if (localStorage.getItem('loggedInUser')) {
      showSecured();
    } else {
      showLogin();
    }
  });
  
  function register() {
    const username = document.getElementById('registerUsername').value;
    const password = document.getElementById('registerPassword').value;
  
    if (!username || !password) {
      alert('Please enter both username and password.');
      return;
    }
  
    if (localStorage.getItem(username)) {
      alert('Username already exists. Please choose another.');
      return;
    }
  
    localStorage.setItem(username, password);
    alert('Registration successful! You can now log in.');
    showLogin();
  }
  
  function login() {
    const username = document.getElementById('loginUsername').value;
    const password = document.getElementById('loginPassword').value;
  
    if (!username || !password) {
      alert('Please enter both username and password.');
      return;
    }
  
    const storedPassword = localStorage.getItem(username);
  
    if (storedPassword && storedPassword === password) {
      localStorage.setItem('loggedInUser', username);
      alert('Login successful!');
      showSecured();
    } else {
      alert('Invalid username or password.');
    }
  }
  
  function logout() {
    localStorage.removeItem('loggedInUser');
    showLogin();
  }
  
  function showLogin() {
    document.getElementById('formTitle').textContent = 'Login';
    document.getElementById('loginPage').style.display = 'block';
    document.getElementById('registerPage').style.display = 'none';
    document.getElementById('securedPage').style.display = 'none';
  }
  
  function showRegister() {
    document.getElementById('formTitle').textContent = 'Register';
    document.getElementById('loginPage').style.display = 'none';
    document.getElementById('registerPage').style.display = 'block';
    document.getElementById('securedPage').style.display = 'none';
  }
  
  function showSecured() {
    document.getElementById('formTitle').textContent = 'Secured Page';
    document.getElementById('loginPage').style.display = 'none';
    document.getElementById('registerPage').style.display = 'none';
    document.getElementById('securedPage').style.display = 'block';
  }
  