import { MongoClient, Db, ServerApiVersion } from "mongodb";
let cachedClient: MongoClient | null = null;
let cachedDB: Db | null = null;
const connectMangoDB = async () => {
  if (cachedClient && cachedDB) {
    return { client: cachedClient, db: cachedDB };
  }
  console.log(process.env.DB_USERNAME);
  const uri = `mongodb+srv://${process.env.DB_USERNAME}:${process.env.DB_PASSWORD}@cluster0.zd8kb.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`;

  // Create a MongoClient with a MongoClientOptions object to set the Stable API version
  const client = new MongoClient(uri, {
    serverApi: {
      version: ServerApiVersion.v1,
      strict: true,
      deprecationErrors: true,
    },
  });

  await client.connect();

  cachedClient = client;
  cachedDB = client.db("audio-shop");

  return { client, db: client.db("audio-shop") };
};

export default connectMangoDB;
