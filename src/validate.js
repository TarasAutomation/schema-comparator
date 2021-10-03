const fs = require('fs');

const validateSchema = (obj, schema, options) => {
    if (typeof obj !== 'object' || obj === null){
        throw new Error('Please provide a valid object')
    }
    if (typeof schema === 'string'){
        const json = fs.readFileSync(schema);
        schema = JSON.parse(json);
    }
    const missingProperties = verifyProperties(obj, schema, options);
    if (missingProperties.length)
        throw new Error(`Received object is missing following properties [${missingProperties.map(p => ` ${p} `)}]`);
}

const verifyProperties = (obj, schema, options) => {
    const missingProperties = [];
    for(let property in schema) {
        if(options?.ignoreProperties?.find(p => p === property))
            continue
        if(obj?.[property] instanceof Object) {
            if (obj?.[property] instanceof Array)
                property = obj?.[property][0];
            verifyProperties(obj[property], schema[property])
            continue
        }
        try {
            expect(obj.hasOwnProperty(property)).toBeTruthy();
        } catch (e) {
            missingProperties.push(property);
        }
    }
    return missingProperties;
}

module.exports = validateSchema;