import express, { Request, Response } from "express";
import data from "./data";
import cors from "cors";

const app = express();
app.use(cors());

app.get("/notifications", (req: Request, res: Response) => {
	res.json(data);
});

export default app;