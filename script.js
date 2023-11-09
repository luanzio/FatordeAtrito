function calcularFatorAtrito() {
  // Obtendo os valores dos campos de entrada
  const reynolds = parseFloat(document.getElementById('reynolds').value);
  const rugosidade = parseFloat(document.getElementById('rugosidade').value);

  // Calculando o fator de atrito usando a equação de Colebrook-White
  let fatorAtrito;

  // Iteração para encontrar o fator de atrito usando o método de Newton-Raphson
  let erro = 1e-6; // Tolerância de erro
  let fatorAtritoInicial = 0.02; // Valor inicial para o fator de atrito
  let iteracoes = 0;
  let maxIteracoes = 1000; // Limite de iterações

  do {
    fatorAtrito = fatorAtritoInicial;
    const parteEsquerda =
      -2 *
      Math.log10(
        2.51 / (reynolds * Math.sqrt(fatorAtrito)) + rugosidade / (3.7 * 2.51)
      );
    const parteDireita = 1 / Math.sqrt(fatorAtrito);
    fatorAtritoInicial = Math.pow(parteEsquerda + parteDireita, -2);
    iteracoes++;
  } while (
    Math.abs(fatorAtrito - fatorAtritoInicial) > erro &&
    iteracoes < maxIteracoes
  );

  // Exibindo o resultado na entrada de texto
  document.getElementById('resultado').value = fatorAtrito.toFixed(6);
}
