const express = require('express');
const nunjucks = require('nunjucks');
const curses = require("./data.js");

const server = express();

server.use(express.static('public'));
server.use(express.static('photos'));

server.set("view engine", "njk")

nunjucks.configure("views", {
    express: server,
    
});

server.get("/", function(req, res) {
    const aboutData = {
        avatarUrl: "https://avatars2.githubusercontent.com/u/55606615?s=460&u=f5ed3486fb73c888ecb30cac37e8862b24f320d0&v=4",
        name: "Renato Rodrigues",
        hole: "Desenvolvedor Javascript",
        description: "Desenvolvedor apaixonado por novos desafios e novas descobertas no mundo da tecnologia",
        links: [
            {url: "https://github.com/renatormsilva", social: "Github"},
            {url: "https://www.instagram.com/renatormsilva/", social: "Instagram"},
            {url: "https://www.linkedin.com/in/renato-rodrigues-782aa3146/", social: "Linkedin"}
        ]
    }
    return res.render("about", { aboutData: aboutData });
});

server.get("/portifolio", function(req, res){ 
    const social = "https://github.com/renatormsilva"
    return res.render("portifolio", {
        curses: curses,
        social: social
    });
});


server.listen(5000, function(){
    console.log("Server is running");
});