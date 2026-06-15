import {MongoClient,ObjectId} from 'mongodb';
const url = 'mongodb://localhost:27017/';
const client = new MongoClient(url);

await client.connect();
const db = client.db("school2");

// const studentCollection = db.collection("students");
const teacherCollection = db.collection("teachers");

 //await studentCollection.drop(); // to delete the entire collection of students

 
 // to delete a single document
await teacherCollection.deleteOne({ name: "Mr. Smith" }); // to delete a single document from the teachers collection
await teacherCollection.deleteOne({ _id: new ObjectId('6a2ff00bd09b86f97c0a69b3') }); // to delete a single document using its _id field from the teachers collection
client.close();