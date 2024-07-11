import listaDeEstados from './estados.js';

let tagUl = document.getElementById('lista-estados');

let estado = listaDeEstados[0];

tagUl.innerHTML = "<li>Estado: " + estado.nome + ", Região: " + estado.regiao.nome + "</li>";

// tagUl.textContent = "Conteudo de texto" // Rederiza tudo como texto puro 
// tagUl.innerHTML = "<li>Estado: Acre, Região: Norte</li>" // Rederiza teag HTML
