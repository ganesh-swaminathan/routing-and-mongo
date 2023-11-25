const { MongoClient, ServerApiVersion } = require('mongodb');
const uri = "mongodb+srv://devops:kulu0206@cluster0.iszc2.mongodb.net/?retryWrites=true&w=majority";
// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
    serverApi: {
      version: ServerApiVersion.v1,
      strict: true,
      deprecationErrors: true,
    }
  });

let dbConnection;
const dbName = "devops";

const connectToMongoDB = async () =>{
    if(dbConnection){
      return dbConnection;
    }

    try {
        await client.connect();
        console.log("Connected to DB")
        const db = client.db(dbName);

        dbConnection = {
          db,
          usercollection: db.collection("users"),
          projectcollection: db.collection("users")
        }

        return dbConnection;
      } catch (err) {
        console.error(err);
    } finally {
        //await client.close();
      }
}


module.exports = connectToMongoDB;