const mongoose = require('mongoose');

function configureMongoose(){
    /* MongoDB Connection */
    mongoose.connect(process.env.MONGO, { useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: true });
    mongoose.set('useCreateIndex', true);

    /* Mongoose Logging */
    let db = mongoose.connection;
    db.on('error', (error) => console.log(`Connection Failed: ${error}`));
    db.once('open', () => console.log('Connected to MongoDB with no errors.'));
}

module.exports = configureMongoose;

