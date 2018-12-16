
let time = 5000, bubble, bubbleContainer, innerBubble, timeOut = [],
eventsInnerTiomeout = [], timeouts = [], innerFuncTimeOut1, innerFuncTimeOut2, recallingMethod, afterEventTimeout1,afterEventTimeout2,afterEventTimeout3, slicedArr = [], sortedArr = [], slideImgArr = [], slideImg = $(".slide-container").children;

bubbleContainer = create('div');
bubbleContainer.id = "bubble-container";
$('#slide').appendChild(bubbleContainer);
for(let i = 0; i < _('.slide').length; i++) {
        bubble = create('div');
        innerBubble = create('div');
        bubble.classList.add('bubble');
        innerBubble.classList.add('bubble-inner');
        bubble.appendChild(innerBubble);
        bubbleContainer.appendChild(bubble);
        slideImg[i].dataset.index = i;
        slideImgArr.push($(".slide-container").children[i]);
        bubble.dataset.index = i;             
}


function repeatIt(e) {
    e.classList.remove('default');
    e.classList.add('show');
    _(".bubble").forEach(e => e.classList.remove('active'));
    bubbleContainer.children[e.dataset.index].classList.add('active');
    innerFuncTimeOut1 = setTimeout(() => {
        e.classList.remove('show');
        e.classList.add('swap');
        innerFuncTimeOut2 = setTimeout(() => {
            e.classList.remove('swap');
            e.classList.add('default');
            if (slideImgArr.length > 3) {
                let d = (slideImgArr.length - 3) + 1;
                recallingMethod = setTimeout(() =>{ repeatIt(e); }, time * d);
            }
            if (slideImgArr.length == 3){
                recallingMethod = setTimeout(() =>{ repeatIt(e); }, time);
            }
        },time);
    },time);
}

function repeatAfterEvent(e) {
    e.classList.remove('default');
    e.classList.add('show');
    _(".bubble").forEach(e => e.classList.remove('active'));
    bubbleContainer.children[e.dataset.index].classList.add('active');
    afterEventTimeout1 = setTimeout(() => {
        e.classList.remove('show');
        e.classList.add('swap');
        afterEventTimeout2 = setTimeout(() => {
            e.classList.remove('swap');
            e.classList.add('default');
            if (sortedArr.length > 3) {
                let d = (sortedArr.length - 3) + 1;
                afterEventTimeout3 = setTimeout(() =>{ repeatAfterEvent(e); }, time * d);
            }
            if (sortedArr.length === 3){
                afterEventTimeout3 = setTimeout(() =>{ repeatAfterEvent(e); }, time);
            }
        },time);
    },time);
}

function init() {
    for (let i = 0; i < slideImgArr.length; i++) {
        slideImgArr[i].classList.add('default');
        timeOut[i] = setTimeout(() =>{ repeatIt(slideImgArr[i]); }, time * i);      
    }
}

//  HELPER

function omittingINITMethod() {
    for(let i = 0; i < slideImg.length; i++) {
        clearTimeout(timeOut[i]);
        clearTimeout(eventsInnerTiomeout[i]);
        slideImg[i].classList.remove('swap');
        slideImg[i].classList.remove('show');
        slideImg[i].classList.remove('default');
    }
    clearTimeout(innerFuncTimeOut1);
    clearTimeout(innerFuncTimeOut2);
    clearTimeout(recallingMethod);
    clearTimeout(afterEventTimeout3);
    clearTimeout(afterEventTimeout2);
    clearTimeout(afterEventTimeout1);
}



//  CLICK EVENTS
for (let j = 0; j < slideImg.length; j++) {
    listen($(`.bubble[data-index='${j}']`), "click", arrangedArr);
}

function arrangedArr(e) {
    _(".bubble").forEach(e => e.classList.remove('active'));
    e.target.parentElement.classList.add('active');

    let index = e.target.parentElement.dataset.index;
    if(sortedArr.length === 0 && slideImgArr.length === 5) {
        slicedArr = slideImgArr.slice(index, slideImgArr.length);
        slideImgArr.splice(index, slideImgArr.length);
        sortedArr = slicedArr.concat(slideImgArr);
    }
    if(sortedArr.length === 5 && slideImgArr.length > 5) {
        slicedArr = sortedArr.slice(index, sortedArr.length);
        sortedArr = slicedArr.concat(sortedArr.splice(index, sortedArr.length));
    }
    
    omittingINITMethod();

    for (let i = 0; i < sortedArr.length; i++) {
        sortedArr[i].classList.add('default');
        eventsInnerTiomeout[i] = setTimeout(() =>{ repeatAfterEvent(sortedArr[i]); }, time * i);
    }


}


window.addEventListener("DOMContentLoaded", init);



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
