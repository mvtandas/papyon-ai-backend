const mongoose = require("mongoose");
const uri =
  "mongodb+srv://mustafa:gamelocks34@papyon-ai.z1kk3.mongodb.net/?retryWrites=true&w=majority&appName=papyon-ai";
const clientOptions = {
  serverApi: { version: "1", strict: true, deprecationErrors: true },
};

const connectDB = async () => {
  try {
    await mongoose.connect(uri, clientOptions);
    await mongoose.connection.db.admin().command({ ping: 1 });
    console.log(
      "Pinged your deployment. You successfully connected to MongoDB!"
    );
  } catch (error) {
    console.error(`Error: ${error.message}`);
    process.exit(1);
  }
};

module.exports = connectDB;
