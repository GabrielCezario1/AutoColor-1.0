import { conectaApi } from "./conectaApi.js";
const formulario = document.querySelector("[data-formulario]");

async function criarCarro(evento){
    evento.preventDefault();
    const montadora = document.querySelector("[data-montadora]").value;
    const nomeCarro = document.querySelector("[data-nomeCarro]").value;
    const coresString = document.querySelector("[data-cores]").value;
    const cores = [coresString];

    await conectaApi.criarCarro(montadora,nomeCarro,cores);

}

    formulario.addEventListener("submit", evento => criarCarro(evento));


