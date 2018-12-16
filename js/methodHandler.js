//  DOM SINGLE ELEMENT SELECTOR
function $(element) {
    return document.querySelector(element);
}

//  DOM ARRAY ELEMENT SELECTOR
function _(element) {
    return document.querySelectorAll(element);
}

//  ANIMATION HANDLER
function animShowcase(element, anim, duration, type, delay) {
    element.style.animation = `${anim} ${duration}ms ${type} ${delay}ms`;
}

//  CREATE DOM ELEMENTS
function create(element) {
    return document.createElement(element);
}

//  CREATING EVENTLISTENER

function listen(e, eve, method) {
    return e.addEventListener(eve, method);
}

