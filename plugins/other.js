document.addEventListener('DOMContentLoaded', () => {

    document.addEventListener('click', function(e) {
        const item = e.target.closest('.pagination-item');
        if (!item) return;
        setTimeout(function() {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        },400)
    });

})