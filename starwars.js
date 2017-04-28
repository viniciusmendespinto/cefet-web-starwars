// Seu javascript aqui :)
// Use a Star Wars API: https://swapi.co/
// para carregar:
//  - A lista de filmes
//  - A introdução de cada filme, quando ele for clicado

let episodios = ['IV','V','VI','I','II','III','VII'];
//let filmesLista = {};

/*
document.getElementByTag("li").addEventListener("click", function(){
   document.getElementByClass("reading-animation").innerHTML = "";
});
*/

$.ajax({
  url: 'http://swapi.co/api/films/',
  type: 'GET',      // opcional: 'GET' é o valor 


  success: function(resposta) {
  	$('#movies ul').empty();
  	$('.reading-animation').empty();
  	console.log(resposta);
    for(let filmes of resposta.results){
      $('#movies ul').append('<li data-episode-url="' + filmes.url + '">Episódio ' 
      	+ episodios[filmes.episode_id-1] + '</li');

    console.log(filmes.opening_crawl);
      $('.reading-animation').append(filmes.opening_crawl);
    }


    /*
    for (i = 0; i < filmes.lenght; i++) { 
      filmesLista[i] = filmes[i].opening_crawl;
    }
    */

  }

 
});
  

