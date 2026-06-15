import {MongoClient,ObjectId} from 'mongodb';
const url = 'mongodb://localhost:27017/';
const client = new MongoClient(url);

await client.connect();
const db = client.db('school2');

// to update a document , collection and database :
const studentCollection = db.collection('students');
// await studentCollection.updateOne({ name: "Rajat" }, { $set: { age: 23 } }); // to update a single document in the students collection
await studentCollection.updateOne({ _id: new ObjectId('6a2ff7fad205e6710edc02f7')},{ $set: { name: "Karan"}})
client.close();
