let url = window.location.href
const linkInicio = document.getElementById('nav-item-inicio')
const linkContato = document.getElementById('nav-item-contato')
const linkQuemSomos = document.getElementById('nav-item-quem-somos')
const linkAgendamento = document.getElementById('nav-item-agendamento')

const menuLinkInicio = document.getElementById('menu-mobile__item-inicio')
const menuLinkContato = document.getElementById('menu-mobile__item-contato')
const menuLinkQuemSomos = document.getElementById('menu-mobile__item-quem-somos')
const menuLinkAgendamento = document.getElementById('menu-mobile__item-agendamento')

if (url.includes('?logado')){
    linkInicio.href = 'index.html?logado';
    linkContato.href = 'contato.html?logado';
    linkQuemSomos.href = 'quem-somos.html?logado';
    linkAgendamento.href = 'agendamento.html?logado';

    menuLinkInicio.href = 'index.html?logado';
    menuLinkContato.href = 'contato.html?logado';
    menuLinkQuemSomos.href = 'quem-somos.html?logado';
    menuLinkAgendamento.href = 'agendamento.html?logado';

}