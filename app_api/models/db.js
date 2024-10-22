// models/db.js
// mengimpor modul mongoose untuk mengelola koneksi dengan  MongoDB
const mongoose = require("mongoose");

// fungsi  asinkron untuk menghubungkan ke database MongoDB
const connectDB = async () => {
    try{
        // menghubungkan ke MongoDB menggunakan url koneksi
        await mongoose.connect(
            "mongodb+srv://vinn:BelajarMongo2024@cluster0.7hcbh.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"
        );
        // jika koneksi  berhasil, log pesan ke konsol
        console.log("MongoDB Connected...");
    } catch (error) {
        // jika terjadi kesalahan saat menghubungkan, log pesan kesalahan ke ponsel
        console.error("MongoDB connection server:", error);
        // keluar dari proses dengan kode status 1 untuk menandakan ada kesalahan 
        process.exit(1);
    }
};


// mengeksport fungsi connectDB agar dapat digunakan di file lain
module.exports = connectDB;