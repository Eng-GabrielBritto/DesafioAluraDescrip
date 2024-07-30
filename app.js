function criptografarTexto(texto) {
  const mapaVogais = {
    "a": "ai",
    "e": "enter",
    "i": "imes",
    "o": "ober",
    "u": "ufat"
  };
  
  let textoCriptografado = "";

  for (let letra of texto.toLowerCase()) {
    if (mapaVogais.hasOwnProperty(letra)) {
      textoCriptografado += mapaVogais[letra];
    } else {
      textoCriptografado += letra;
    }
  }

  return textoCriptografado;
}

function descriptografarTexto(textoCriptografado) {

  const mapaReverso = {
    "ai": "a",
    "enter": "e",
    "imes": "i",
    "ober": "o",
    "ufat": "u"
  };

  const chaves = Object.keys(mapaReverso).sort((a, b) => b.length - a.length);

  let textoDescriptografado = textoCriptografado;

  for (let codigo of chaves) {
    const vogal = mapaReverso[codigo];
    const regex = new RegExp(codigo, 'g');
    textoDescriptografado = textoDescriptografado.replace(regex, vogal);
  }

  return textoDescriptografado;
}

function exibirTextoNaTela(tag, texto) {
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
}

function esconder(el){
    document.getElementById(el).style.display = "none";
}

function mostrar(el){
    document.getElementById(el).style.display = "block";
}

const btn = document.querySelector("#criptografar");
btn.addEventListener("click", function(e) {
    e.preventDefault();
    const inputElement = document.querySelector("#texto-original");
    const value = inputElement.value;
    const textoCriptografado = criptografarTexto(value);
    exibirTextoNaTela('#resultado', textoCriptografado);
    mostrar('btn_copiar')
    mostrar('resultado')
});

const btn2 = document.querySelector("#descriptografar");
btn2.addEventListener("click", function(e) {
    e.preventDefault();
    const inputElement = document.querySelector("#texto-original");
    const value = inputElement.value;
    const textoDescriptografado = descriptografarTexto(value);
    exibirTextoNaTela('#resultado', textoDescriptografado);
    mostrar('btn_copiar')
    mostrar('resultado')
});

document.getElementById('btn_copiar').addEventListener('click', clipboardCopy);
async function clipboardCopy() {
  let text = document.querySelector("#resultado").value;
  await navigator.clipboard.writeText(text);
} 

