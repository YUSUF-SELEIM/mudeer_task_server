import { Handler } from "@netlify/functions";
import app from "../server";

const handler: Handler = async (event, context) => {
	const { path, httpMethod, headers, queryStringParameters, body } = event;

	// Simulate an Express request
	const request = {
		path,
		method: httpMethod,
		headers,
		query: queryStringParameters,
		body: body ? JSON.parse(body) : null,
	};

	// Simulate an Express response
	const response = {
		statusCode: 200,
		headers: {},
		body: "",
		setHeader(key: string, value: string) {
			this.headers[key] = value;
		},
		send(data: string) {
			this.body = data;
		},
		json(data: any) {
			this.body = JSON.stringify(data);
		},
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