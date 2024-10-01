const express = require("express")
const app = express()
const expressLayout = require ("express-ejs-layouts");
const port = 3002

app.set("views",__dirname + "/views");
app.set('view engine', 'ejs');

app.use(expressLayout);
app.use(express.static('public'));

//route
app.get("/" ,(req,res) => {
    //res.send("hello");
    //res.sendFile(__dirname + "/home.html");
     const berita= [
        {
            judul: "berita 1",
            isi : "isi berita 1"
        },
        {
            judul: "berita 2",
            isi : "isi berita 2"
        },
    ];
    res.render('index', {title: 'halaman home',berita, layout: 'main'});
});
//route
app.get("/about" ,(req,res) => {
    //res.send("about");
    //res.sendFile(__dirname + "/aboutus.html");
    res.render('aboutus', {title: 'halaman about us', layout: 'main' });
});
// route kontak
app.get("/contact" ,(req,res) => {
    //res.send("contact us");
    //res.sendFile(__dirname + "/contact.html");
    res.render('contact', {title: 'halaman contact', layout: 'main'});
});
app.get("/prodi" ,(req,res) => {
    //res.send("contact us");
    //res.sendFile(__dirname + "/contact.html");
     const prodi= [
        {
            nama: "sistem informasi",
            fakultas : "FIKR",
            singkatan : "SI"
        },
        {
            nama: "informatika",
            fakultas : "FIKR",
            singkatan : "IF"
        },
        {
            nama: "teknik elektro",
            fakultas : "FIKR",
            singkatan : "TE"
        },
        {
            nama: "manajemen informatika",
            fakultas : "FIKR",
            singkatan : "MI"
        },
        {
            nama: "manajemen",
            fakultas : "FEB",
            singkatan : "MJ"
        },
        {
            nama: "akutansi",
            fakultas : "FEB",
            singkatan : "AK"
        },
    ];
    res.render('prodi', {title: 'halaman prodi', prodi, layout: 'main'});
});

app.get("/mahasiswa", (req,res)=>{
    res.json({
        "status" : "success",
        "message" : "data mahasiswa",
        "data" : [{npm: 2226240108, nama: "irpan paok"},
            {npm: 2226240109, nama: "irpan paok2"} 
        ]
    })
})
app.get("/dosen", (req,res)=>{
    res.json({
        "status" : "success",
        "message" : "data dosen",
        "data" : [
            {prodi : "sistem_informasi", 
            dosen : ["Faris","Pak Iis"]
        }
    ]
    })
});
// handle route yang tidak terdaftar
app.use("/" ,(req,res) => {
    res.send("<h1>404 not found</h1>");
});

//jalankan route
app.listen(port, ()=>{
    console.log(`server dapat di akses di http://localhost:${port}`);
});
