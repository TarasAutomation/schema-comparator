const inlineObjectData = require("./data/inline-object");
const inlineArrayData = require("./data/inline-array");
const validateSchema = require('../src/validate');

it.each(inlineObjectData())('Validate object - inline object', data => {
    const { obj, schema } = data;
    validateSchema(obj, schema);
})

it.each(inlineArrayData())('Validate object - inline array', data => {
    const { obj, schema } = data;
    validateSchema(obj, schema);
});

