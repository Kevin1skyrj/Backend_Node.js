import {MongoClient} from 'mongodb';
const url = 'mongodb://localhost:27017/';
const client = new MongoClient(url);

await client.connect(); // after connecting to the client we get test named database by default

const db = client.db();   // return the db object

console.log(db.namespace); // print the db object