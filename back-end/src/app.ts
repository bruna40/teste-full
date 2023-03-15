import express from "express";
import BookRouter from "./Routes/BookRoute";
import ErrorHandler from "./Middlewares/ErrorHandler";

const app = express();

app.use(express.json());
app.use(BookRouter);
app.use(ErrorHandler.handle);

export default app;