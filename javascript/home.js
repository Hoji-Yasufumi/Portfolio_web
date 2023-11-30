const textPROFILE = document.getElementById('title_text');

window.addEventListener('scroll', function () {
    let scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    if (scrollTop >= 400) {
        textPROFILE.style.color = '#2f2f2f';
    } else {
        textPROFILE.style.color = '#ffffff';
    }
});