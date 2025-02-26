// Populando as arrays
let nomes = ["José", "Marcelo", "Enrico", "Barreto", "Felipe", "Adriano", "Lucas", "Yuri", "João", "Cristiano"];
let idades = [16, 30, 16, 35, 17, 40, 15, 28, 17, 38];
let ids = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let num = 10;

// Função para adicionar itens
function atualizar() {
    //Adicionando nome
    const input = document.getElementById('nome');
    const nome = input.value;
    nomes.push(nome);

    // Adicionando idade
    const inputt = document.getElementById('idade');
    const idade = inputt.value;
    idades.push(idade);

    // O ID vai seguir basicamente o indice do array + 1
    num++;
    ids.push(num);

    // Saída de dados
    renderizarTabela();
}

function renderizarTabela() {
    const tableBody = document.getElementById("tableBody");
    tableBody.innerHTML = "";  // Limpa a tabela

    // Percorrendo o array o populando
    for (let i = 0; i < nomes.length; i++) {
        const linha = document.createElement("tr");

        // Colocando o valor do id na primeira coluna, sendo um th
        const celulaID = document.createElement("th");
        celulaID.textContent = ids[i];
        linha.appendChild(celulaID);

        // Colocando os nomes na segunda coluna
        const celulaNome = document.createElement("td");
        celulaNome.textContent = nomes[i];
        linha.appendChild(celulaNome);

        // Colocando as idades na terceira coluna
        const celulaIdade = document.createElement("td");
        celulaIdade.textContent = idades[i];
        linha.appendChild(celulaIdade);

        tableBody.appendChild(linha);
    }
}
//Ordem alfabetica de A a Z
function ordenarNome() {
    // Cria um novo array que pega os nomes, idades e IDs de cada índice do array
    const dadosCombinados = nomes.map((nome, index) => ({
        nome,
        idade: idades[index],
        id: ids[index]
    }));

    // Ordenando os itens do array se baseando no nome
    dadosCombinados.sort((a, b) => a.nome.localeCompare(b.nome));

    // Devolvendo para o array original
    nomes = dadosCombinados.map(dado => dado.nome);
    idades = dadosCombinados.map(dado => dado.idade);
    ids = dadosCombinados.map(dado => dado.id);

    renderizarTabela();
}

//Ordem crascente
function ordenarIdade() {
    // Cria um novo array que pega os nomes, idades e IDs de cada índice do array
    const dadosCombinados = nomes.map((nome, index) => ({
        nome,
        idade: idades[index],
        id: ids[index]
    }));

    // Ordenando os itens do array se baseando na idade
    dadosCombinados.sort((a, b) => a.idade - b.idade);

    // Devolvendo para o array original
    nomes = dadosCombinados.map(dado => dado.nome);
    idades = dadosCombinados.map(dado => dado.idade);
    ids = dadosCombinados.map(dado => dado.id);

    renderizarTabela();
}

// Renderiza a tabela ao carregar a página
document.addEventListener("DOMContentLoaded", renderizarTabela);