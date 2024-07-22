// lib/mongodb.ts

import { MongoClient, Db } from 'mongodb';

// Ensure the MongoDB URI is provided
if (!process.env.MONGODB_URI) {
    throw new Error('Please add your Mongo URI to .env.local');
}

const uri = process.env.MONGODB_URI;
const options = {};

let client: MongoClient;
let clientPromise: Promise<MongoClient>;

// Add a global declaration for TypeScript
declare global {
    var _mongoClientPromise: Promise<MongoClient>;
}

if (process.env.NODE_ENV === 'development') {
    // In development mode, use a global variable so the MongoClient is not repeatedly created.
    if (!global._mongoClientPromise) {
        client = new MongoClient(uri, options);
        global._mongoClientPromise = client.connect();
    }
    clientPromise = global._mongoClientPromise;
} else {
    // In production mode, it's best to not use a global variable.
    client = new MongoClient(uri, options);
    clientPromise = client.connect();
}

export async function connectToDatabase(): Promise<Db> {
    const client = await clientPromise;
    return client.db();
}

export default clientPromise;
