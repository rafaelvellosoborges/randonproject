
const botao = document.querySelector(".botao");
const inputDe = document.querySelector(".de");
const inputAte = document.querySelector(".ate");
const resultado = document.getElementById("resultado");

botao.addEventListener("click", () => {
    const numeroMin = parseInt(inputDe.value);
    const numeroMax = parseInt(inputAte.value);

    if (isNaN(numeroMin) || isNaN(numeroMax)) {
        resultado.style.display = "block";
        resultado.textContent = "⚠️ Digite os dois números!";
        return;
    }

    if (numeroMin >= numeroMax) {
        resultado.style.display = "block";
        resultado.textContent = "⚠️ O valor 'De' deve ser menor que 'Até'.";
        return;
    }

    const numeroSorteado = Math.floor(Math.random() * (numeroMax - numeroMin + 1)) + numeroMin;

    resultado.style.display = "block";
    resultado.textContent = `🎲 Número sorteado: ${numeroSorteado}`;
});
