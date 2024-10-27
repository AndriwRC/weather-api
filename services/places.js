const { MongoClient, ObjectId } = require('mongodb');

// Configuración de la URI
const uri =
  'mongodb+srv://randriw7:zGZFfFgwposT5BHZ@cluster0.jxtrg.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0';

class PlaceService {
  constructor() {
    this.client = new MongoClient(uri);
  }

  // Método para conectar a la colección `places`
  async getCollection() {
    await this.client.connect();
    const db = this.client.db('weather_api');
    return db.collection('places');
  }

  // Método para obtener todos los lugares
  async getPlaces() {
    const collection = await this.getCollection();
    const places = await collection.find({}).toArray();
    await this.close();
    return places;
  }

  // Método para obtener un lugar por su ID
  async getPlaceById(id) {
    const collection = await this.getCollection();
    const place = await collection.findOne({
      _id: ObjectId.createFromHexString(id),
    });
    return place;
  }

  // Método para crear un nuevo lugar
  async createPlace(placeData) {
    const collection = await this.getCollection();
    const result = await collection.insertOne(placeData);
    return result;
  }

  // Método para actualizar un lugar por su ID
  async updatePlace(id, updateData) {
    const collection = await this.getCollection();
    const result = await collection.updateOne(
      { _id: ObjectId.createFromHexString(id) },
      { $set: updateData }
    );
    return result;
  }

  // Método para eliminar un lugar por su ID
  async deletePlace(id) {
    const collection = await this.getCollection();
    const result = await collection.deleteOne({
      _id: ObjectId.createFromHexString(id),
    });
    return result;
  }

  // Cerrar la conexión al cliente
  async close() {
    await this.client.close();
  }
}

module.exports = PlaceService;
