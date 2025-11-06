const playBtn = document.getElementById('playMusic');
const audio = document.getElementById('bgMusic');
const confettiCanvas = document.getElementById('confetti');
const ctx = confettiCanvas.getContext('2d');
const gallery = document.getElementById('gallery');
const toggleGalleryBtn = document.getElementById('toggleGallery');
const speakBtn = document.getElementById('speakGreeting');



toggleGalleryBtn.addEventListener('click', () => {
    gallery.classList.toggle('hidden');
});

speakBtn.addEventListener('click', () => {
    const message = "Happy Birthday Papaluu! May all your dreams come true ✨ and your smile never fade, just like the joy you bring to everyone around you. Wishing you a day filled with love, laughter, and unforgettable moments. Cheers to another year of amazing adventures ahead! god bless you thalli... 🎉🎂";
    const utterance = new SpeechSynthesisUtterance(message);
    utterance.rate = 0.95;
    utterance.pitch = 1.1;
    utterance.lang = 'en-US';
    speechSynthesis.speak(utterance);
});

function resizeCanvas() {
    confettiCanvas.width = window.innerWidth;
    confettiCanvas.height = window.innerHeight;
}
resizeCanvas();
window.addEventListener('resize', resizeCanvas);

function spawnConfetti() {
    let pieces = [];
    for (let i = 0; i < 100; i++) {
        pieces.push({
            x: Math.random() * confettiCanvas.width,
            y: Math.random() * -confettiCanvas.height,
            vx: (Math.random() - 0.5) * 4,
            vy: 2 + Math.random() * 4,
            size: 6 + Math.random() * 8,
            color: ['#ff6fa3', '#ffd166', '#9b5de5', '#00bbf9'][Math.floor(Math.random() * 4)],
            rot: Math.random() * 360
        });
    }

    function frame() {
        ctx.clearRect(0, 0, confettiCanvas.width, confettiCanvas.height);
        pieces.forEach(p => {
            p.x += p.vx;
            p.y += p.vy;
            p.vy += 0.05;
            p.rot += 5;

            ctx.save();
            ctx.translate(p.x, p.y);
            ctx.rotate(p.rot * Math.PI / 180);
            ctx.fillStyle = p.color;
            ctx.fillRect(-p.size / 2, -p.size / 2, p.size, p.size * 0.6);
            ctx.restore();
        });

        pieces = pieces.filter(p => p.y < confettiCanvas.height + 50);

        if (pieces.length > 0) {
            requestAnimationFrame(frame);
        } else {
            ctx.clearRect(0, 0, confettiCanvas.width, confettiCanvas.height);
        }
    }

    requestAnimationFrame(frame);
}

document.getElementById('showConfetti').addEventListener('click', spawnConfetti);
document.addEventListener('mousemove', (e) => {
    const sparkle = document.createElement('div');
    sparkle.className = 'sparkle';
    sparkle.textContent = ['💖', '✨', '🌸', '💫'][Math.floor(Math.random() * 4)];
    sparkle.style.left = `${e.clientX}px`;
    sparkle.style.top = `${e.clientY}px`;
    document.body.appendChild(sparkle);

    setTimeout(() => {
        sparkle.remove();
    }, 1000);
});
document.addEventListener('mousemove', (e) => {
    const sparkle = document.createElement('div');
    sparkle.className = 'sparkle';
    sparkle.textContent = ['💖', '✨', '🌸', '💫'][Math.floor(Math.random() * 4)];
    sparkle.style.left = `${e.clientX}px`;
    sparkle.style.top = `${e.clientY}px`;
    sparkle.style.transform = `translate(-50%, -50%)`;
    document.body.appendChild(sparkle);

    setTimeout(() => {
        sparkle.remove();
    }, 1200);
});
document.getElementById('startSurprise').addEventListener('click', () => {
    const intro = document.getElementById('introScreen');
    intro.style.opacity = '0';
    setTimeout(() => {
        intro.style.display = 'none';
    }, 800);
});
document.getElementById('startSurprise').addEventListener('click', () => {
    const intro = document.getElementById('introScreen');
    intro.style.opacity = '0';
    setTimeout(() => {
        intro.style.display = 'none';
    }, 800);
});