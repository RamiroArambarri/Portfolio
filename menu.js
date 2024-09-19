

function displayMenu() {
    const menu = document.querySelector('.menu')

    if(menu.clientHeight == 0){
        menu.style.height = `${menu.scrollHeight}px`
    } else {
        menu.style.height = 0;
    }
    

    //    menu.classList.toggle('contractible');
} 