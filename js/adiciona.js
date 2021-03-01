var botaoAdicionar = document.querySelector("#adicionar-pokemon");
botaoAdicionar.addEventListener("click", function(event){
    event.preventDefault(); //parando o comportamento padrão do form


    // Selecionei o formulário, e peguei o valor de cada name, atribuí isso em variáveis
    var form = document.querySelector("#adiciona-pokemon-form")
    var nome = form.nome.value;
    var tipo = form.type.value;
    var categoria = form.category.value;
    var habilidades = form.abilities.value;
    var fraquezas = form.weaknesses.value;
    var evolucoes = form.evolutions.value;
    
    //aqui estou criando uma TR
    var pokemonTr = document.createElement("tr"); 
    // criando as TD's
    var nomeTd = document.createElement("td"); 
    var tipoTd = document.createElement("td");
    var categoriaTd = document.createElement("td");
    var habilidadesTd = document.createElement("td");
    var fraquezasTd = document.createElement("td");
    var evolucoesTd = document.createElement("td");

    //Atribuindo o valor do que extrai dos names do form para as TD's
    nomeTd.textContent = nome;
    tipoTd.textContent = tipo;
    categoriaTd.textContent = categoria;
    habilidadesTd.textContent = habilidades;
    fraquezasTd.textContent = fraquezas;
    evolucoesTd.textContent = evolucoes;

    // Falando que as TD's são filhas da TR
    pokemonTr.appendChild(nomeTd);
    pokemonTr.appendChild(tipoTd);
    pokemonTr.appendChild(categoriaTd);
    pokemonTr.appendChild(habilidadesTd);
    pokemonTr.appendChild(fraquezasTd);
    pokemonTr.appendChild(evolucoesTd);

    //falo para tabela que o TR é um filho
    var tabela = document.querySelector("#tabela-pokemons");
    tabela.appendChild(pokemonTr);
});

