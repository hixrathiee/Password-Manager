import express from 'express';
import 'dotenv/config'
import { MongoClient } from 'mongodb';
import bodyParser from 'body-parser';
import cors from 'cors';
const app = express();
app.use(bodyParser.json());
app.use(cors())
// console.log(process.env.MONGO_URI) 

//Connection URL
const url = "mongodb://localhost:27017";
const client = new MongoClient(url);

//Database Name
const dbName = 'PassOP';

await client.connect();
const db = client.db(dbName);
//get all the passwords
app.get('/', async(req, res) => {
  
    const collection = db.collection('passwords')
    const findResult = await collection.find({}).toArray();
  res.json(findResult)
});
//save password
app.post('/', async(req, res) => {
  const password = req.body
    const collection = db.collection('passwords')
    const findResult = await collection.insertOne(password);
  res.send({success: true, result:findResult})
});
//delete a password by id
app.delete('/', async(req, res) => {
  const password = req.body
    const collection = db.collection('passwords')
    const findResult = await collection.deleteOne(password);
  res.send({success: true, result:findResult})
});
app.listen(3000, () => {
  console.log('Server running on http://localhost:3000');
});
 