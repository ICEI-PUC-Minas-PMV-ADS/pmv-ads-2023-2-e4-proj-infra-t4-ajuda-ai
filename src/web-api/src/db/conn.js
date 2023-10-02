const mongoose = require("mongoose");

async function main(){
    try{
        mongoose.set("strictQuery", true);

        await mongoose.connect(`mongodb+srv://marcusvinimf:236TTrvkrsC8xXPJ@cluster0.enjwvuk.mongodb.net/?retryWrites=true&w=majority`);
        
        console.log("Banco de dados conectado!");
    } catch(error){
        console.log(`Erro: ${error}`);
    }
}

module.exports = main;