function myopen() {
    window.location.href = "./service.html"
}

let first = document.querySelector('.slide')
let second = document.querySelector('.mymy')
let ab =document.querySelector('.gb')
let ac =document.querySelector('.gg')

let slideidex = 0;

function nextslide() {
    
    if (first){
        first.classList.remove('slide')
        first.classList.add('slidee') 
        second.classList.add('mii') 
        ab.classList.remove('gb')
        ab.classList.add('gg')
        ac.classList.remove('gg')
        ac.classList.add('gb')
    }
    
}
function preslide() {
    if (second){
        second.classList.remove('mii')
        second.classList.add('mymy') 
        first.classList.remove('slidee')
        first.classList.add('slide')
        ac.classList.remove('gb')
        ac.classList.add('gg')
        ab.classList.remove('gg')
        ab.classList.add('gb') 

    }
    
}

