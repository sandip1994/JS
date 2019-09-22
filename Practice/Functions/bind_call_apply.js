/*
 Bind
 =================*/
 var pokemon = {
    firstname: "Pika",
    lastname: "Chu",
    getPokeName: function(){
        var fullname = this.firstname + ' ' + this.lastname;
        return fullname;
    }
};

var pokemonName =   function(snack, hobby){
    console.log(this.getPokeName() + ' I choose you!');
    console.log(this.getPokeName() + ' loves '+ snack + ' and '+ hobby);
}

var logPokemon = pokemonName.bind(pokemon);
logPokemon('php','javascript');


/*
 Call, Apply
 ===================*/
pokemonName.call(pokemon,'php','javascript');
pokemonName.apply(pokemon,['php','javascript']);