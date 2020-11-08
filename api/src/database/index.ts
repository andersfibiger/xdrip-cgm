import mongoose from 'mongoose';

export const initDatabase = () => {
  mongoose.connect(process.env.DB_CONNECTION!, { useNewUrlParser: true, useUnifiedTopology: true });

  const db = mongoose.connection;
  db.once('open', () => console.log('Database connected!'));
  db.on('error', () => console.error.bind(console, 'could not connect to database'));
}
