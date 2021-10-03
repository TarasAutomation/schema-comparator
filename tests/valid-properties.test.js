const validateSchema = require('../src/validate');


it('Validate simple object', () => {
    const obj = {
        name: "Simple Name"
    };
    const schema = {
        name: 'Any name'
    }
    validateSchema(obj, schema);
})

it('Validate object - no inline', () => {
    const obj = {
        name: "Simple Name",
        weight: 50,
        human: true
    };
    const schema = {
        name: 'Any name',
        weight: 0,
        human: false
    }
    validateSchema(obj, schema);
})