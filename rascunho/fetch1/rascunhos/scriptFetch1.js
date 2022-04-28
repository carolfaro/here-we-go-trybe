// Esse arquivo tem duas funções:
// 1) getData(data) => função que recebe os dados da api para renderizar na tela
// 2) fetchPokemon(pokemon) => função que faz a fetch na api e prepara os dados para enviar de parâmetro
// para getData(data), ou seja, ela faz a fetch, prepara e manda o (data) para getData(data)



// 1) getData(data) -> o que ela espera receber?
// somente vendo a função já podemos saber que ela deve receber um objeto
// 'data' com duas chaves: umnome e umid
// esse objeto assim:
// 
// const data = {
//     umnome: algo,
//     umid: algo,
// }
//
// aqui eu invento nome que eu quiser nas chaves,
// eu que fiz a função, eu chamo como quiser, o valor dela que é o dado da api.
// A chave do objeto eu escolhi, porque eu que vou construir esse objeto com os valores
// vindos da API.


function getData(data) {
    const p1 = document.querySelector('#ele1')
    const p2 = document.querySelector('#ele2')

    p1.innerHTML = data.umnome;
    p2.innerHTML = data.umid;

    // aqui determinei as chaves que eu quero receber
    // escolhi nome de chaves que tem a ver com o valor que vou receber para o código ter sentido
    
}




// 2) fetchPokemon(pokemon)
// sabemos que ela vai retornar um objeto para a função getData(data) com os dados
// retornados da api

function fetchPokemon(pokemon) {

    // ------- como acessar a API?
    
    const promessa = fetch('https://pokeapi.co/api/v2/pokemon/pikachu');
    // função que chama a API
    
    const dados = promessa.then((response) => {
        return response.json();
    })
    // then que traz a resposta da chamada => o que você faz com essa resposta?
    // traduz para json();

    // ------ o que a gente precisa dela?
    //   nome e id do pokemon para construir o objeto
    // ----- como acho isso?
  

     dados.then((dado) => {
        // aqui o then vai pegar a resposta traduzida para json() e fazer o que com ela?
        // primeiro vejo o que ela retorna e procuro o nome e id:
        console.log(dado);
        
        // achei, elas estão em dado.name e dado.id
        // agora já posso pegar esse dado e passar ele pro objeto que vai entrar em (data)

        const pokemonObj = {
            umnome: dado.name,
            umid: dado.id,
        }

        // objeto pronto, chamo a função getdata e mando objeto pra ela.
        getData(pokemonObj);
    })
   

}

fetchPokemon();



// RASCUNHO //

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
