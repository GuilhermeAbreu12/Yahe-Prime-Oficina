const Subtitle = document.getElementById('subtitle');
const Title = document.getElementById('title');
const Nav = document.querySelector('nav');

if (!url){
    const url = window.location.href
}
const NavItens = document.querySelectorAll('.nav-item');
const ItemInicio = document.getElementById('nav-item-inicio');
const ItemContato = document.getElementById('nav-item-contato');
const ItemQuemSomos = document.getElementById('nav-item-quem-somos');
const ItemAgendamento = document.getElementById('nav-item-agendamento');

let i = 0

Title.addEventListener('mouseenter', ()=>{
    Subtitle.classList.add('active')
})
/* Lembrete: Não mude esse Nav abaixo, era Title, mas ficava dando enter e leave infinitamente na tela pequena, assim é mais claro */
Nav.addEventListener('mouseleave', ()=>{
    Subtitle.classList.remove('active')
})

// Nav-item
NavItens.forEach(element => {
    if (element.classList.contains('active')) {
        element.classList.remove('active')
    }
}); 


if (url.includes('index.html')) {
    ItemInicio.classList.add('active');
} else if (url.includes('contato.html')) {
    ItemContato.classList.add('active');
} else if (url.includes('quem-somos.html')) {
    ItemQuemSomos.classList.add('active');
} else if (url.includes('agendamento.html')) {
    ItemAgendamento.classList.add('active');
}