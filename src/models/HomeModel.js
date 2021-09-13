const mongoose = require('mongoose');

// Modelando o banco de dados
const HomeSchema =  new mongoose.Schema({
    titulo: { type: String, required:true },
    descricao: String
});

const HomeModel = mongoose.model('Home', HomeSchema);

// module.exports = HomeModel;

class Home {

}

module.exports = Home;
