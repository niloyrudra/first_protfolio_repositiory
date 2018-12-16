function headershink() {

    if (window.scrollY > $("#top.showcase").offsetHeight - $("#header").offsetHeight) {
        $("#header").classList.add("shrink");    
    }else{
        $("#header").classList.remove("shrink");
    }
}

window.addEventListener("scroll", headershink);