var toggle_btn;
var big_wrapper;
var hamburger_menu;

function declare(){
    toggle_btn = document.querySelector(".toggl-btn");
    big_wrapper = document.querySelector(".big-wrapper");
    hamburger_menu = document.querySelector(".hamburger-menu");
}

const main = document.querySelector("main");

declare();

let dark = false; // default theme will be light

function toggleAnimation(){
    // clone the wrapper
    dark = !dark;
    let clone = big_wrapper.cloneNode(true); // true parameters make sure that descendants are also cloned
    if(dark){
        clone.classList.remove("light");
        clone.classList.add("dark"); 
    }
    else{
        clone.classList.remove("dark");
        clone.classList.add("light");
    }
    clone.classList.add("copy");
    main.append(clone);

    clone.addEventListener("animationend", ()=>{
        big_wrapper.remove();
        clone.classList.remove("copy");
        declare(); // override toggle_btn and big_wrapper's values for the new wrapper
        events();
    })
}

function events(){
    toggle_btn.addEventListener("click", toggleAnimation);
    hamburger_menu.addEventListener("click", ()=>{
        big_wrapper.classList.toggle("active");
    });
}

events();
