// mengimpor modul express untuk membuat router
const express = require("express");
// membuat instance router dari express
const router = express.Router();
// mengimpor controller fakultas untuk menangani logika bisnis
const fakultasController = require("../controllers/fakultasController");

// definisi rute untuk fakultas
// mengatur rute GET untuk mendapatkan semua data fakultas
router.get("/", fakultasController.getAllFakultas);
//