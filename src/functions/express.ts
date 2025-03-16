import { Handler } from "@netlify/functions";
import app from "../server";
import http from "http";
import url from "url";

const handler: Handler = async (event, context) => {
	const { path, httpMethod, headers, queryStringParameters, body } = event;

	// Create a mock request object
	const request = Object.create(http.IncomingMessage.prototype);
	request.url = path;
	request.method = httpMethod;
	request.headers = headers;
	request.query = queryStringParameters || {};
	request.body = body ? JSON.parse(body) : null;

	// Create a mock response object
	const response = Object.create(http.ServerResponse.prototype);
	response.statusCode = 200;
	response.headers = {};
	response.setHeader = (key: string, value: string) => {
		response.headers[key] = value;
	};
	response.send = (data: string) => {
		response.body = data;
	};
	response.json = (data: any) => {
		response.body = JSON.stringify(data);
	};

	// Handle the request with Express
	await app(request, response);

	return {
		statusCode: response.statusCode,
		headers: response.headers,
		body: response.body,
	};
};

export { handler };