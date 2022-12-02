let comments = [
    {
        "showId": "63728141a8032917dee94c12",
        "userId": "63896da57c43df3106a39b5b",
        "date": "2022-09-11",
        "comment": "Im interested on this show. Where can i get more info about it, please?"
    },
    {
        "showId": "63728141a8032917dee94c15",
        "userId": "636d82c86529ebe93bbef91f",
        "date": "2022-10-21",
        "comment": "It's amazing, i would like to go to this show"
    },
    {
        "showId": "63728141a8032917dee94c16",
        "userId": "636d82c86529ebe93bbef922",
        "date": "2023-06-15",
        "comment": "It's amazing, i would like to go to this show"
    },
    {
        "showId": "63728141a8032917dee94c17",
        "userId": "636d82c86529ebe93bbef922",
        "date": "2021-12-21",
        "comment": "wow, i think it's too expensive. I dont like these prices"
    },
]

require('dotenv').config();
require('../database');
const Comment = require('../../models/Comment');

comments.forEach(element => {
    Comment.create({
        showId: element.showId,
        userId: element.userId,
        date: element.date,
        comment: element.comment
    })
})

