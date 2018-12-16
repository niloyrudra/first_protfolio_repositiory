
let time = 5000, bubble, bubbleContainer, innerBubble, timeout, cleartimeOut = [];
let img = $(".slide-container").children;

function create(element) {
    return document.createElement(element);
}

bubbleContainer = create('div');
bubbleContainer.id = "bubble-container";
$('.slide-container').appendChild(bubbleContainer);

let slideImgArr = [];

    for(let i = 0; i < _('.slide').length; i++) {
        bubble = create('div');
        innerBubble = create('div');
        bubble.classList.add('bubble');
        innerBubble.classList.add('bubble-inner');
        bubble.appendChild(innerBubble);
        bubbleContainer.appendChild(bubble);
        $(".slide-container").children[i].dataset.index = i;
        slideImgArr.push($(".slide-container").children[i]);
        bubble.dataset.index = i;             
    }

console.log(slideImgArr);


function repeatIt(e) {
    e.classList.remove('default');
    e.classList.add('show');
    
    _(".bubble").forEach(e => e.classList.remove('active'));
    bubbleContainer.children[e.dataset.index].classList.add('active');
    
    setTimeout(() => {
        e.classList.remove('show');
        e.classList.add('swap');
        setTimeout(() => {
            e.classList.remove('swap');
            e.classList.add('default');
            if (_(".slide").length > 3) {
                let d = (_(".slide").length - 3) + 1;
                setTimeout(() =>{ repeatIt(e); }, time * d);
            }
            if (_(".slide").length == 3){
                setTimeout(() =>{ repeatIt(e); }, time);
            }
        },time);
    },time);
}


window.addEventListener("DOMContentLoaded", () => {
    _(".slide").forEach(e => e.classList.add('default'));

    for (let i = 0; i < _(".slide").length; i++) {
        timeOut = setTimeout(() =>{ repeatIt(img[i]); }, time * i);      
    }

    cleartimeOut.push(timeout);

    _(".bubble").forEach(e => {    
        e.addEventListener("click", e => {
            console.log(e.target.parentElement);
            console.log(cleartimeOut);
        })
        
    });
     
});



/*
if (_(".slide").length > 3) {
    if(e.classList.contains('swap')){
        e.style.transitionDelay = "160ms";
    }else{
        e.style.transitionDelay = "0ms";
    }
    
}
if (_(".slide").length == 3){
    e.style.transitionDelay = "60ms";
}
*/
