const joi = require("joi");

const schema = joi.object({
    showId: joi.any(),   
    userId: joi.any(),
    date: joi.date().required(),
    comment: joi.string().required().min(3).messages({
        'string.min': 'Comment must be at least 3 characters long',
    }),
});

module.exports = schema;