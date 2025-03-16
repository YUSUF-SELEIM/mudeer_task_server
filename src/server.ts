import express, { Request, Response } from "express";
import data from "./data";
const app = express();

app.get("/notifications", (req: Request, res: Response) => {
	res.json(data);
});

export default app;