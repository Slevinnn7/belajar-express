// models/fakultas.js
// mengimpor modul mongoose untuk mengelola skema dan model MongoDB
const mongoose = require("mongoose");

// definisikan skema untuk fakultas
const fakultasSchema = new mongoose.Schema({
    // field untuk nama fakultas
    nama: {
        type: String, // tipe data string
        required: true, // field ini wajib diisi
        trim: true, // menghapus spasi di awal dan akhir string
    },
    // field untuk singkatan fakultas
    singkatan: {
        type: String, // tipe data string
        required: true, // field ini wajib diisi
        trim: true, // menghapus spasi di awal dan akhir string
    },
    // field untuk menyimpan tanggal pembuatan data fakultas
    createdAt: {
        type: Date, // tipe data tanggal 
        default: Date.now, // default adalah tanggal dan waktu saat ini 
    },
});

// buat model fakultas dari skema yang telah didefinisikan 
const Fakultas = mongoose.model("Fakultas", fakultasSchema);

// mengeksport model fakultas agar dapat digunakan di file lain
module.exports = Fakultas;