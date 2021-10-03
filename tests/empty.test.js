const validateSchema = require('../src/validate');

it('Compare Two Empty Objects', () => {
    validateSchema({}, {});
})

it('Compare Empty Object and Empty JSON', () => {
    validateSchema({}, 'schemas/empty.json');
})