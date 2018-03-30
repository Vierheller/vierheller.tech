/*
    Author: Jan-Niklas Vierheller
    Description:
        Set of function to help make the navbar to
            1. Stick to top when scroll down
            2. Disappear/Reappear when scrolling up/down
            3. Reappear when mouse moves to top
 */

var openedByMouse = false;
var isSticky = getCurrentY() >= getNavWrapY();
var lastScroll = 0;
var myMouseY = 0;
// Enforce checks, so animation is not constantly invoked
var isNavOpen = true;

/*
    Document and Element Events
 */

$(document).ready(function () {
    scrollNavStickyBehaviour();
});

$(document).scroll(function () {
    scrollNavStickyBehaviour();

    scrollNavVisibilityBehaviour();
});


$(document).mousemove(function (e) {
    mouseMoveNavVisibilityBehaviour(e.clientY);
});

$("#btn-landing").click(function(e) {
    animateTo("#navWrap", 800)
});


/*
    Mouse Behaviour
 */

function mouseMoveNavVisibilityBehaviour(mouseY) {
    myMouseY = mouseY;
    if(mouseY <= getNavHeight()){
        openNav(true)
    }else{
        if(openedByMouse){
            closeNav()
        }
    }
}

/*
    Scroll Behaviour
 */

function scrollNavStickyBehaviour() {
    //stick nav to top of page
    if (getCurrentY() >= getNavWrapY()) {
        isSticky = true;
        getNav().addClass('sticky');
    } else {
        isSticky = false;
        getNav().removeClass('sticky');
    }
}

function scrollNavVisibilityBehaviour() {
    if(
        getCurrentY() >= lastScroll                          //Only disable navbar if scrolled down
        && getCurrentY() >= getNavWrapY() + getNavHeight()   //Only disable navbar if the viewport is below the navbar
        && myMouseY > getNavHeight()                         //Only disable navbar if mouse is not in the navbar area
    ){
        closeNav();
    }

    if(getCurrentY() < lastScroll) {
        openNav(false)
    }

    lastScroll = getCurrentY();
}

/*
    Animations
 */
function openNav(byMouse) {
    openedByMouse = byMouse;
    getNav().show();
    isNavOpen = true;
}

function closeNav() {
    getNav().fadeOut(300);
    isNavOpen = false;
}

function getMouseY() {
    
}

function animateTo(section, time){
    $('html, body').animate({
        scrollTop: $(section).offset().top
    }, time);
}

/*
    Utilities / Getters / Setters
 */

function getCurrentY() {
    return $(document).scrollTop();
}

function getNav() {
    return $('.navbar');
}

function getNavHeight() {
    var height = $('#nav').outerHeight();
    console.log(height)
    return height
}

function getNavWrap() {
    return $('#navWrap')
}

function getNavWrapY() {
    return getNavWrap().offset().top;
}