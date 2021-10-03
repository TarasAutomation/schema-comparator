const inlineArrayData = () => [
    {
        obj: {
            arr: []
        },
        schema: {
            arr: []
        }
    },
    {
        obj: {
            name: "Simple Name",
            weight: 50,
            human: true,
            arr: []
        },
        schema: {
            name: 'Any name',
            weight: 0,
            human: false,
            arr: []
        }
    },
    {
        obj: {
            something: [1, 2]
        },
        schema: {
            something: [1, 2]
        }
    },
    {
        obj: {
            something: [
                {
                    here: ""
                }
            ]
        },
        schema: {
            something: [
                {
                    here: ""
                }
            ]
        }
    },
    {
        obj: {
            something: [{
                is: [
                    {
                        inside: ""
                    }
                ]
            }]
        },
        schema: {
            something: [{
                is: [
                    {
                        inside: ""
                    }
                ]
            }]
        }
    },
    {
        obj: {
            something: [[{
                first: {},
                second: {}
            }]]
        },
        schema: {
            something: [[{
                first: {},
                second: {}
            }]]
        }
    },
    {
        obj: {
            something: []
        },
        schema: {
            something: [[1, 2, 3], [1, 2 , 3]]
        }
    },

]

module.exports = inlineArrayData;