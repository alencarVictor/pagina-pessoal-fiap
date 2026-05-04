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