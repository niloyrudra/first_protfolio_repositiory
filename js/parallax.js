
function parallaxEffects() {
    let scrollY = window.scrollY;

    if($('body').offsetWidth > 520 && $("body").offsetWidth < 1200) {
        
        //  INTRO PARALLAX...
        if(scrollY > 0) {
            let value = Math.min(0, (scrollY - $('.intro').offsetTop / 3)/4);
            let opacity = Math.min(1, ((scrollY - $('.intro').offsetTop / 6)/4)/ 80);

            $('.intro-section h2').style.transform = `translateY(${Math.abs(value)}px)`;
            $('.intro-section p').style.transform = `translateY(${Math.abs(value)}px)`;
            $('.intro-section h2').style.opacity = `${opacity}`;
            $('.intro-section p').style.opacity = `${opacity}`;
        }

        //  ABOUT UPPER SECTION PARALLAX...
        if(scrollY > $('.intro').offsetHeight) {
            let value = Math.min(0, (scrollY - $('.about').offsetTop / 2));
            let opacity = Math.min(1, scrollY / 1500);

            $('.about .section-intro .intro-content').style.transform = `translateY(${value}px)`;
            $('.about .section-intro .intro-content').style.opacity = `${opacity}`;
        }

        if(scrollY > $('.intro').offsetHeight + ($('.about .section-intro').offsetHeight)) {
            let value = Math.min(0, (scrollY - ($('.about').offsetTop + $('.about-me img').offsetTop)));
            let opacity = Math.min(1, scrollY / 1600);

            $('.about-me img').style.transform = `translate(${value}px, ${Math.abs(value * 0.2)}px)`;
            $('.about-me img').style.opacity = `${opacity}`;
            $('.about-me__title').style.transform = `translate(${Math.abs(value)}px, ${value}px)`;
            $('.about-me__title').style.opacity = `${opacity}`;
        }

        if(scrollY > $('.about').offsetTop - $('.about .section-intro').offsetHeight) {
            let value = Math.min(0, (scrollY - ($('.about').offsetTop + $('.about-me__designation').offsetTop)));
            let opacity = Math.min(1, scrollY / 1800);

            $('.about-me__designation').style.transform = `translateX(${Math.abs(value)}px)`;
            $('.about-me__designation').style.opacity = `${opacity}`;

            $('.designation-bar').style.transform = `translate(${Math.abs(value)}px, ${value * -0.2}px)`;
            $('.designation-bar').style.opacity = `${opacity}`;

            //console.log(value, opacity);
        }

        if(scrollY > $('.about').offsetTop + $('.about .section-intro').offsetHeight / 2) {
            let value = Math.min(0, (scrollY - $('.about').offsetTop - ($('.about').offsetHeight / 3)));
            let opacity = Math.min(1, (scrollY / ($('.about').offsetTop * 1.5)));

            _('.about-me__content p').forEach(e => e.style.transform = `translateY(${Math.abs(value)}px)`);
            _('.about-me__content p').forEach(e => e.style.opacity = `${opacity}`);

            //console.log(value, opacity);
        }

    }

    if($("body").offsetWidth >= 1200) {

        //  INTRO PARALLAX...
        if(scrollY > 0) {
            let value = Math.min(0, (scrollY - $('.intro').offsetTop / 3)/4);
            let opacity = Math.min(1, ((scrollY - $('.intro').offsetTop / 6)/4)/ 80);

            $('.intro-section h2').style.transform = `translateY(${Math.abs(value)}px)`;
            $('.intro-section p').style.transform = `translateY(${Math.abs(value)}px)`;
            $('.intro-section h2').style.opacity = `${opacity}`;
            $('.intro-section p').style.opacity = `${opacity}`;
        }

        //  ABOUT UPPER SECTION PARALLAX...
        if(scrollY > $('.intro').offsetHeight) {
            let value = Math.min(0, (scrollY - $('.about').offsetTop / 2));
            let opacity = Math.min(1, scrollY / 1500);

            $('.about .section-intro .intro-content').style.transform = `translateY(${value}px)`;
            $('.about .section-intro .intro-content').style.opacity = `${opacity}`;
        }

        //  ABOUT ME SECTION PARALLAX...
        if(scrollY > $(".about").offsetTop + $(".about-me").offsetTop - (window.innerHeight * 1.6)) {
            let value = Math.min(0, (scrollY - ($(".about").offsetTop + $(".about-me").offsetTop - window.innerHeight * 0.70)) / 1.2);
            let opacity = Math.min(1, (scrollY - ($(".about").offsetTop + $(".about-me").offsetTop - window.innerHeight)) / 350);
            
            //  TRANSLATION X & Y
            $(".about-me img").style.transform = `translate(${value}px, 0px)`;
            $(".about-me__designation").style.transform = `translate(${Math.abs(value)}px, 0px)`;
            $("span.designation-bar").style.transform = `translate(${value * 0.5}px, 0px)`;
            $("p#para-one").style.transform = `translate(${Math.abs(value * 0.75)}px, 0px)`;

            //  OPACITY
            $(".about-me img").style.opacity = `${opacity}`;
            $(".about-me__designation").style.opacity = `${opacity}`;
            $("span.designation-bar").style.opacity = `${opacity}`;
            $("p#para-one").style.opacity = `${opacity}`;
        }

        if(scrollY > $(".about").offsetTop + $(".about-me").offsetTop - $("#header").offsetHeight - window.innerHeight ) {
            let value = Math.min(0, (scrollY - ($(".about").offsetTop + $(".about-me").offsetTop - $("#header").offsetHeight - window.innerHeight / 3)));
            let opacity = Math.min(1, (scrollY - ($(".about").offsetTop + $(".about-me").offsetTop - $("#header").offsetHeight - (window.innerHeight / 2))) / 300);
            //  TRANSLATION X & Y
            $("p#para-two").style.transform = `translate(${Math.abs(value * 0.5)}px, 0px)`;
            //  OPACITY
            $("p#para-two").style.opacity = `${opacity}`;            
        }

        //  ABOUT ME NAME SECTION PARALLAX...
        if(scrollY > $(".about").offsetTop + $(".about-me").offsetTop - $("#header").offsetHeight - window.innerHeight/2 ) {
            let value = Math.min(0, (scrollY - ($(".about").offsetTop + $(".about-me").offsetTop - window.innerHeight * 0.25)));
            let opacity = Math.min(1, (scrollY - ($(".about").offsetTop + $(".about-me").offsetTop - window.innerHeight/2.5 )) / 200);
            //  TRANSLATION X & Y
            $(".about-me__title").style.transform = `translate(${(value)}px, 0px)`;
            //  OPACITY
            $(".about-me__title").style.opacity = `${opacity}`;        
        }

        //  ABOUT ME SECTION PARALLAX...
        if(scrollY > $(".about").offsetTop + $(".about-me").offsetTop - (window.innerHeight * 1.6)) {
            let value = Math.min(0, (scrollY - ($(".about").offsetTop + $(".about-me").offsetTop - window.innerHeight * 0.70)) / 1.2);
            let opacity = Math.min(1, (scrollY - ($(".about").offsetTop + $(".about-me").offsetTop - window.innerHeight)) / 350);
            
            //  TRANSLATION X & Y
            $(".about-me img").style.transform = `translate(${value}px, 0px)`;
            $(".about-me__designation").style.transform = `translate(${Math.abs(value)}px, 0px)`;
            $("span.designation-bar").style.transform = `translate(${value * 0.5}px, 0px)`;
            $("p#para-one").style.transform = `translate(${Math.abs(value * 0.75)}px, 0px)`;

            //  OPACITY
            $(".about-me img").style.opacity = `${opacity}`;
            $(".about-me__designation").style.opacity = `${opacity}`;
            $("span.designation-bar").style.opacity = `${opacity}`;
            $("p#para-one").style.opacity = `${opacity}`;
        }
        



        // PORTFOLIO SHOWCASE SECTION...
        if(scrollY > ($(".portfolio").offsetTop + $("#portfolio").offsetTop) - (window.innerHeight * 1.6)) {
            
            let value = Math.min( 0, ( scrollY - ($(".portfolio").offsetTop + $("#portfolio").offsetTop) + (window.innerHeight * 0.75) ) );
            let opacity = Math.min(1, (scrollY - ($(".portfolio").offsetTop + $("#portfolio").offsetTop) + window.innerHeight) / 350);

            $(".portfolio-showcase").style.transform = `translate(${value}px, 0px)`;
            $(".portfolio-showcase").style.opacity = `${opacity}`;
        }
        // PORTFOLIO ITEM SECTIONS...
        // ITEM ONE
        if(scrollY > ($(".portfolio").offsetTop + $("#portfolio").offsetTop) - (window.innerHeight * 1.6)) {
            let value = Math.min(0, (scrollY - ($(".portfolio").offsetTop + $("#portfolio").offsetTop) + window.innerHeight * 0.70));
            let opacity = Math.min(1, (scrollY - ($(".portfolio").offsetTop + $("#portfolio").offsetTop) + window.innerHeight) / 350);
            
            $("#item1").style.transform = `translate(${Math.abs(value)}px, 0px)`;
            $("#item1").style.opacity = `${opacity}`;
        }
        // ITEM TWO
        if(scrollY > ($(".portfolio").offsetTop + $("#portfolio").offsetTop + $("#item2").offsetTop) - (window.innerHeight * 1.6)) {
            let value = Math.min(0, (scrollY - ($(".portfolio").offsetTop + $("#portfolio").offsetTop + $("#item2").offsetTop) + window.innerHeight * 0.70));
            let opacity = Math.min(1, (scrollY - ($(".portfolio").offsetTop + $("#portfolio").offsetTop + $("#item2").offsetTop) + window.innerHeight) / 350);           

            $("#item2").style.transform = `translate(${Math.abs(value)}px, 0px)`;
            $("#item2").style.opacity = `${opacity}`;         
        }
        // ITEM THREE
        if(scrollY > ($(".portfolio").offsetTop + $("#portfolio").offsetTop + $("#item3").offsetTop) - (window.innerHeight * 1.6)) {
            let value = Math.min(0, (scrollY - ($(".portfolio").offsetTop + $("#portfolio").offsetTop + $("#item3").offsetTop) + window.innerHeight * 0.70));
            let opacity = Math.min(1, (scrollY - ($(".portfolio").offsetTop + $("#portfolio").offsetTop + $("#item3").offsetTop) + window.innerHeight) / 350);

            $("#item3").style.transform = `translate(${Math.abs(value)}px, 0px)`;
            $("#item3").style.opacity = `${opacity}`;          
        }
        // ITEM FOUR
        if(scrollY > ($(".portfolio").offsetTop + $("#portfolio").offsetTop + $("#item4").offsetTop) - (window.innerHeight * 1.6)) {
            let value = Math.min(0, (scrollY - ($(".portfolio").offsetTop + $("#portfolio").offsetTop + $("#item4").offsetTop) + window.innerHeight * 0.70));
            let opacity = Math.min(1, (scrollY - ($(".portfolio").offsetTop + $("#portfolio").offsetTop + $("#item4").offsetTop) + window.innerHeight) / 350);

            $("#item4").style.transform = `translate(${Math.abs(value)}px, 0px)`;
            $("#item4").style.opacity = `${opacity}`;         
        }
        // ITEM FIVE
        if(scrollY > ($(".portfolio").offsetTop + $("#portfolio").offsetTop + $("#item5").offsetTop) - (window.innerHeight * 1.6)) {
            let value = Math.min(0, (scrollY - ($(".portfolio").offsetTop + $("#portfolio").offsetTop + $("#item5").offsetTop) + window.innerHeight * 0.70));
            let opacity = Math.min(1, (scrollY - ($(".portfolio").offsetTop + $("#portfolio").offsetTop + $("#item5").offsetTop) + window.innerHeight) / 350);

            $("#item5").style.transform = `translate(${Math.abs(value)}px, 0px)`;
            $("#item5").style.opacity = `${opacity}`;          
        }




        // SERVICE SECTION...
        if(scrollY > $(".service").offsetTop - window.innerHeight + $(".service .section-intro").offsetHeight) {
            let value = Math.min(0, (scrollY - $(".service").offsetTop));
            let opacity = Math.min(1, (scrollY - ($(".service").offsetTop + $(".cards").offsetTop - window.innerHeight)) / 500);            
            //  TRANSLATION X & Y
            $(".card:nth-child(1)").style.transform = `translate(${value}px, ${Math.abs(value * 0.4)}px)`;
            $(".card:nth-child(2)").style.transform = `translateY(${Math.abs(value)}px)`;
            $(".card:nth-child(3)").style.transform = `translate(${Math.abs(value)}px, ${Math.abs(value * 0.4)}px)`;

            //  OPACITY
            $(".card:nth-child(1)").style.opacity = `${opacity}`;
            $(".card:nth-child(2)").style.opacity = `${opacity}`;
            $(".card:nth-child(3)").style.opacity = `${opacity}`;
            
        }
    }

}


window.addEventListener("scroll", parallaxEffects);