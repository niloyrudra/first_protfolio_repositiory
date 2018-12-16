window.addEventListener("resize", () => {
        ($('body').offsetWidth > 991)? $(".header").classList.remove('close') : $(".header").classList.add('close');
        //   CONTACT SECTION'S MARGIN BOTTOM CALCULATION TO REVEAL FOOTER
        $(".contact").style.marginBottom = $("#footer").offsetHeight + "px";
});

function DOMelementloaded() {
        animShowcase($('.showcase-content h1'), 'anim', 800, 'forwards', 150);
        animShowcase($('.showcase-content h1 span'), 'anim', 800, 'forwards', 300);
        animShowcase($('.tag-logo'), 'logo', 600, 'forwards', 1000);
        animShowcase($('.showcase-content h4'), 'swapL', 800, 'forwards', 2000);
        animShowcase($('.btn-div'), 'swapR', 800, 'forwards', 2000);

        //   CONTACT SECTION'S MARGIN BOTTOM CALCULATION TO REVEAL FOOTER
        $(".contact").style.marginBottom = $("#footer").offsetHeight + "px";
        
}

window.addEventListener("load", DOMelementloaded);