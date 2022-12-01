let users = [
    {
        "name": "Eric",
        "lastName": "Rodriguez",
        "role": "admin",
        "photo": "https://cdn-icons-png.flaticon.com/512/219/219983.png",
        "age": 29,
        "email": "feric.rodriguez@gmail.com",
        "password": "firstpassword",
        "code": 5,
        "verified": true,
        "logged": true
    },
    {
        "name": "Mauro",
        "lastName": "Harretche",
        "role": "admin",
        "photo": "https://cdn-icons-png.flaticon.com/512/219/219983.png",
        "age": 30,
        "email": "mauritoharretche@gmail.com",
        "password": "secondpassword",
        "code": 6,
        "verified": true,
        "logged": true
    },
    {
        "name": "Andrés",
        "lastName": "Martínez",
        "role": "admin",
        "photo": "https://cdn-icons-png.flaticon.com/512/219/219983.png",
        "age": 24,
        "email": "thepaisita@gmail.com",
        "password": "thirdpassword",
        "code": 7,
        "verified": true,
        "logged": true
    },
    {
        "name": "Rocío",
        "lastName": "Duarte",
        "role": "admin",
        "photo": "https://cdn-icons-png.flaticon.com/512/219/219983.png",
        "age": 25,
        "email": "rochiduarte@gmail.com",
        "password": "fourthpassword",
        "code": 8,
        "verified": true,
        "logged": true
    }
]

require('dotenv').config();
require('../database');
const User = require('../../models/User');

users.forEach(elemento => {
    User.create({
        name: elemento.name,
        lastName: elemento.lastName,
        role: elemento.role,
        photo: elemento.photo,
        age: elemento.age,
        email: elemento.email,
        password: elemento.password,
        code: elemento.code,
        verified: elemento.verified,
        logged: elemento.logged
    })
})