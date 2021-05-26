const $buttonAbrir = document.getElementById("toggle-list-button");
const $buttonCerrar = document.getElementById("close-list-button")

const $mainSection = document.querySelector(".main-section")
const $logo = document.querySelector(".button-nav")
const $burger = document.querySelector(".burger")
const $cross = document.querySelector ("#close-list-button")
const $list = document.querySelector(".container-link-items")  

$buttonAbrir.onclick = function () {    
    
    $mainSection.classList.toggle("oculto-xs")
    $logo.classList.toggle("oculto-xs")
    $burger.classList.toggle("oculto-xs")
    $cross.classList.toggle("show-xs")
    $list.classList.toggle("show-xs")
    console.log("me apretaron")

}

$buttonCerrar.onclick = function (){

    $mainSection.classList.toggle("oculto-xs")
    $logo.classList.toggle("oculto-xs")
    $burger.classList.toggle("oculto-xs")
    $cross.classList.toggle("show-xs")
    $list.classList.toggle("show-xs")

}


