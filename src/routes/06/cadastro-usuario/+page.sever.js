
import { fail, redirect } from '@sveltejs/kit';

/** retorna true se o texto contem pelo menos um dos caracteres */
function contem(texto, caracteres) {
    for (const caractere of caracteres) {
        if (texto.includes(caractere)) return true;
    }
    return false;
}

export const actions = {
  default: async ({ request }) => {
    const data = await request.formData();
    const dados ={
        nome: data.get('nome'),
        email: data.get('email'),
        nascimento: data.get('nascimento'), 
        senha: data.get('senha'),
        confirmacaosenha = data.get('confirmacaosenha'), erros: []
    }

    if (!dados.nome || !dados.email || !dados.nascimento || !dados.senha || !dados.confirmacaosenha) dados.erros.push('Preencha todos os campos.');

    if (!dados.email.includes('@')) dados.erros.push('Email inválido.');

    if (dados.senha != dados.confirmacaosenha) dados.erros.push('Senhas não conferem.');

    if (!contem(senha, "abcdefghijklmnopqrstuvwxyz")
        || !contem(senha, "ABCDEFGHIJKLMNOPQRSTUVWXYZ")
        || !contem(senha, "0123456789")
        || !contem(senha, "!@#$%¨&*()-_=+")
)
        dados.erros.push('A senha deve conter no mínimo uma letra, um npumero e um caractere especail');

    let agora = new Date(), nasc = new Date(dados.nascimento);
    if (agora - nasc < 378691200000)
        dados.erros.push('Você ainda não completou 12 anos!');

    redirect(303, '/06/profile');
  }
};