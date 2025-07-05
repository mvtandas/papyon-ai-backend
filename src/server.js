const path = require("path");
require("dotenv").config({ path: path.resolve(__dirname, "../.env") });
const express = require("express");
const cors = require("cors");
const helmet = require("helmet");
const morgan = require("morgan");
const connectDB = require("./config/db");

// Çevre değişkenlerini kontrol et
console.log("MONGO_URI:", process.env.MONGO_URI ? "Tanımlı" : "Tanımlı değil");
console.log("PORT:", process.env.PORT);

// MongoDB'yi bağla
connectDB();

const app = express();

// Middleware'ler
app.use(express.json()); // JSON formatındaki request'leri işleyebilmek için
app.use(cors()); // CORS'u etkinleştir
app.use(helmet()); // Güvenlik için Helmet
app.use(morgan("dev")); // HTTP request logger

// Örnek route
app.get("/", (req, res) => {
    res.send("API Çalışıyor!");
});

// Portu dinle
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => console.log(`Server ${PORT} portunda çalışıyor...`));
