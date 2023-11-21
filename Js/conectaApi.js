async function listaCarros() {
    const conexao = await fetch("http://localhost:3000/carros");
    const conexaoConvertida = await conexao.json();

    return conexaoConvertida;

}

async function criarCarro(montadora, nomeCarro,cores) {
    const conexao = await fetch("http://localhost:3000/carros", {
        method: "POST",
        headers: { "Content-type": "application/json" },
        body: JSON.stringify({
            montadora: montadora,
            nomeCarro: nomeCarro,
            cores: cores
        })
    });

    

    const conexaoConvertida = await conexao.json();
    return conexaoConvertida;
}


export const conectaApi = {
    listaCarros,
    criarCarro
}
