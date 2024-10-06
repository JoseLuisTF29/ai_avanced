document.getElementById('guessButton').addEventListener('click', function() {
    const userNumber = parseInt(document.getElementById('userNumber').value);
    const outputDiv = document.getElementById('output');
    const numberDisplay = document.getElementById('numberDisplay');

    if (isNaN(userNumber) || userNumber < 1 || userNumber > 100) {
        outputDiv.innerHTML = "Por favor, introduce un número válido entre 1 y 100.";
        outputDiv.style.opacity = 1;
        numberDisplay.style.opacity = 0; // Hide previous number
        return;
    }

    outputDiv.innerHTML = "Iniciando el análisis... <br> Activando la IA...";
    outputDiv.style.opacity = 1;
    numberDisplay.style.opacity = 0; // Hide previous number

    // Simulando un proceso de IA avanzado
    setTimeout(() => {
        outputDiv.innerHTML = "Realizando cálculos complejos... <br> Procesando datos de alta velocidad...";
    }, 2000); // Después de 2 segundos

    setTimeout(() => {
        outputDiv.innerHTML = "¡He obtenido una predicción precisa! 🧠🔍";
        numberDisplay.innerHTML = `La IA ha adivinado tu númeroXD: <strong>${userNumber}</strong>!`;
        numberDisplay.style.opacity = 1; // Show the number
    }, 5000); // Después de 5 segundos
});
