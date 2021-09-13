// import validator from "validator";
// export default class CadastraContato {
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
//             this.validate(e);
//         });
//     }
//     validate(e) {
//         const el = e.target;
//         const nomeInput = el.querySelector('input[name="nome"]');
//         const sobrenomeInput = el.querySelector('input[name="sobrenome"]');
//         const emailInput = el.querySelector('input[name="email"]');
//         const telInput = el.querySelector('input[name="telefone"]');
//         let error = false;

//         if (!nomeInput.value) {
//             alert('Nome é um campo obrigatório.');
//             error = true;
//         }
//         if (emailInput.value && !validator.isEmail(emailInput.value)) {
//             alert('E-mail inválido');
//             error = true;
//         }
//         if (!emailInput.value && !telInput.value) {
//             alert('Pelo menos um contato precisa ser enviado: e-mail ou telefone.');
//             error = true;
//         }
//         if (!error) el.submit();
//     }
// }