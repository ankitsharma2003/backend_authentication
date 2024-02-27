const mongoose = require('mongoose');

module.exports = async () => {
    const mongoUri =  "mongodb+srv://sahaanaa76:JUfyGBGXUMYJKdKr@cluster0.asbtd2s.mongodb.net/";

    try {
        const connect = await mongoose.connect(mongoUri);
        console.log(`mongoDB connected : ${connect.connection.host}`);
    } catch (error) {
        console.log(error);
        process.exit(1);
    }
}