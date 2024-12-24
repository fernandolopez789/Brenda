window.onload = () => {
    const body = document.body;

    // Genera corazones dinámicamente
    for (let i = 0; i < 30; i++) {
        const heart = document.createElement('div');
        heart.classList.add('heart');

        // Posición aleatoria
        heart.style.left = `${Math.random() * window.innerWidth}px`;
        heart.style.top = `${Math.random() * window.innerHeight}px`;

        // Tamaño aleatorio
        const size = Math.random() * 20 + 30; // Entre 30px y 50px
        heart.style.width = `${size}px`;
        heart.style.height = `${size}px`;

        // Duración aleatoria de la animación
        heart.style.animationDuration = `${Math.random() * 3 + 3}s`; // Entre 3s y 6s

        body.appendChild(heart);
    }
};
