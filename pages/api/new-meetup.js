import { MongoClient } from 'mongodb';

//Code define will never end up in Client-Side ie Browser
// /api/new-meetup
// POST /api/new-meetup

async function handler(req, res) {
  if (req.method === 'POST') {
    const data = req.body;

    const client = await MongoClient.connect(
      'mongodb+srv://Deb:deb18@cluster0.0rsdb.mongodb.net/TripPlannerNextJs?retryWrites=true&w=majority'
    );
    const db = client.db();

    const meetupsCollection = db.collection('meetups');
//insertOne is a build-in query commands for inserting 1 new document into the collection.
//Document in mongo is just a collection of Obj.
    const result = await meetupsCollection.insertOne(data);

    console.log(result);

    client.close();

    res.status(201).json({ message: 'Meetup inserted!' });
  }
}

export default handler;