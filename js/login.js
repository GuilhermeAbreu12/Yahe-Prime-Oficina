//import { admins } from "./bd.js";

export let url = window.location.href
const sectionMain = document.getElementById('section-main')
const sectionLogin = document.getElementById('section-login')
const sucessMessage = document.getElementById('sucess-message')
const loginButton = document.getElementById('login')
const adminSpace = document.createElement('a')
const navList = document.getElementById('nav-list')
export const linkInicio = document.getElementById('nav-item-inicio')
export const linkContato = document.getElementById('nav-item-contato')
export const linkQuemSomos = document.getElementById('nav-item-quem-somos')

const nomeInput = document.getElementById('placa')
const senhaInput = document.getElementById('senha')

const clientes = [
    { 
        foto: "/imgs/carro01.jpeg",
        placa: "ABC1234", 
        senha: "1234",
        modelo: "Renault Captur",
        cor: "Branco",
        ano: "2020",
        numeroReparos: "5",
        reparosRealizados: "Troca de óleo, alinhamento, troca de pneus, manutenção no motor, revisão de freios",
        dataReparo: "15/01/2025"
    },
    {
        foto: "/imgs/carro02.jpeg",
        placa: "XYZ5678",
        senha: "5678",
        modelo: "Toyota Corolla",
        cor: "Prata",
        ano: "2006",
        numeroReparos: "3",
        reparosRealizados: "Troca de pastilhas de freio, troca de óleo, alinhamento",
        dataReparo: "12/12/2024"
    }
]
const admins = [
    {
        nome: "ARNALDO HIDALGO",
        foto: "/imgs/arnaldo.jpg",
        senha: 'arnaldoadmin'
    }
]
let adminAtual
let clienteAtual
let logado

loginButton.addEventListener('click', (event)=>{
    event.preventDefault(); 

    // Não permitir espaços vazios
    if (!nomeInput.value || !senhaInput.value){
        sucessMessage.style.color = 'red'
        sucessMessage.innerHTML = 'Preencha todos os campos'
        return
    }

    console.log('Clicou no botão')

    nomeInput.value = nomeInput.value.toUpperCase();
    console.log(nomeInput.value)
    admins.forEach(admin => {
        if (nomeInput.value === admin.nome && senhaInput.value === admin.senha){
            adminAtual = admin;
            logado = true
        }
    })
    clientes.forEach(cliente => {
        if (nomeInput.value === cliente.placa && senhaInput.value === cliente.senha){
            clienteAtual = cliente;
            logado = true       
        }
        else {
            sucessMessage.style.color = 'red'
            sucessMessage.innerHTML = 'Placa ou senha incorretos ou inexistentes'
        }
    })
    
    if(logado == true){
        sectionMain.style.display = 'flex'
        sectionLogin.style.display = 'none'
        
        adminSpace.style.backgroundImage = `url(${adminAtual.foto})`;
        adminSpace.href = 'administrador.html?logado';
        adminSpace.id = 'nav-item-perfil';
        navList.appendChild(adminSpace);
    }
}) 
export const adminLogado = adminAtual
export const clienteLogado = clienteAtual
// Deixar o login invisivel e o main visivel    
