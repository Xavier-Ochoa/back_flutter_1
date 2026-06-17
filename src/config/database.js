const { MongoClient } = require('mongodb');

const uri = process.env.MONGODB_URI || 'mongodb+srv://admin:aplicacionesweb123@mybase1.6npokqg.mongodb.net/flutter_1?appName=MyBase1';
const dbName = process.env.DB_NAME || 'flutter_1';
const collectionName = process.env.COLLECTION_NAME || 'items_coleccion';

let client = null;
let db = null;

async function connectDB() {
  if (db) return db;

  try {
    client = new MongoClient(uri, {
      serverSelectionTimeoutMS: 10000,
      connectTimeoutMS: 10000,
    });

    await client.connect();
    db = client.db(dbName);
    console.log('✅ Conectado a MongoDB Atlas:', dbName);
    return db;
  } catch (error) {
    console.error('❌ Error conectando a MongoDB:', error.message);
    throw error;
  }
}

function getCollection() {
  if (!db) throw new Error('Base de datos no conectada');
  return db.collection(collectionName);
}

module.exports = { connectDB, getCollection, collectionName };
