import listaDeEstados from './estados.js';

let tagUl = document.getElementById('lista-estados');

/*
let estado = listaDeEstados[0];
tagUl.innerHTML = tagUl.innerHTML + "<li id='item-0'>Estado: " + estado.nome + ", Região: " + estado.regiao.nome + "</li>";

let tagLi = document.getElementById('item-0');

tagLi.addEventListener('click', function() {
    alert("Clicou na LI");
});
*/




for(let index = 0; index < listaDeEstados.length; index++) {
    let estado = listaDeEstados[index];
    // tagUl.innerHTML = tagUl.innerHTML + "<li id='item-"+index+"'>Estado: " + estado.nome + ", Região: " + estado.regiao.nome + "</li>";
    tagUl.innerHTML = tagUl.innerHTML + `<li id="item-${index}"> Estado: ${estado.nome}, Região: ${estado.regiao.nome}</li>`
}

for(let index = 0; index < listaDeEstados.length; index++) {
    let tagLi = document.getElementById(`item-${index}`);
    tagLi.addEventListener('click', function(event) {
        console.log(event.target.outerHTML);
    });
}


// tagUl.textContent = "Conteudo de texto" // Rederiza tudo como texto puro 
// tagUl.innerHTML = "<li>Estado: Acre, Região: Norte</li>" // Rederiza teag HTML
