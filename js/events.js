//  MOBILE MENU TRIGGER EVENT
function mobMenu(e) {
    if(e.target == $('.mobile-menu') || e.target == $('.mobile-menu span') && $('.mobile-menu').dataset.status == "off") {
        $('.mobile-menu span').classList.add('active');
        $('.mobile-menu').classList.add('close');
        $('.mobile-menu').dataset.status = "on";
        $('#header').classList.remove('close');
        $('#header').classList.add('show');
        _('nav.nav-top ul li').forEach( e => e.classList.add('ease-in'));
        $('.logo').classList.add('logo-in');
    } else {
        $('.mobile-menu span').classList.remove('active');
        $('.mobile-menu').classList.remove('close');
        $('.mobile-menu').dataset.status = "off";
        _('nav.nav-top ul li').forEach( e => e.classList.remove('ease-in'));
        $('.logo').classList.remove('logo-in');
        $('#header').classList.remove('show');
        $('#header').classList.add('close');
    }
}

$('.mobile-menu').addEventListener("click", mobMenu);

_(".nav-top ul li a").forEach(e => e.addEventListener("click", () => {
    $('.mobile-menu span').classList.remove('active');
    $('.mobile-menu').classList.remove('close');
    $('.mobile-menu').dataset.status = "off";
    _('nav.nav-top ul li').forEach( e => e.classList.remove('ease-in'));
    $('.logo').classList.remove('logo-in');
    $('#header').classList.remove('show');
    $('#header').classList.add('close');
}));



//  PORTFOLIO TRIGGER EVENT
_(".js-trigger img").forEach( e => {
    e.addEventListener("click", e => {

        const trigger = e.target.parentElement;

        for (let i = 0; i < $(".portfolio-showcase").children.length; i++) {
            $(".portfolio-showcase").children[i].classList.add('slide-down');
        }
        

        // MANIPULATE TARGET SHOWCASE
        setTimeout(() => {
            for (let i = 0; i < $(".portfolio-showcase").children.length; i++) {
                $(".portfolio-showcase").children[i].classList.remove('slide-down');
            }
            $(".portfolio-showcase .featured-img").children[0].src = trigger.firstElementChild.getAttribute("src");
            $(".portfolio-showcase .description").children[0].innerHTML = trigger.children[1].firstElementChild.innerHTML + ' | ' + trigger.children[2].firstElementChild.innerHTML;
            $(".portfolio-showcase .description").children[1].innerHTML = trigger.children[2].children[1].innerHTML;
            $(".portfolio-showcase .description").children[2].innerHTML = trigger.children[2].lastElementChild.innerHTML;
        }, 420);   

    });
});

function revealSearchArea(e) {
    $("body").classList.add("no-scroll");
    $(".search-overlay").classList.add("reveal-overlay");   
}

//  SERACH TRIGGER EVENT
$("#search-trigger__open").addEventListener("click", revealSearchArea);


function closeSearchArea(e) {
    $("body").classList.remove("no-scroll");
    $(".search-overlay").classList.remove("reveal-overlay");   
}

//  SERACH TRIGGER EVENT
$("#search-trigger__close").addEventListener("click", closeSearchArea);