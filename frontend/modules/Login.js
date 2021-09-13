// import validator from "validator";
// export default class Login {
//     constructor(formClass) {
//         this.form = document.querySelector(formClass);
//     }
//     init() {
//         this.events();
//     }

//     events() {
//         if (!this.form) return;
//         this.form.addEventListener('submit', e => {
//             e.preventDefault();
//             // alert('FORM NÃO ENVIADO');
//             this.validate(e);
//         });
//     }
//     validate(e) {
//         const el = e.target;
//         const emailInput = el.querySelector('input[name="email"]');
//         const passwordInput = el.querySelector('input[name="password"]');
//         let error = false;

//         if(!validator.isEmail(emailInput.value)){
//             alert('E-mail inválido');
//             error = true;
//         }

//         if(passwordInput.value.length < 6 || passwordInput.value.length > 20){
//             alert('Senha precisa ter entre 6 e 20 caracteres');
//             error = true;
//         }

//         if(!error) el.submit();

//         console.log(emailInput.value, passwordInput.value);

//     }

// }