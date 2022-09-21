const express = require('express'); // chamar o express

const app = express(); // instanciando o express

app.set("view engine", "ejs"); // falando para o express que a ferramenta(view engine) vai ser usada para renderizar HTML, vai usar o EJS para isso.

// Criando rotas
app.get("/", function(req, res){
    const items = [
        {
            title: "D",
            message: "esenvolver aolicações/serviços de forma facil."
        },
        {
            title: "E",
            message: "JS usa JavaScript para renderizar HTML."
        },
        {
            title: "M",
            message: "uito fácil de usar."
        },
        {
            title: "A",
            message: "morzinho."
        },
        {
            title: "I",
            message: "nstall ejs."
        },
        {
            title: "S",
            message: "intaxe simples."
        }
    ];

    const subtitle = "Uma linguagem de modelagem para criação de paginas HTML com JavaScript";
    res.render("pages/index", {
        qualitys: items,
        subtitle: subtitle,
    });
})

app.get("/sobre", function(req, res){
    res.render("pages/about")
})

app.listen(8080); // rodar o servidor e indicar a porta.

console.log("Servidor Funcionando");
