console.log('Happy developing ✨')

document.addEventListener('click', function(e) {
    const item = e.target.closest('.pagination-item');
    if (!item) return;
    window.scrollTo({ top: 0, behavior: 'smooth' });
});