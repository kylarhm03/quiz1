const box = document.createElement('div');
box.className = 'lightbox';
box.innerHTML = '<img alt=""><button aria-label="Tutup">×</button>';
document.body.append(box);

const big = box.querySelector('img');
const closeBox = () => box.classList.remove('open');

document.querySelectorAll('.pic, .shot, .photo img').forEach(img => {
    img.tabIndex = 0;
    img.addEventListener('click', () => {
        big.src = img.src;
        big.alt = img.alt;
        box.classList.add('open');
    });
    img.addEventListener('keydown', e => {
        if (e.key === 'Enter') img.click();
    });
});

box.addEventListener('click', e => {
    if (e.target !== big) closeBox();
});
document.addEventListener('keydown', e => {
    if (e.key === 'Escape') closeBox();
});

const reduceMotion = matchMedia('(prefers-reduced-motion: reduce)').matches;

if (!reduceMotion && 'IntersectionObserver' in window) {
    const io = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('in');
                io.unobserve(entry.target);
            }
        });
    }, { threshold: 0.15 });

    document.querySelectorAll('.polaroid, .card, .place, .tile, .pic').forEach(el => {
        el.classList.add('reveal');
        io.observe(el);
    });
}