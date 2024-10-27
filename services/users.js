const { MongoClient } = require('mongodb');

// Configuración de la URI
const uri =
  'mongodb+srv://randriw7:zGZFfFgwposT5BHZ@cluster0.jxtrg.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0';

class UserService {
  constructor() {
    this.client = new MongoClient(uri);
  }

  // Método para conectar a la colección `users`
  async getCollection() {
    await this.client.connect();
    const db = this.client.db('weather_api');
    return db.collection('users');
  }

  // Método para crear un nuevo usuario
  async createUser(username, password) {
    console.log('creando');

    const collection = await this.getCollection();
    const result = await collection.insertOne({ username, password });
    return result;
  }

  // Método para obtener todos los usuarios (sin contraseñas)
  async getUsers() {
    const collection = await this.getCollection();
    const users = await collection
      .find({}, { projection: { password: 0 } })
      .toArray();
    return users;
  }

  async getUserByUsername(username) {
    const collection = await this.getCollection();
    const user = await collection.findOne({ username });
    return user;
  }

  // Cerrar la conexión al cliente
  async close() {
    await this.client.close();
  }
}

module.exports = UserService;
