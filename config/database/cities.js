let cities = [
    
    
    {
        "name": "London",
        "continent": "Europe",
        "photo": "https://i.ibb.co/MpNxDVn/london.webp",
        "population": 9002488,
        "userId": "636d82c86529ebe93bbef91f"
    },
    {
        "name": "Barcelona",
        "continent": "Europe",
        "photo": "https://i.ibb.co/XJGYkzT/barcelona.webp",
        "population": 1636732,
        "userId": "636d82c86529ebe93bbef920"
    },
    {
        "name": "Cape Town",
        "continent": "Sudafrica",
        "photo": "https://i.ibb.co/TtWB4bH/cape-town.webp",
        "population": 7481156,
        "userId": "636d82c86529ebe93bbef922"
    },
    {
        "name": "Cartagena",
        "continent": "America",
        "photo": "https://i.ibb.co/K03pvjk/cartagena.webp",
        "population": 216365,
        "userId": "636d82c86529ebe93bbef91f"
    },
    {
        "name": "Sídney",
        "continent": "Australia",
        "photo": "https://i.ibb.co/tYyHMkD/sidney.webp",
        "population": 5361466,
        "userId": "636d82c86529ebe93bbef920"
    }
]

require('dotenv').config();
require('../database');
const City = require('../../models/City');

cities.forEach(elemento => {
    City.create({
        name: elemento.name,
        continent: elemento.continent,
        photo: elemento.photo,
        population: elemento.population,
        userId: elemento.userId
    })
})