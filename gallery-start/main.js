const displayedImage = document.querySelector('.displayed-img');
const thumbBar = document.querySelector('.thumb-bar');

const btn = document.querySelector('button');
const overlay = document.querySelector('.overlay');

/* Declaring the array of image filenames */
const pathImages = ['images/bojack.jpg','images/espacio.jpg','images/cuerpo.jpg','images/dep.jpg','images/narcisistas-encantadores.jpg'];

/* Declaring the alternative text for each image file */
const alterTexs = ['huma aye','sand','flowers','egip','butterfly']

/* Looping through images */
for (let i = 0;i<5;i++){
    const newImage = document.createElement('img');
    newImage.setAttribute('src', pathImages[i]);
    newImage.setAttribute('alt', alterTexs[i]);
    newImage.addEventListener('click',()=>{
        displayedImage.setAttribute('src', pathImages[i])
        displayedImage.setAttribute('alt', alterTexs[i]);
    })
    thumbBar.appendChild(newImage); 
}

/* Wiring up the Darken/Lighten button */
btn.addEventListener('click',()=> {
    if (btn.getAttribute('class')==='dark'){
        btn.setAttribute('class','light');
        overlay.style.backgroundColor = 'rgba(0,0,0,0.5)';
        btn.textContent='Lighten';
    }else{
        btn.setAttribute('class','dark');
        overlay.style.backgroundColor = 'rgba(0,0,0,0)';
        btn.textContent='darken';
    }
})
