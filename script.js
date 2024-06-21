document.addEventListener('DOMContentLoaded', (event) => {
    const chamas = document.getElementById('chamas');
    const gelo = document.getElementById('gelo');

    console.log('Chamas:', chamas);
    console.log('Gelo:', gelo);

    // Definindo opacidade inicial
    chamas.style.opacity = '1';
    gelo.style.opacity = '0.5';

    // Função para alternar entre mostrar mais chamas ou mais gelo
    function alternarElementos() {
        console.log('Alternando elementos');
        if (chamas.style.opacity === '1') {
            chamas.style.opacity = '0.5';
            gelo.style.opacity = '1';
        } else {
            chamas.style.opacity = '1';
            gelo.style.opacity = '0.5';
        }
    }

    // Chama a função alternarElementos a cada intervalo de tempo
    setInterval(alternarElementos, 3000);
});