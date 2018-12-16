let scrollY = 0;
const speed = 24;
const distance = 40;

function scrollTo(ID) {
    let targetY = $(`${ID}`).offsetTop + distance - $("#header").offsetHeight;
    let currentY = window.pageYOffset;
    let bodyHeight = $("body").offsetHeight;
    let Y_POSITION = currentY + window.innerHeight;    

    let animator = setTimeout('scrollTo(\''+ID+'\')', speed);

    if (Y_POSITION >= bodyHeight) {
        clearTimeout(animator);
    } else {
        if (currentY < targetY - distance) {
            scrollY = currentY + distance;
            window.scroll(0, scrollY);
        } else {
            clearTimeout(animator);
        }
    }
    
}

function scrollToSiblings(ID) {
    let targetY = $(`${ID}`).offsetTop + distance - $("#header").offsetHeight;
    let currentY = window.pageYOffset;   

    let animator = setTimeout('scrollToSiblings(\''+ID+'\')', speed);

    if (currentY > targetY) {
        scrollY = currentY - distance;
        window.scroll(0, scrollY);
    } else {
        clearTimeout(animator);
    }
    
}

_(".nav-top ul li a").forEach( e => {
    e.addEventListener("click", e => {
        e.preventDefault();
        let targetID = e.target.getAttribute("href");
        scrollTo(`${targetID}`);
        scrollToSiblings(`${targetID}`);
    });
});

$(".logo").addEventListener("click", e => {
    e.preventDefault();
    let ID = e.target.parentElement.parentElement.getAttribute("href");
    scrollToSiblings(`${ID}`);

    $('.mobile-menu span').classList.remove('active');
    $('.mobile-menu').classList.remove('close');
    $('.mobile-menu').dataset.status = "off";
    _('nav.nav-top ul li').forEach( e => e.classList.remove('ease-in'));
    $('.logo').classList.remove('logo-in');
    $('#header').classList.remove('show');
    $('#header').classList.add('close');

});