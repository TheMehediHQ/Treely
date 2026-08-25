require("dotenv").config();

module.exports = {
  port: process.env.PORT || 5000,
  mongoUri: `mongodb+srv://${process.env.NAME}:${process.env.PASS}@cluster0.onrfrlh.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`,
  dbName: "plantsdb",
};
