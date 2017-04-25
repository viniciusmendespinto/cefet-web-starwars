// Seu javascript aqui :)
// Use a Star Wars API: https://swapi.co/
// para carregar:
//  - A lista de filmes
//  - A introdução de cada filme, quando ele for clicado

let episodios = ['I','II','III','IV','V','VI','VII'];

$.ajax({
  url: 'http://swapi.co/api/films/',
  method: 'GET',      // opcional: 'GET' é o valor padrão
  success: function(resposta) {
  	$('#movies ul').innerHTML="";
    for(let filmes of result.results){
        $('#movies ul').append('<li data-episode-url' + filmes.url + '>Episode ' + episodios[filmes.episode_id-1] + '</li');
    }
  }
});



