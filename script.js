// Acessa a câmera
navigator.mediaDevices.getUserMedia({ video: true })
    .then(function(stream) {
        const video = document.getElementById('camera-stream');
        video.srcObject = stream;
    })
    .catch(function(err) {
        console.error("Erro ao acessar a câmera: ", err);
    });

// Monitora os movimentos do dispositivo
window.addEventListener('deviceorientation', function(event) {
    const logo = document.getElementById('logo');
    
    // Usa o ângulo da inclinação do dispositivo para ajustar o tamanho da logo
    const scaleFactor = Math.max(0.5, Math.min(2, (event.beta / 90))); // beta varia entre -90 e 90
    const newSize = 100 * scaleFactor;  // Tamanho base da logo é 100px

    logo.style.width = `${newSize}px`;
    logo.style.height = `${newSize}px`;
});
