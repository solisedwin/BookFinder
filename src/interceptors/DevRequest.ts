import axios, { AxiosResponse } from 'axios';
//import { Request, Response } from 'express';
const logger = require('logger');

const devAxios = axios.create({
    //Abort after 10 seconds have
    timeout: 10000,
    headers: {
        'Access-Control-Allow-Origin': 'http://localhost:300'
    }
});

const requestHandler = (request) => {
    const logRequestFormat = {
        'headers': request.headers,
        'method': request.method,
        'body': request.body,
        'url': request.url,
        'parameters': request.params
    }
    logger.info(logRequestFormat)

    return request;
};

const responseHandler = response => {
    const logResponseFormat = {
        'status': response.status,
        'body': response.body
    }
    logger.info(logResponseFormat)
    return response;
};

const errorHandler = error => {
    //logger.error(error)
    return Promise.reject(error);
};

devAxios.interceptors.request.use(
    (request) => requestHandler(request),
    (error) => errorHandler(error)
);

devAxios.interceptors.response.use(
    (response) => responseHandler(response),
    (error) => errorHandler(error)
);


export default devAxios;