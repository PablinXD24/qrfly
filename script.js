// Acessa a câmera traseira
navigator.mediaDevices.getUserMedia({
    video: { facingMode: { exact: "environment" } } // Define para a câmera traseira
})
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
    
    // Ajusta o tamanho da logo baseado na inclinação do dispositivo (beta)
    const scaleFactor = Math.max(0.5, Math.min(2, (event.beta / 90)));
    const newSize = 100 * scaleFactor;

    logo.style.width = `${newSize}px`;
    logo.style.height = `${newSize}px`;
});

// Permite mover a logo com o toque
let touchOffsetX = 0;
let touchOffsetY = 0;
const logo = document.getElementById('logo');

// Detecta quando o toque começa
logo.addEventListener('touchstart', function(event) {
    const touch = event.touches[0];
    const logoRect = logo.getBoundingClientRect();

    // Calcula o deslocamento do toque em relação à logo
    touchOffsetX = touch.clientX - logoRect.left;
    touchOffsetY = touch.clientY - logoRect.top;
});

// Move a logo conforme o toque
logo.addEventListener('touchmove', function(event) {
    const touch = event.touches[0];
    
    // Calcula a nova posição da logo
    const newX = touch.clientX - touchOffsetX;
    const newY = touch.clientY - touchOffsetY;

    logo.style.left = `${newX}px`;
    logo.style.top = `${newY}px`;
});
