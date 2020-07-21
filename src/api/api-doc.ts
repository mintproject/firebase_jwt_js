module.exports = {
    openapi: '3.0.0',
    info: {
        title: 'Auth API',
        version: '2.0.0'
    },
    servers: [
        {url: 'http://localhost:3000/v1'},
        {url: 'https://auth.mint.isi.edu/v1'}
    ],
    components: {
        schemas: {
            user: {
                description: '',
                type: 'object',
                properties: {
                    username: {
                        description: 'The username of the user',
                        type: 'string'
                    },
                    password: {
                        description: 'The password of the user',
                        type: 'string'
                    },
                },
            },
        },
    },
    paths: {
        "/users/login": {
            "post": {
                "requestBody": {
                    "content": {
                        "application/json": {
                            "schema": {
                                "$ref": "#/components/schemas/user"
                            }
                        }
                    },
                    "required": true
                },
                "responses": {
                    "200": {
                        "content": {
                            "application/json": {
                                "examples": {
                                    "token": {
                                        "value": {
                                            "access_token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJjb20uemFsYW5kby5jb25uZXhpb24iLCJpYXQiOjE1OTUxMTA5MDcsImV4cCI6MTY1NTExMDkwNywic3ViIjoibWludEBpc2kuZWR1In0.pyi1y926E1wPY3bI9YaHXmf7nhmXegugoWd5hRNdIck"
                                        }
                                    }
                                }
                            }
                        },
                        "description": "Returns JWT information"
                    }
                }
            }
        }
    },
};
