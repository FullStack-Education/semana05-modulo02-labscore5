/* LabScore pt.1 - Exercício 1 */
let listaNotas = [8, 10, 7, 5];

function calcularMedia(notas) {
  let soma = 0;
  for (let i = 0; i < notas.length; i++) {
    soma += notas[i];
  }
  let media = soma / notas.length;
  return media;
}

let mediaNotas = calcularMedia(listaNotas);

/* LabScore pt.1 - Exercício 2 */
function resultadoFinal(media) {
  return media >= 7
    ? `<p>Média: <strong>${media}</strong>.<br> Parabéns, você passou na média!</p>`
    : `<p>Média: <strong>${media}</strong>.<br> Infelizmente você está de recuperação.</p>`;
}

/* LabScore pt.1 - Exercício 3 */
let listaAlunos = ["Pedro", "Maria", "João", "Paula"];

function imprimirNomes(nomes) {
  return nomes.forEach((aluno) => {
    document.write(`${aluno}<br>`);
  });
}

/* LabScore pt.1 - Exercício 4 */
function tabuada(numero) {
  for (let i = 0; i <= 10; i++) {
    let resultado = numero * i;
    document.write(`${numero} x ${i} = ${resultado}<br>`);
  }
}

/* LabScore pt.1 - Exercício 5 */
function entrevistarAluno() {
  let nome = window.prompt("Qual o nome do aluno?");
  let idade = window.prompt("Qual a idade do aluno?");
  let serie = window.prompt("Qual a série do aluno?");
  let escola = window.prompt("Qual o nome da escola?");
  let materia = window.prompt("Qual a sua matéria favorita?");

  let dadosAluno = `Você confirma os dados inseridos?
    Nome do aluno: ${nome}
    Idade do aluno: ${idade}
    Série do aluno: ${serie}
    Nome da escola: ${escola}
    Matéria favorita: ${materia}`;

  let confirmacao = window.confirm(dadosAluno);

  return confirmacao
    ? document.write(`
      <span>Nome do aluno: <strong>${nome}</strong></span><br>
      <span>Idade do aluno: <strong>${idade}</strong></span><br>
      <span>Série do aluno: <strong>${serie}</strong></span><br>
      <span>Nome da escola: <strong>${escola}</strong></span><br>
      <span>Matéria favorita: <strong>${materia}</strong></span><br>`)
    : document.write(`<p>Os dados não foram confirmados.</p>`);
}

/* LabScore pt.1 - Exercício 6 */
function notasMateria() {
  let materia = window.prompt("Qual o nome da matéria?");
  let notas = [];
  let i = 0;
  while (i < 4) {
    let nota = parseFloat(window.prompt("Informe a nota " + (i + 1) + ":"));
    notas.push(nota);
    i++;
  }

  let dadosMateria = {
    nomeMateria: materia,
    notas: notas,
  };

  let media = calcularMedia(dadosMateria.notas);

  document.write(`
    <span>Matéria: <strong>${dadosMateria.nomeMateria}</strong></span><br>
    <span>Notas: <strong>[${dadosMateria.notas.join(", ")}]</strong></span><br>
    <span>Média: <strong>${media}</strong></span><br>`);
}

/* LabScore pt.1 - Exercício 7 */
function encontrarMaiorNumero(numeros) {
  let maiorNumero = numeros[0];

  for (let i = 1; i < numeros.length; i++) {
    if (numeros[i] > maiorNumero) {
      maiorNumero = numeros[i];
    }
  }

  return maiorNumero;
}

// entrevistarAluno();
{
  const medias = calcularMediasTabelaHTML("#notas-materias", "coluna-notas");
  atualizarMedias("#notas-materias", medias.mediasMaterias, medias.mediaGeral, 1);
}

/* LabScore pt.2 - Exercício 5 e 6 */

/**
 * @param {string} tabelaSelector - O seletor querySelector utilizado para selecionar a tabela em si. 
 * O elemento do seletor deve ser uma tabela, e o querySelector deve ser um id ou uma classe.
 * @param {string} classeColunaDeBusca - Somente o nome da classe que será utilizada
 * para filtrar as colunas que são e as que não são para considerar.
 * A classe deve estar na célula do header (em um th), e toda a coluna dessa célula será considerada.
 * @returns {{notas: number[][], mediasMaterias: number[], mediaGeral: number}}
 */
function calcularMediasTabelaHTML(tabelaSelector = "", classeColunaDeBusca = "coluna-valor", casasAposVirgula = 1) {
  const tabelaHeadElements = document.querySelectorAll(`table${tabelaSelector} thead tr th`);
  const tabelaLinhas = document.querySelectorAll(`table${tabelaSelector} tbody tr`);

  let colunasDeNotas = [];

  for (let i = 0; i < tabelaHeadElements.length; i++) {
    if (tabelaHeadElements[i].classList.contains(classeColunaDeBusca)) {
      colunasDeNotas.push(i);
    }
  } 

  let notas = [];

  tabelaLinhas.forEach((linha) => {
    notas.push([]);

    const children = linha.children;
    for (let i = 0; i < children.length; i++) {
      if (colunasDeNotas.includes(i)) {
        notas[notas.length-1].push(children[i].textContent);
        }
    }

    Array.from(linha.children).forEach((celula) => {
      Array(notas[notas.length-1]).push(celula.value);
    })
  })

  notas = notas.map((notasDeMateria) => notasDeMateria.map((valor) => parseFloat(valor)));

  mediasMaterias = notas.map((notasDeMateria) => calcularMedia(notasDeMateria));

  mediaGeral = calcularMedia(mediasMaterias);
  
  return {
    notas: notas, 
    mediasMaterias: mediasMaterias, 
    mediaGeral: mediaGeral
  };
}

/**
 * @param {string} tabelaSelector - O seletor querySelector utilizado para selecionar a tabela em si. 
 * O elemento do seletor deve ser uma tabela, e o querySelector deve ser um id ou uma classe.
 * @param {number[]} mediasMaterias 
 * @param {number} mediaGeral 
 * @param {number} casasAposVirgula - Quantidade de casas decimais para conter em todos os valores.
 */
  function atualizarMedias(tabelaSelector, mediasMaterias, mediaGeral, casasAposVirgula) {
    const tabelaLinhas = document.querySelectorAll(`table${tabelaSelector} tbody tr`);

  for (let i = 0; i < tabelaLinhas.length; i++) {
    const linha = tabelaLinhas[i];
    linha.children[linha.children.length-1].textContent = arredondar(mediasMaterias[i], casasAposVirgula);
  }

  document.getElementById("notas-valor-media-geral").textContent = arredondar(mediaGeral, casasAposVirgula);
}

function arredondar(numero, precisao) {
    return parseFloat(Number(numero).toPrecision(precisao+1));
}
