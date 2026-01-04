const BASE_URL = 'http://localhost:8000';

// Signup
function signup() {
    const data = {
        name: document.getElementById('signupName').value,
        email: document.getElementById('signupEmail').value,
        phone: document.getElementById('signupPhone').value,
        bloodgroup: document.getElementById('signupBlood').value
    };

    fetch(`${BASE_URL}/signup`, {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(data)
    })
    .then(res => res.text())
    .then(msg => alert(msg))
    .catch(err => alert(err));
}

// Login
function login() {
    const data = { email: document.getElementById('loginEmail').value };

    fetch(`${BASE_URL}/login`, {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(data)
    })
    .then(res => res.json())
    .then(user => {
        document.getElementById('loginResult').innerText = `Welcome ${user.name}, Blood Group: ${user.bloodgroup}`;
    })
    .catch(err => document.getElementById('loginResult').innerText = 'User not found');
}

// Donate
function donateBlood() {
    const data = {
        name: document.getElementById('donateName').value,
        bloodgroup: document.getElementById('donateBlood').value,
        city: document.getElementById('donateCity').value,
        phone: document.getElementById('donatePhone').value
    };

    fetch(`${BASE_URL}/donate`, {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(data)
    })
    .then(res => res.text())
    .then(msg => alert(msg))
    .catch(err => alert(err));
}

// Load Donors
function loadDonors() {
    fetch(`${BASE_URL}/need`)
    .then(res => res.json())
    .then(donors => {
        const list = document.getElementById('donorList');
        list.innerHTML = '';
        donors.forEach(d => {
            const li = document.createElement('li');
            li.innerText = `${d.name} | ${d.bloodgroup} | ${d.city} | ${d.phone}`;
            list.appendChild(li);
        });
    });
}
