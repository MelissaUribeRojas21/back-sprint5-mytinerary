let shows = [
    {
        "hotelId": "636f2e108dee967d32c2121e",
        "name": "Harry Styles: Love on Tour",
        "description": "The Love on Tour is the second musical tour by British singer Harry Styles, which will promote his second and third studio albums Fine Line and Harry's House. The tour kicked off on September 4, 2021 in Las Vegas, and will tentatively conclude on July 23, 2023 in Reggio Emilia.",
        "photo": "https://entretenimiento.news/img/2022/08/Se-revela-el-setlist-de-Harry-Styles-Love-on-Tour.jpg",
        "price": 150,
        "date": new Date("2022-12-03"),
        "userId": "636d82c86529ebe93bbef921"
    },
    {
        "hotelId": "636f2e108dee967d32c2121e",
        "name": "Artic Mokeys",
        "description": "Arctic Monkeys are an indie-rock band from Sheffield. Arctic Monkeys will be performing 1 event in Buenos Aires on Tuesday 8th November 2022 at the Estadio River Plate",
        "photo": "https://www.rockandpop.cl/wp-content/uploads/2020/10/c8ad5a7c2a1ecd8de4c9f5197d241ede.jpg",
        "price": 100,
        "date": new Date ("2022-11-08"),
        "userId": "636d82c86529ebe93bbef921"
    },
    {
        "hotelId": "636f2e108dee967d32c21220",
        "name": "New Years Eve",
        "description": "Enjoy one of the best views of the most recognizable skyline in the world at the exclusive PHD this New Years Eve. The times square hotspot that is home to many Fashion Week parties will blow you",
        "photo": "https://nycnewyears.wpenginepowered.com/wp-content/uploads/2016/12/PHD-Terrace-Dream-Midtown.jpg",
        "price": 50,
        "date": new Date ("2022-12-31"),
        "userId": "636d82c86529ebe93bbef91f"
    },
    {
        "hotelId": "636f2e108dee967d32c21220",
        "name": "Aperitivo Tuesdays",
        "description": "It is an Argentine pop band led by singers Alejandro Sergi and Juliana Gattas.",
        "photo": "https://i.ibb.co/1G5y6tj/Imagen-de-Whats-App-2022-11-03-a-las-10-18-42.jpg",
        "price": 50,
        "date": new Date ("2022-12-25"),
        "userId": "636d82c86529ebe93bbef91f"
    },
    {
        "hotelId": "636f2e108dee967d32c21223",
        "name": "Kyle Minogue",
        "description": "Buy tickets to see Kylie Minogue live in Dubai. Follow your favorite artists on Songkick and never miss another concert",
        "photo": "https://i.ytimg.com/vi/pnuj1svkH8w/maxresdefault.jpg",
        "price": 120,
        "date": new Date ("2022-12-31"),
        "userId": "636d82c86529ebe93bbef922"
    },
    {
        "hotelId": "636f2e108dee967d32c21223",
        "name": "New Year in Dubai",
        "description": "2 SEATS LEFT! Please call us on 212-1136. New Year in Dubai Dates: 27 December 2022 - 04 January 2023 PRICE: Rs 75,000* per person sharing double room, Rs 73,000, Teenager sharing parents",
        "photo": "https://www.timeoutdubai.com/cloud/timeoutdubai/2021/11/16/Dubai-new-years-fireworks-2021.jpg",
        "price": 200,
        "date": new Date ("2022-12-31"),
        "userId": "636d82c86529ebe93bbef922"
    },
    {
        "hotelId": "636f2e108dee967d32c21224",
        "name": "Backstreet Boys",
        "description": "We're so excited to be back on the road!.",
        "photo": "https://whathappensonthebackstreet.files.wordpress.com/2022/07/fwnyoiuxwaafenk-1.jpg?w=1200",
        "price": 140,
        "date": new Date ("2022-11-06"),
        "userId": "636d82c86529ebe93bbef91f"
    },
    {
        "hotelId": "636f2e108dee967d32c21224",
        "name": "Bryan Adams",
        "description": "Bryan Adams presents his show in London and you can't miss it!!",
        "photo": "https://oscarenfotos.com/wp-content/uploads/2016/04/bryan-adams-concert.jpg",
        "price": 55,
        "date": new Date ("2022-12-14"),
        "userId": "636d82c86529ebe93bbef91f"
    },
    {
        "hotelId": "636f2e108dee967d32c21225",
        "name": "The Cure",
        "description": "It was formed in 1976 but it was in the second half of the eighties when the British band The Cure reached its highest levels of popularity.",
        "photo": "https://media.pitchfork.com/photos/5c6b3cf1702c0f32fb8e9671/2:1/w_2560%2Cc_limit/The-Cure.jpg",
        "price": 100,
        "date": new Date ("2022-11-10"),
        "userId": "636d82c86529ebe93bbef920"
    },
    {
        "hotelId": "636f2e108dee967d32c21225",
        "name": "Bomba Estéreo",
        "description": "Bomba Estéreo has become one of the most relevant Latin American groups at an international level.",
        "photo": "https://i0.wp.com/diandrareviewsitall.com/wp-content/uploads/2019/08/68746565_10156856240194209_5328118071280271360_o.jpg?fit=1688%2C1125&ssl=1",
        "price": 80,
        "date": new Date ("2022-12-03"),
        "userId": "636d82c86529ebe93bbef920"
    },
    {
        "hotelId": "636f2e108dee967d32c21222",
        "name": "Michael Jackson Tribute",
        "description": "New HIStory Tour Concert live in Auckland on the 11th of November 1996. This is the Rare Footage of the Entire Concert from Beginning to End. I hope you enjoy it",
        "photo": "https://i.ytimg.com/vi/ChrLRauOR28/maxresdefault.jpg",
        "price": 200,
        "date": new Date ("2023-01-10"),
        "userId": "636d82c86529ebe93bbef921"
    },
    {
        "hotelId": "636f2e108dee967d32c21222",
        "name": "UFC 280",
        "description": "The most important fight of all the times.",
        "photo": "https://i.ibb.co/R7cc884/gop1z5lvapr91.jpg",
        "price": 100,
        "date": new Date ("2023-01-21"),
        "userId": "636d82c86529ebe93bbef921"
    }
]

require('dotenv').config();
require('../database');
const Show = require('../../models/Show');

shows.forEach(element => {
    Show.create({
        hotelId: element.hotelId,
        name: element.name,
        description: element.description,
        photo: element.photo,
        price: element.price,
        date: element.date,
        userId: element.userId
    })
})