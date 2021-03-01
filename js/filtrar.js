var campoFiltro = document.querySelector("#campo-buscar");
campoFiltro.addEventListener("input", function(){
    console.log(this.value);
    var pokemons = document.querySelectorAll(".pokemon");
   if(this.value.length > 0) {
    for (i = 0; i < pokemons.length; i++){
        var pokemon = pokemons[i];
        var tdNome = pokemon.querySelector(".info-nome");
        var nome = tdNome.textContent;
        var expressao = new RegExp(this.value, "i");
        if(!expressao.test(nome)) {
            pokemon.classList.add("invisivel");
        } 
        else {
            pokemon.classList.remove("invisivel");
        }
     }
   } else {
    for (i = 0; i < pokemons.length; i++){
        var pokemon = pokemons[i];
        pokemon.classList.remove("invisivel");
    }
   }
});
