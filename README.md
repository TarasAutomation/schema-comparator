





 





# Schema Comparator
## Validate your response against the json object structure
Use this package if you need to validate the response in your API tests.

- Verify against a JavaScript Object
- Verify by providing path to JSON schema in your project


## Installation

Written using Node.js v14.17.0

Install the package 

```sh
npm i schema-comparator
```

## Usage
Use with require
```javascript
const validate = require('schema-comparator');
```
Use with import
```javascript
import { validateSchema } from 'schema-comparator';
```

#### Params
`obj`: Object to be validated. For the API testing pass the response body here.
`schema`: Object or path to JSON schema. If path is passed as this argument, JSON file will be parsed by this path.
`options`:  (Optional)  Additional rules for the validation.
       `ignore`: Array of property names that will be ignored during validation.

### Examples
Schema file
```javascript
// data/example.json
export const schema = {
    name: '',
    flag: true
}
```
Test
```javascript
// tests/basic.test.js
it('Basic test', () => {
    const testObj = {
        name: 'Test Name',
        flag: true
    }
    validateSchema(testObj, schema);
})
```

This function was tested with Jest framework with the async API calls, and with basic objects validation. It's expected to be working with any testing framework.

## License

MIT

**Let me know in case of any issues!**
