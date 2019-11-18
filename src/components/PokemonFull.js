/* Classe PokemonFull que servirá para utilizar todos os dados necessários para exibição na tela de detalhes avançados */
class PokemonFull {
    constructor(data) {
      this.id = data.id;
      this.nome = data.name;
      
      this.sprite = data.sprites.front_default;
      this.spriteback = data.sprites.back_default;
      this.spritebackshiny = data.sprites.back_shiny;
      this.spriteshiny = data.sprites.front_shiny;

      /*Encontra se o pokemon possui mais de 1 tipo */
      if(data.types.length === 2){
          this.type1 = data.types[0].type.name;
          this.type2 = data.types[1].type.name;
      }else{
        this.type1 = data.types[0].type.name;
      }
      
           
      this.peso = data.weight;
      this.speed = data.stats[0].base_stat;
      this.spdef = data.stats[1].base_stat;
      this.spatck = data.stats[2].base_stat;
      this.defesa = data.stats[3].base_stat;
      this.atack = data.stats[4].base_stat;
      this.hp = data.stats[5].base_stat;  
      if(data.abilities.length >= 2){
        this.hab1 = data.abilities[0].ability.name;
        this.hab2 = data.abilities[1].ability.name;
      }else{
        this.hab1 = data.abilities[0].ability.name;
      }
      /*Aqui utilizei a função map para atribuir uma string personalizada em cada posição do vetor para exibir os movimentos de luta do pokemon */
      this.moves = data.moves.map(nome => ' ' + nome.move.name + ', ');
      /*Aqui passo a url específica para o gif do pokemon na tela de detalhes avançados */
      this.spritegif = `http://www.pokestadium.com/sprites/xy/${data.name}.gif`;
    }
  }

  export default PokemonFull;