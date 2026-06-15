import {MongoClient} from 'mongodb';
const url = 'mongodb://localhost:27017/';
const client = new MongoClient(url);

await client.connect();
const db = client.db('Mongo');

console.log( await db.listCollections().toArray());
client.close();
