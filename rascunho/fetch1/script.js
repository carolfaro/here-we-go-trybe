// a função abaixo espera no (data) um objeto com duas chaves:
// objPokemon = { 
//      name: dado.name, 
//      imageUrl: dado.id
//     };

// então (data) === (objPokemon)

function getData(data) {
    const p1 = document.querySelector('#ele1')
    const p2 = document.querySelector('#ele2')

    p1.innerHTML = data.nameee;
    p2.innerHTML = data.ide;

    // essas chaves nameee e ide eu inventei aqui, dizendo que é esse nome
    // q eu quero q esteja nas chaves q eu espero receber o dado
    
}

function fetchPokemon(pokemon) {

    // ------- como acessar a API?
    
    const promessa = fetch('https://pokeapi.co/api/v2/pokemon/pikachu');
    
    const dados = promessa.then((response) => {
        return response.json();
    })
    
    // ------ o que a gente precisa dela?
    //   dado.name e dado.url

     dados.then((dado) => {
        console.log(dado);
        
        // as chaves são determinadas pela função que vai receber os dados e renderizar na tela
        // e o valor é de fato a resposta da promisse
        const pokemonObj = {
            nameee: dado.name,
            ide: dado.id,
        }
        getData(pokemonObj);
    })
   

    // como mandar os dados pra ela?

}

fetchPokemon();

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
