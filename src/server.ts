import bodyParser from "body-parser";
import express from "express";
import path from "path";
import cors from "cors";
import v1UserService from './api/api-v1/services/userService';
import {initialize} from "express-openapi";
import {getResource} from "./classes/xhr-requests";
import swaggerUi from "swagger-ui-express";
const app = express();
const port = 3000; // default port to listen
const version = 'v1';

var v1ApiDoc = require('./api/api-doc');
app.use(bodyParser.json());
app.use(cors());



initialize({
    app,
    apiDoc: v1ApiDoc,
    dependencies: {
        userService: v1UserService
    },
    paths: path.resolve(__dirname, './api/api-v1/paths'),
    routesGlob: '**/*.{ts,js}',
    routesIndexFileRegExp: /(?:index)?\.[tj]s$/
});

app.use(((err, req, res, next) => {
    console.log(err);
    const status = err.status || 500;
    res.status(status).json(err);
}) as express.ErrorRequestHandler);

app.listen(port, () => {
    getResource({
        url: 'http://localhost:' + port + '/' + version + '/api-docs',
        onError: () => {
        },
        onLoad: (resp: any) => {
            var apidoc = JSON.parse(resp.target.responseText);
            app.use('/' + version + '/ui', swaggerUi.serve, swaggerUi.setup(apidoc));
        }
    })
});


