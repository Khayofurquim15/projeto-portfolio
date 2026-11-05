
const botao = document.getElementById('botao-tema');
const body = document.body;

const temaSalvo = localStorage.getItem('tema');
temaEscuro(temaSalvo === 'escuro');

// Scroll suave para links de navegação //

const navLinks = document.querySelectorAll('#menu ul a.link');

navLinks.forEach(link =>{
    link.addEventListener('click', function(e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if(target) {
            const headerHeight = document.querySelector('header').offsetHeight;
            const targetPosition = target.offsetTop - headerHeight - 20;
            window.scrollTo({
                top:targetPosition,
                behavior:"smooth"
            });
        }
    });
});



function temaEscuro(tipo){
    if(tipo == true){
        body.classList.add('escuro');
        botao.innerHTML = '<i class="fa-solid fa-sun"></i>';
    }else{
        body.classList.remove('escuro');
        botao.innerHTML = '<i class="fa-solid fa-moon"></i>';
    }
};

botao.addEventListener('click', ()=>{
    const isEscuro = body.classList.toggle('escuro');

    temaEscuro(isEscuro);
    localStorage.setItem('tema', isEscuro ? 'escuro' : 'claro');
});