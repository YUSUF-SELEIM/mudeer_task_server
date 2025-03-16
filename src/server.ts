import express, { Request, Response } from "express";
import data from "./data";

const app = express();
const PORT = 3000;

// Middleware to allow CORS (for development purposes)
app.use((req, res, next) => {
	res.header("Access-Control-Allow-Origin", "*"); // Allow all origins
	res.header(
		"Access-Control-Allow-Headers",
		"Origin, X-Requested-With, Content-Type, Accept"
	);
	next();
});

// Route to serve the data
app.get("/notifications", (req: Request, res: Response) => {
	res.json(data); // Send the data as JSON
});

// Start the server
app.listen(PORT, () => {
	console.log(`Server is running on http://localhost:${PORT}`);
});