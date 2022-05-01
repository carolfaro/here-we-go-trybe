

function getData(data) {
    const p1 = document.querySelector('#ele1')
    const p2 = document.querySelector('#ele2')

    p1.innerHTML = data.name;
    p2.innerHTML = data.ide;

}

const msgerro = 'errou tudo';

function fetchPokemon(pokemon) {
    
    const promessa = fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}`);
    
    const dados = promessa.then((response) => {
        return response.json();
    })
    

     dados.then((dado) => {
        console.log(dado);
        const pokemonObj = {
            name: dado.name,
            ide: dado.id,
        }
        getData(pokemonObj);
    })

    // se algo der errado:
    // catch é uma função que pega o erro, a mensagem de erro:
    .catch((error) => {
        console.log(error);
    })

}

// 2. utilize a função requestPokemon para fazer a fetch:
function requestPokemon() {
    fetchPokemon('charizardees');

}


// 3. adicione um erro caso chame charizard

window.onload = requestPokemon();

// --- EXPLICAÇÕES

// ------- como acessar a API?
    // ---- fetch() é uma função q chama a API e retorna uma promisse
    // -----then() é uma função que espera a promisse vir e te dá ela prontinha pra ser usada
    // o parâmetro dela é a resposta da promisse
    
     // (1) faz uma 1ª constante pra armazenar a chamada da API, o "clique" na api

    // essa constante retorna uma promisse.

    // -------------------------------------------------------------//
    // POR ISSO, SOMENTE UMA FUNÇÃO ASSINCRONA --> .then() -> VAI FUNCIONAR COM O RETORNO
    // DE UMA FETCH, PQ SÓ ELA ESPERA O RETORNO DA PROMISSE PARA EXECURAR ALGO,
    // AS OUTRAS NÃO ESPERAM O RETORNO DA PROMISSE, COMO O CONSOLE.LOG() QUE É UMA FUNÇÃO SÍNCRONA

    // (2) armazena o retorno em outra constante, pegamos a fetch e aplicamos a função
    // assíncrona .then e o parâmetro que ela retorna é a resposta assíncrona



    // (3) pega a 2ª constante já com os dados traduzidos e aplica a função then
    // q é uma função assíncrona, para ela mostrar finalmente os dados traduzidos
    //----------------
    // pronto, agora o último then retorna o objeto que você quer, assim vc pode acessar
    // a chave que vc quiser dele:

     
    // ------ o que a getData precisa?
    // dado.name e dado.url

     // dados.then((dado) => {
    //     console.log(dado.name);
    //     console.log(dado.sprites.front_default);
    // })

    // ------------ OU :
    // const name = dados.then((dado) => {
    //     console.log(dado.name);
    // })

    // const url = dados.then((dado) => {
    //     console.log(dado.sprites.front_default)
    // })
