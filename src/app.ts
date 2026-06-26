import express from "express";
import globalErrorHandler from "./middleware/globalErrorHandler";
import userRouter from "./user/userRouter";
import bookRouter from "./books/bookRouter";

const app = express();
app.use(express.json());

// Routes
app.get("/", (req, res) => {
  res.json({
    message: "Hii",
  });
});

app.use("/api/users", userRouter);
app.use("/api/books", bookRouter);

// Global error handler
app.use(globalErrorHandler);

export default app;
