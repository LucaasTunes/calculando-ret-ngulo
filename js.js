function area(length, width) {
  return length * width;
}

document.getElementById("rectangleForm").addEventListener("submit", function (event) {
  event.preventDefault();

  // Obtém os valores de comprimento e largura inseridos pelo usuário
  let userLength = parseFloat(document.getElementById("length").value);
  let userWidth = parseFloat(document.getElementById("width").value);

  // Chama a função area com os valores inseridos pelo usuário
  let result = area(userLength, userWidth);

  // Exibe o resultado no parágrafo com id "result"
  document.getElementById("result").textContent = "Área do retângulo: " + result;
});
