document.addEventListener("DOMContentLoaded", () => {

    const botaoMenu = document.querySelector(".menu-btn");
    const menu = document.querySelector("nav");

    botaoMenu.addEventListener("click", () => {
        menu.classList.toggle("ativo");
    });

    // ACCORDION
    const accordions = document.querySelectorAll(".accordion-btn");

    accordions.forEach(btn => {
        btn.addEventListener("click", () => {
            const item = btn.parentElement;
            item.classList.toggle("ativo");
        });
    });

    // BOTÃO VOLTAR AO TOPO
    const botaoTopo = document.querySelector(".btn-topo");

    if (botaoTopo) {

        window.addEventListener("scroll", () => {
            if (window.scrollY > 300) {
                botaoTopo.style.display = "block";
            } else {
                botaoTopo.style.display = "none";
            }
        });

        botaoTopo.addEventListener("click", () => {
            window.scrollTo({
                top: 0,
                behavior: "smooth"
            });
        });
    }

});

// FORMULÁRIO
const form = document.querySelector("#contato form");

if (form) {
    const nome = document.getElementById("nome");
    const email = document.getElementById("email");
    const mensagem = document.getElementById("mensagem");

    const erroNome = document.getElementById("erro-nome");
    const erroEmail = document.getElementById("erro-email");
    const erroMensagem = document.getElementById("erro-mensagem");

    const sucessoBox = document.getElementById("sucesso-box");

    form.addEventListener("submit", (event) => {
        event.preventDefault();

        // limpar erros
        erroNome.textContent = "";
        erroEmail.textContent = "";
        erroMensagem.textContent = "";

        nome.classList.remove("input-erro");
        email.classList.remove("input-erro");
        mensagem.classList.remove("input-erro");

        let temErro = false;

        // validação nome
        if (nome.value.trim().length < 3) {
            erroNome.textContent = "Nome deve ter pelo menos 3 caracteres.";
            nome.classList.add("input-erro");
            temErro = true;
        }

        // validação email
        const regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!regexEmail.test(email.value)) {
            erroEmail.textContent = "Digite um e-mail válido (exemplo@dominio.com)";
            email.classList.add("input-erro");
            temErro = true;
        }

        // validação mensagem
        if (mensagem.value.trim().length < 10) {
            erroMensagem.textContent = "Mensagem deve ter pelo menos 10 caracteres.";
            mensagem.classList.add("input-erro");
            temErro = true;
        }

        // se tiver erro, para aqui
        if (temErro) return;

        // simulação de envio (antes de limpar)
        console.log({
            nome: nome.value,
            email: email.value,
            mensagem: mensagem.value
        });

        // resetar formulário
        form.reset();

        // esconder formulário
        form.style.display = "none";

        // mostrar mensagem de sucesso
        sucessoBox.style.display = "block";
    });
}