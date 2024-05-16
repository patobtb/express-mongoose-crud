import joi from "joi"

export const createUser = joi.object({
    first_name: joi.string().required(),
    last_name: joi.string().required(),
    phone: joi.string().required(),
    email: joi.string().email({ 
        minDomainSegments: 2, tlds: { allow: ['com'] } 
    }).required()
});

export const updateUser = joi.object({
    first_name: joi.string().optional(),
    last_name: joi.string().optional(),
    phone: joi.string().optional(),
    email: joi.string().email({ 
        minDomainSegments: 2, tlds: { allow: ['com'] } 
    }).optional()
});

export const validateID = joi.object({
    id: joi.string().alphanum().min(24).max(25).required()
});