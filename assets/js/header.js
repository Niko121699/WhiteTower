const navBar = document.getElementById('btn_menu');
const contentMenu = document.getElementById('content_menu');
const query = window.matchMedia("screen and (max-width: 768px)");
let contador = 0;
navBar.addEventListener('click', () => {
    if (query.matches == true && contador == 0){
        contentMenu.classList.add("navigation__interaction");
        contador ++;
    }else if(query.matches == true && contador == 1){
        contentMenu.classList.remove("navigation__interaction");
        contador --;
    }
});
