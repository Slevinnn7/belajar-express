const express = require("express") // impor modul express
const app = express() // inisialisasi express
const expressLayout = require('express-ejs-layouts0');
const port = 3000 // port

// Middleware
app.use(express.static('public'));
app.use(expressLayouts);

// gunakan ejs
app.set("view engine", "ejs");

// route /
app.get("/", (req, res) => {
    const news = [
        {id: 1, title: "Berita 1", content: "Content berita 1"},
        {id: 2, title: "Berita 2", content: "Content berita 2"},
        {id: 3, title: "Berita 3", content: "Content berita 3"},
    ];
    //res.send("Hello World");
    //res.sendFile(__dirname + "/home.html");
    res.render("index", {title: "Halaman Home", news});
});

// route /about
app.get("/about", (req, res) => {
    //res.send("About Us");
    res.sendFile(__dirname + "/about.html");
});

// Data program studi
const prodi = [
    { nama: 'Sistem Informasi', singkatan: 'SI', fakultas: 'Fakultas Ilmu Komputer dan Rekayasa' },
    { nama: 'Informatika', singkatan: 'IF', fakultas: 'Fakultas Ilmu Komputer dan Rekayasa' },
    { nama: 'Manajemen Informatika', singkatan: 'MI', fakultas: 'Fakultas Ilmu Komputer dan Rekayasa' },
    { nama: 'Teknik Elektro', singkatan: 'TE', fakultas: 'Fakultas Ilmu Komputer dan Rekayasa' },
    { nama: 'Akuntansi', singkatan: 'AK', fakultas: 'Fakultas Ekonomi dan Bisnis' },
    { nama: 'Manajemen', singkatan: 'MJ', fakultas: 'Fakultas Ekonomi dan Bisnis' }
];

// Route /prodi
app.get('/prodi', (req, res) => {
    res.render('prodi', { prodi });
});

// route /contact
app.get("/contact", (req, res) => {
    // res.send("Contact Us");
    res.sendFile(__dirname + "/contact.html");
});

// route /mahasiswa
app.get("/mahasiswa", (req, res) => {
    res.json({
        "status" : "success",
        "message" : "Data mahasiswa",
        "data" : [
            {npm: 2226240001, nama: "ahmad"},
            {npm: 2226240002, nama: "ahmad 2"},
            {npm: 2226240003, nama: "ahmad 3"}
        ]
    })
});

// route /dosen
app.get("/dosen", (req, res) => {
    res.json({
        "status" : "success",
        "message" : "Data dosen",
        "data" : [
            {
            prodi: "Sistem Informasi",
            dosen: ["Iis", "Faris", "Dafid"]
        },
        {
            prodi: "Informatika",
            dosen: ["Derry", "SIska", "Yohannes"]
        },
    ]
    })
})

// handle route yang tidak terdaftar
app.use("/", (req, res) => {
    res.send("<h1>404 Not Found</h1>");
});

// jalankan server
app.listen(port, () => {
    console.log(`Server dapat diakses di http://localhost:${port}`);
});