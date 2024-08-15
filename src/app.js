const express = require('express');
const path = require('path');
const open = require('open');

const app = express()

// Serve arquivos estáticos a partir da pasta 'public'
app.use(express.static(path.join(__dirname, 'public')));

// O código define o motor de visualização como HTML
app.set("view engine", "html");
app.engine("html", require("hbs").__express);
app.set("views", path.join(__dirname, "public/views"));

app.get('/home', (req, res) => {
    res.status(200).render("./index");
})

// Redireciona a rota raiz (/) para /home
app.get("/", (req, res) => {
    res.redirect("/home");
});


const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
    console.log(`The server is now running on port ${PORT}`);
    open(`http://localhost:${PORT}`);
})