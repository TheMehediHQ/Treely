const express = require("express");
const cors = require("cors");
const { port } = require("./config");
const { errorHandler } = require("./middleware");
const plantsRouter = require("./routes/plants");

const app = express();

app.use(express.json());
app.use(cors());

app.get("/", (req, res) => {
  res.json({ message: "Treely API is running" });
});

app.use("/plants", plantsRouter);
app.use("/plants-update", plantsRouter);

app.use(errorHandler);

if (!process.env.VERCEL) {
  app.listen(port, () => {
    console.log(`🚀 Server running at http://localhost:${port}`);
  });
}

module.exports = app;
