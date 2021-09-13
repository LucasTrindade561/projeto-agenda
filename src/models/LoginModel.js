const mongoose = require('mongoose');
const validator = require('validator');
const bcryptjs = require('bcryptjs');

const LoginSchema = new mongoose.Schema({
    email: { type: String, required: true },
    password: { type: String, required: true },
});

const LoginModel = mongoose.model('Login', LoginSchema);

class Login {
    constructor(body) {
        this.body = body;
        this.errors = []; //Controla se pode ou nao ser cadastrado no bancos de dados
        this.user = null;
    }

    async login() {
        this.valida();
        if (this.errors.length > 0) return;
        this.user = await LoginModel.findOne({ email: this.body.email });

        if(!this.user) {
            this.errors.push('Usuário não existe.');
            return;
        }

        if(!bcryptjs.compareSync(this.body.password, this.user.password)){
            this.errors.push('Senha inválida');
            this.user = null;
            return;
        }

    }

    async register() {
        this.valida();
        if (this.errors.length > 0) return;

        await this.userExists();

        if (this.errors.length > 0) return;

        //Estamos deixando a senha criptografada
        const salt = bcryptjs.genSaltSync();
        this.body.password = bcryptjs.hashSync(this.body.password, salt);

        this.user = await LoginModel.create(this.body);

    }

    async userExists() {
        this.user = await LoginModel.findOne({ email: this.body.email });
        if (this.user) this.errors.push('Usuário já existe.');
    }

    valida() {
        this.cleanUp();

        // Validacao
        // O email precisa ser valido
        if (!validator.isEmail(this.body.email)) this.errors.push('E-mail inválido.');

        // A senha precisa ter entre 6 a 20 caracteres
        if (this.body.password.length < 6 || this.body.password.length > 20) {
            this.errors.push('A senha precisa ter entre 6 e 20 caracteres.');
        }
    }

    cleanUp() {
        for (const key in this.body) {
            if (typeof this.body[key] !== 'string') {
                this.body[key] = '';
            }
        }

        this.body = { // garantindo que o objeto tenha so os campos que eu quero(sem csrfToken)
            email: this.body.email,
            password: this.body.password
        }
    }

}

module.exports = Login;
