const inlineObjectData = () => [
    {
        obj: {
            something: {}
        },
        schema: {
            something: {}
        }
    },
    {
        obj: {
            name: "Simple Name",
            weight: 50,
            human: true,
            something: {}
        },
        schema: {
            name: 'Any name',
            weight: 0,
            human: false,
            something: {}
        }
    },
    {
        obj: {
            name: "hey",
            something: {}
        },
        schema: {
            something: {}
        }
    },
    {
        obj: {
            something: {
                here: ""
            }
        },
        schema: {
            something: {
                here: ""
            }
        }
    },
    {
        obj: {
            something: {
                inlined: {
                    inside: ""
                }
            }
        },
        schema: {
            something: {
                inlined: {
                    inside: ""
                }
            }
        }
    },
    {
        obj: {
            something: {
                inlined: {
                    inside: ""
                },
                andHere: ""
            },
            here: ""
        },
        schema: {
            something: {
                andHere: "",
                inlined: {
                    inside: ""
                }
            },
            here: ""
        }
    },
    {
        obj: {
            something: {
                first: {},
                second: {}
            }
        },
        schema: {
            something: {
                first: {},
                second: {}
            }
        }
    },
]

module.exports = inlineObjectData;