function openPoster(url) {
    document.getElementById('poster-container').style.display = 'flex'
    document.getElementById('poster').src = url
}

function closePoster() {
    document.getElementById('poster-container').style.display = 'none'
}

window.addEventListener('keydown', function(event){
    if(event.key == 'Escape') {
        document.getElementById('poster-container').style.display = 'none'
    }
})

let buttons

function galleryChange(buttonName, galleryName) {
    buttons = document.getElementsByClassName('gallery-nav-button')
    for(let i = 0; i < buttons.length; i ++) {
        buttons[i].classList.remove('gallery-nav-active')
    }
    buttonName.classList.add('gallery-nav-active')

    galleries = document.getElementsByClassName('gallery')
    for(let i = 0; i < galleries.length; i ++) {
        galleries[i].style.display = 'none';
    }
    selectedGallery = document.getElementById(galleryName)
    selectedGallery.style.display = 'flex';
    selectedGallery.scrollIntoView({ behavior: 'smooth' });
    
}

const scrollToSection = (id) => {
    document.querySelector(id).scrollIntoView({ behavior: 'smooth' });
}


function displayMenu() {
    const menu = document.querySelector('.menu')

    if(menu.clientHeight == 0){
        menu.style.height = `${menu.scrollHeight}px`
    } else {
        menu.style.height = 0;
    }
} 