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
    document.getElementById(galleryName).style.display = 'flex';
    
}