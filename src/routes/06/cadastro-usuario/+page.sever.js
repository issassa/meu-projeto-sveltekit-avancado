
//import { fail, redirect } from '@sveltejs/kit';

//export const actions = {
//  default: async ({ request }) => {
//    const data = await request.formData();
//    const nome = data.get('nome');
//    const email = data.get('email');
//    const nascimento = data.get('nascimento');
//
//
//    if (!nome || !email || !nascimento) return fail(400, { error: 'Preencha todos os campos.', nome, email, nascimento });
//
//    if (!email.includes('@')) return fail(400, { error: 'Email inválido.', nome, email, nascimento });
//
//    let agora = new Date ();
//    let nasc = new Date (nascimento);
//    if (agora - nasc < 378691200000)
//        return fail(400, {error: 'Você ainda não completou 12 anos!', nome, email, nascimento})
//
//    redirect(303, '/06/profile');
//  }
//};

import { fail } from '@sveltejs/kit';

export const actions = {
    default: async ({ request }) => {
        const data = await request.formData();
        const nome = data.get('nome');
        const email = data.get('email');
        const dataNascimento = data.get('dataNascimento');

        const errors = {};
        const values = { nome, email, dataNascimento };

        if (!nome || nome.trim().length < 2) {
            errors.nome = 'O nome deve ter no mínimo 2 caracteres.';
        }

        const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

        if (!email || !emailRegex.test(email)) {
             errors.email = 'E-mail inválido. Deve seguir o formato padrão (ex: nome@dominio.com).';
        }

        if (!dataNascimento) {
            errors.dataNascimento = 'Data de nascimento é obrigatória.';
        } else {
            const dob = new Date(dataNascimento); 
            const today = new Date(); 

            let age = today.getFullYear() - dob.getFullYear();
            const monthDiff = today.getMonth() - dob.getMonth();
            const dayDiff = today.getDate() - dob.getDate();

            if (monthDiff < 0 || (monthDiff === 0 && dayDiff < 0)) {
                age--;
            }

            if (age < 12) {
                errors.dataNascimento = 'A idade deve ser igual ou superior a 12 anos.';
            }
        }

        if (Object.keys(errors).length > 0) {
           
            return fail(400, { errors, ...values });
        }

        return { success: true, nome };
    }
};