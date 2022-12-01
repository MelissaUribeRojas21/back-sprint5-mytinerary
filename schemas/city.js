const joi = require('joi');

const schema = joi.object({
    name: joi
        .string()
        .min(3)
        .max(30)
        .required()
        .messages({
            'string.base': `Name must be a type of 'text'`,
            'any.required': 'The name field is required',
            'string.empty': 'The name field is empty',
            'string.min': 'The name field must be at least 3 characters long',
            'string.max': 'The name field must be at most 30 characters long',
        }),
    continent: joi
        .string()
        .required()
        .messages({
            'string.base': `Continent must be a type of 'text'`,
            'any.required': 'The continent field is required',
            'string.empty': 'The continent field is empty',
        }),
    photo: joi
        .string()
        .required()
        .messages({
            'string.base': `Photo must be a type of 'text'`,
            'any.required': 'The photo field is required',
            'string.empty': 'The photo field is empty',
        }),
    population: joi
            .number()
            .required()
            .messages({
                'number.base': `Population must be a type of 'number'`,
                'any.required': 'The population field is required',
                'number.empty': 'The population field is empty',
            }),
    userId: joi
        .string()
        .required()
        .messages({
            'string.base': `User ID must be a type of 'text'`,
            'any.required': 'The user ID field is required',
            'string.empty': 'The user ID field is empty',
        }),
});

module.exports = schema;