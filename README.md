# NodeJS JWT authentication service using firebase-auth as a backend

Generates JWT tokens using firebase-auth as backend


### Running the server

Add the Firebase Web API key in the .env. 

To run the server, follow these simple steps:

```
npm run start
```

To run the server in a docker container
```
docker-compose up -d --build
```

### Login

```bash
curl -H "Content-Type: application/json" \
    localhost:26001/v1/user/login \
    -d '{"username": "_your_email_", "password": "_your_password_"}'
```


