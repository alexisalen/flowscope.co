'use strict'

 /* 

OPCION 1 - Do not work
----------------------
window.onload = function(){ 

    var toggle = document.querySelector("#menu-toggle");
    var menu = document.querySelector("#menu-list");

    
    toggle.onclick = function () {
        if (toggle.style.display == "none")
          menu.style.display = "block";
        else menu.style.display = "none";
      }
};

OPCION 2 - Works
----------------------
window.onload = function(){ 

    var boton =  document.querySelector("#menu-toggle");
    
    boton.onclick = function () {
        if (document.getElementById("menu-list").style.display = "none")
          document.getElementById("menu-list").style.display = "block";
        else document.getElementById("menu-list").style.display = "none";
      }
};


OPCION 3 - Works
-----------------------
window.onload = function(){ 

    var toggle = document.querySelector("#menu-toggle");
    var menu =  document.querySelector("#menu-list");
    
    toggle.onclick = function () {
        if (menu.style.display = "none")
          menu.style.display = "block";
    }

};


OPCION 4 - Works
-----------------------
window.addEventListener('load', function(){

    var toggle = document.querySelector("#menu-toggle");
    var menu =  document.querySelector("#menu-list");

    toggle.addEventListener('click', function(){

        if (menu.style.display = "none")
          menu.style.display = "block";

    });
});


OPCION 5 - Best
-----------------------

window.onload = function(){ 

    var toggle = document.querySelector("#menu-toggle");
    var menu = document.querySelector("#menu-list");
    
    toggle.onclick = function () {
        if (menu.style.display = "none"){
          menu.style.display = "block";
        }else menu.style.display = "none";
    }
};

OPCION 6 - Do not work
-----------------------

function navLink(){ 
    var menu = document.querySelector("#menu-list");
    
    if (menu.style.display = "none"){
        menu.style.display = "block";
    } else menu.style.display = "none";
}


    var toggle = document.querySelector("#menu-toggle");

    toggle.addEventListener('click', function(){
    navLink();
    });
*/



window.onload = function(){ 

    var toggle = document.querySelector("#menu-toggle");
    var menu = document.querySelector("#menu-list");
    
    toggle.onclick = function () {
        if (menu.style.display = "none"){
          menu.style.display = "block";
        }else menu.style.display = "none";
    }
};

