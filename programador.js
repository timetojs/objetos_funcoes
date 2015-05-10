var Pessoa = function(nome){
	this.nome = nome;
}

Pessoa.prototype.getNome = function(){
	return this.nome;
}

// nova função construtora
var Programador = function(linguagem){
	this.linguagem = linguagem;
}

// associando um novo objeto ao prototype de Programador
Programador.prototype = new Pessoa('Paulo J.');

// criando um método público para Programador
Programador.prototype.getLinguagem = function(){
	return this.linguagem;
}

var paulo = new Programador('JavaScript');

console.log(paulo.getNome());		// Paulo J.
console.log(paulo.getLinguagem());	// JavaScript