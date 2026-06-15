import { MongoClient } from "mongodb";
const url = "mongodb://localhost:27017/";
const client = new MongoClient(url);

await client.connect();
const db = client.db("school2");

const studentCollection = db.collection("students");
const teacherCollection = db.collection("teachers");

const resulst1 = await studentCollection.insertOne({ name: "Rajat", age: 22, grade: "A" });
const result2 = await teacherCollection.insertMany([
  { name: "Mr. Smith", subject: "Math" },
  { name: "Ms. Johnson", subject: "English" }
]);
console.log(resulst1);
console.log(result2);
// console.log( await db.listCollections().toArray());
client.close();
