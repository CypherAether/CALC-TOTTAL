// Função para exibir o resultado
function calculadora() {
  var resultado = document.getElementById("resultado").value;
  window.alert("O resultado é: " + resultado);
}

// Função para somar
function somar(x, y) {
  var resultado = parseFloat(x) + parseFloat(y);
  document.getElementById("resultado").value = resultado;
}

// Função para subtrair
function subtrair(a, b) {
  var resultado = parseFloat(a) - parseFloat(b);
  document.getElementById("resultado").value = resultado;
}

// Função para multiplicar
function multiplicar(a, b) {
  var resultado = parseFloat(a) * parseFloat(b);
  document.getElementById("resultado").value = resultado;
}

// Função para dividir
function dividir(a, b) {
  if (parseFloat(b) === 0) {
    document.getElementById("resultado").value = "Erro: Divisão por zero";
  } else {
    var resultado = parseFloat(a) / parseFloat(b);
    document.getElementById("resultado").value = resultado;
  }
}

// Função para calcular a média
function calcularMedia(nome, nota1, nota2, nota3, nota4) {
  var media =
    (parseFloat(nota1) +
      parseFloat(nota2) +
      parseFloat(nota3) +
      parseFloat(nota4)) /
    4;
  document.getElementById("resultadoMedia").innerHTML =
    "Olá, " + nome + "! Sua média é: " + media;
}

// Função para calcular o volume
function calcularVol() {
  var altura = document.getElementById("alt").value;
  var largura = document.getElementById("lar").value;
  var profundidade = document.getElementById("fundi").value;
  if (altura != "" && largura != "" && profundidade != "") {
    var volume = parseFloat(altura) * parseFloat(largura) * parseFloat(profundidade);
    document.getElementById("Vol").value = volume.toFixed(2);
  } else {
    document.getElementById("Vol").value = "Erro: Preencha todos os campos";
  }
  window.alert("Seu volume é de "+volume);
}

// Função para verificar se um número é par ou ímpar
function jogar(num) {
  if (num % 2 == 0) {
    document.getElementById("parimpar").value = "Par";
  } else {
    document.getElementById("parimpar").value = "Ímpar";
  }
}

// Função para calcular a média (deve ser chamada com parâmetros)
function calcularMedia(n, a, b, c, d) {
  var nome = n;
  var nota1 = parseFloat(a);
  var nota2 = parseFloat(b);
  var nota3 = parseFloat(c);
  var nota4 = parseFloat(d);

  // Calcula a média
  var media = (nota1 + nota2 + nota3 + nota4) / 4;

  if (media >= 7) {
    window.alert(nome + " você está aprovado.");
  } else if (media == 5) {
    window.alert(nome + " está de recuperação.");
  } else {
    window.alert(nome + " você está reprovado.");
  }
}

// Função para exibir o dia da semana
function exibirDia(dia) {
  if (dia == 1) {
    window.alert("Domingo");
  } else if (dia == 2) {
    window.alert("Segunda-feira");
  } else if (dia == 3) {
    window.alert("Terça-feira");
  } else if (dia == 4) {
    window.alert("Quarta-feira");
  } else if (dia == 5) {
    window.alert("Quinta-feira");
  } else if (dia == 6) {
    window.alert("Sexta-feira");
  } else if (dia == 7) {
    window.alert("Sábado");
  } else {
    window.alert("Dia inválido");
  }
}

var u = "123";
var d = "123";

// Função para o sistema de login
function entrarsistema(user, pass) {
  if (user == u && pass == d) {
    window.alert("Bem-vindo ao sistema.");
    window.location.replace("/desafio.html");
  } else if (user == "" && pass == "") {
    window.alert("Preencha os campos.");
  } else if (user != u && pass == d) {
    window.alert("Usuário incorreto.");
  } else if (user == u && pass != d) {
    window.alert("Senha incorreta.");
  } else {
    window.alert("Usuário ou senha inválidos.");
  }
}
