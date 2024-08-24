import bodyParser from "body-parser";
import cors from "cors";
import express, { type Request, type Response } from "express";
import morgan from "morgan";

const PORT = process.env.PORT;
const app = express();

app.use(bodyParser.urlencoded({ limit: "500kb", extended: true }));
app.use(bodyParser.json({ limit: "200kb" }));
app.use(morgan("dev"));
app.use(cors({ credentials: true, origin: "http://localhost:3000" }));

app.get("/health", (req: Request, res: Response) => {
	res.json({ sucess: "Working 👌" });
});

app.post("/test", (req: Request, res: Response) => {
	const { values } = req.body;

	res.json({ response: values });
});

app.listen(PORT, () => {
	console.log(`Serving running at: http://localhost:${PORT}`);
});
