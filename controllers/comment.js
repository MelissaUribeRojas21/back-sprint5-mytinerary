const Comment = require('../models/comment');
const User = require('../models/User')
const Show = require('../models/Show')

const controller = {
    create: async (req, res) => {
        let id = req.body.userId;
        let { showId, comment, date, userId } = req.body

        try {
            let user = await User.findOne({ _id: id });
            userId = user._id

            let comments = await (await Comment.create({ showId, comment, userId, date })).populate("userId", {
                photo: 1,
                name: 1,
            });
            res.status(201).json({
                response: comments,
                success: true,
                message: "the comment was successfully created",
            });
        } catch (error) {
            res.status(400).json({
                success: false,
                message: error.message,
            });
        }
    },
    read: async (req, res) => {
        let comments;
        let order = {}

        let query = {};
        if (req.query.showId) {
            query = { showId: req.query.showId };
        }

        try {
            comments = await Comment.find(query).sort({date:'desc'});
            res.json({ success: true, response: comments});
        } catch (error) {
            console.log(error);
            res.status(500).json();
        }
    },
};

module.exports = controller;