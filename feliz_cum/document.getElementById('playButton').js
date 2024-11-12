document.getElementById('playButton').addEventListener('click', () => {
    const music = document.getElementById('backgroundMusic');
    if (music.paused) {
        music.play();
        document.getElementById('playButton').textContent = '🔊 Música Reproduciéndose 🔊';
    } else {
        music.pause();
        document.getElementById('playButton').textContent = '🎶 Reproducir Música 🎶';
    }
});
