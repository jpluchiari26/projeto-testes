var pokemons = document.querySelectorAll(".pokemon");
var tabela = document.querySelector(".tabela-info");

tabela.addEventListener("dblclick", function(event){
    //utilizo o conceito bubble, parent node é p clicar na tag pai
    event.target.parentNode.classList.add("fadeOut");
    setTimeout(function(){
        // pega o alvo, até o pai, e remove
        event.target.parentNode.remove();
    },500);
});