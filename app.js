const chalk = require("chalk");
const prompt = require('prompt-sync')();

var listaPropriedadesCss = [];
var inputPropriedade = "";
var isRunning = true;

console.log("Olá, seja bem vindo ao ordenador de propriedades CSS. Aqui você poderá inserir quantas propriedades quiser abaixo e para visualizar em ordem alfabética, digite SAIR para exibir a lista de propriedades passadas.")
while(inputPropriedade !== "SAIR"){
    inputPropriedade = prompt('Insira a propriedade CSS que deseja ou digite exatamente SAIR: ');
        if(isRunning === true) {
            listaPropriedadesCss.push(inputPropriedade);
        }
}
listaPropriedadesCss.pop();
listaPropriedadesCss.sort();
for(var i = 0; i < listaPropriedadesCss.length; i++){
    console.log(chalk.blue(listaPropriedadesCss[i]));
}