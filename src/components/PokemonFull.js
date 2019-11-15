
class PokemonFull {
    constructor(data) {
      this.id = data.id;
      this.nome = data.name;
      
      this.sprite = data.sprites.front_default;
      this.spriteback = data.sprites.back_default;
      this.spritebackshiny = data.sprites.back_shiny;
      this.spriteshiny = data.sprites.front_shiny;

      
      if(data.types.length == 2){
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
        fetch(data.abilities[0].ability.url)
          .then(response => response.json())
          .then(data => 
            this.hab1desc = data.effect
          );
        
        this.hab2 = data.abilities[1].ability.name;
        fetch(data.abilities[1].ability.url)
          .then(response => response.json())
          .then(data => 
            this.hab2desc = data.effect
          );
        
      }else{
        this.hab1 = data.abilities[0].ability.name;
      }
    }
  }

  export default PokemonFull;