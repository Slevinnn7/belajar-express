// mengimpor model fakultas untuk berinteraksi dengan koleksi fakultas di MongoDB
const Fakultas = require("../models/fakultas");

// mendapatkan semua data fakultas
const getAllFakultas = async (req, res) => {
    try {
        // mengambil semua fakultas dari database
        const fakultas = await Fakultas.find();
        // mengirimkan respons dengan status 200 dan data fakultas
        res.status(200).json(fakultas);
    } catch (err) {
        // mengirimkan respons dengan status 500 jika terjadi kesalahan
        res.status(500).json({ massage: err.massage });
    }
};

// mendapatkan satu fakultas berdasarkan ID
const getFakultasById = async (req, res) => {
    try {
        // mencari fakultas tidak ditemukan, kirimkan respons 404
        if(!fakultas)
            return res.status(404).json({ massage: "Fakultas not found" });
        // mengirimkan respons dengan status 200 dan data fakultas
        res.status(200).json(fakultas);
    } catch (err) {
        // mengirimkan respons dengan status 500 jika terjadi kesalahan
        res.status(500).json({ massage: err.massage });
    }
};

// membuat fakultas baru
const createFakultas = async (req, res) => {
    // membuat instance fakultas baru dari data yang diterima
    const fakultas = new Fakultas({
        nama: req.body.nama,
        singkatan: req.body.singkatan,
    });

    try {
        // menyimpan fakultas baru ke database
        const newFakultas = await fakultas.save();
        // mengirimkan respons dengan status 201 dan data fakultas baru
        res.status(201).json(newFakultas);
    } catch (err) {
        // mengirimkan respons dengan status 400 jika ada kesalahan saat menyimpan
        res.status(400).json({ massage: err.massage });
    }
};

// memperbarui data fakultas
const updateFakultas = async (req, res) => {
    try {
        // mencari fakultas berdasarkan ID yang diberikan di parameter
        const fakultas = await Fakultas.findById(req.params.id);
        // jika fakultas tidak ditemukan, kirimkan respons 404
        if (!fakultas)
            return res.status(404).json({ massage: "Fakultas not found" });

        // memperbarui nama fakultas jika ada di request body
        if (req.body.nama != null) {
            fakultas.nama = req.body.nama;
        }

        // memperbarui singkatan fakultas jika ada di request body
        if (req.body.singkatan != null) {
            fakultas.singkatan = req.body.singkatan;
        }

        // menyimpan perubahan ke database
        const updateFakultas = await fakultas.save();
        // mengirimkan respons dengan status 200 dan data fakultas yang diperbarui 
        res.status(200).json(updateFakultas);
    } catch (err) {
        // mengirimkan respons dengan status 400 jika ada kesalahan saat memperbarui
        res.status(400).json({ massage: err.massage });
    }
};

// menghapus fakultas berdasarkan ID
const deleteFakultas = async (req, res) => {
    try {
        // mencari fakultas berdasarkan ID yang diberikan di parameter
        const fakultas = await Fakultas.findById(req.params.id);
        // jika fakultas tidak ditemukan, kirimkan respons 404
        if (!fakultas)
            return res.status(404).json({ massage: "Fakultas not found" });

        // menghapus fakultas dari database
        await fakultas.deleteOne();
        // mengirimkan respons dengan status 200 dan pesan penghapusan
        res.status(200).json({ masssage: "Fakultas deleted" });
    } catch (err) {
        // mengirimkan respons dengan status 500 jika terjadi kesalahan 
        res.status(500).json({ massage: err.massage });
    }
};

// mengeskport fungsi-fungsi kontroler agar dapat digunakan di file lain
module.exports = {
    getAllFakultas,
    createFakultas,
    getFakultasById,
    updateFakultas,
    deleteFakultas,
};