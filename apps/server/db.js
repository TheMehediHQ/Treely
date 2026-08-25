const { MongoClient, ServerApiVersion } = require("mongodb");
const { mongoUri, dbName } = require("./config");

let cachedClient = null;
let cachedDb = null;

async function connectDB() {
  if (cachedClient && cachedDb) {
    return { client: cachedClient, db: cachedDb };
  }

  const client = new MongoClient(mongoUri, {
    serverApi: {
      version: ServerApiVersion.v1,
      strict: true,
      deprecationErrors: true,
    },
  });

  await client.connect();
  await client.db("admin").command({ ping: 1 });
  console.log("✅ Connected to MongoDB");

  cachedClient = client;
  cachedDb = client.db(dbName);

  return { client, db: cachedDb };
}

module.exports = { connectDB };
