import express, { Request, Response, Express } from "express";
import cors from "cors";
import logger from "morgan";
import "dotenv/config";
import { connectToDB } from "./config/db";
import indexRoutes from "./routes/index";

const app: Express = express();

const PORT: string | undefined = process.env.NODE_PORT;

// connect to database
connectToDB();

app.use(cors({ origin: true, credentials: true }));
app.use(express.json());
app.use(logger("dev"));

app.use("/api", indexRoutes);

app.get("/", (req: Request, res: Response) => {
  res.status(200).send("Hello World");
});

app
  .listen(PORT, () => {
    console.log(`${process.env.NODE_ENV} Server running at PORT: `, PORT);
  })
  .on("error", (error) => {
    throw new Error(error.message);
  });
