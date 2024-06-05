/* LabScore pt.1 - Exercício 1 */
let listaNotas = [8, 10, 7, 5];

function calculaMedia(notas) {
  let soma = 0;
  for (let i = 0; i < notas.length; i++) {
    soma += notas[i];
  }
  let media = soma / notas.length;
  return media;
}

let mediaNotas = calculaMedia(listaNotas);

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
function entrevistaAluno() {
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

  let media = calculaMedia(dadosMateria.notas);

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

entrevistaAluno();
