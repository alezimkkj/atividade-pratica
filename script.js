const form = document.getElementById('cadastroForm');

const campos = {
nome: document.getElementById('nome'),
email: document.getElementById('email'),
senha: document.getElementById('senha'),
confirma: document.getElementById('confirmaSenha'),
perfil: document.getElementById('perfil'),
termos: document.getElementById('termos')
};

const erros = {
nome: document.getElementById('erroNome'),
email: document.getElementById('erroEmail'),
senha: document.getElementById('erroSenha'),
confirma: document.getElementById('erroConfirma'),
perfil: document.getElementById('erroPerfil'),
termos: document.getElementById('erroTermos')
};

function mostrarErro(campo, mensagem) {
erros[campo].innerText = mensagem;
if (campos[campo].type !== 'checkbox') {
campos[campo].classList.add('invalido');
}
}

function limparErros() {
for (const campo in erros) {
erros[campo].innerText = '';
campos[campo].classList.remove('invalido');
}
}

function emailValido(email) {
return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

form.addEventListener('submit', function (evento) {
evento.preventDefault();
limparErros();

const nome = campos.nome.value.trim();
const email = campos.email.value.trim();
const senha = campos.senha.value;
const confirma = campos.confirma.value;
const perfil = campos.perfil.value;
let valido = true;

if (nome === '') {
mostrarErro('nome', 'Informe seu nome completo.');
valido = false;
}

if (email === '') {
mostrarErro('email', 'Informe seu e-mail.');
valido = false;
} else if (!emailValido(email)) {
mostrarErro('email', 'Digite um e-mail em formato válido.');
valido = false;
}

if (senha.length < 6) {
mostrarErro('senha', 'A senha deve ter no mínimo 6 caracteres.');
valido = false;
}

if (confirma === '') {
mostrarErro('confirma', 'Confirme sua senha.');
valido = false;
} else if (senha !== confirma) {
mostrarErro('confirma', 'As senhas não conferem.');
valido = false;
}

if (perfil === '') {
mostrarErro('perfil', 'Selecione um perfil técnico.');
valido = false;
}

if (!campos.termos.checked) {
mostrarErro('termos', 'Você precisa aceitar os termos de uso.');
valido = false;
}

if (!valido) {
document.getElementById('sucesso').classList.add('oculto');
return;
}

document.getElementById('saidaNome').innerText = nome;
document.getElementById('saidaEmail').innerText = email;
document.getElementById('saidaPerfil').innerText = perfil;

document.getElementById('vazio').classList.add('oculto');
document.getElementById('painel').classList.remove('oculto');
document.getElementById('sucesso').classList.remove('oculto');

form.reset();
});
