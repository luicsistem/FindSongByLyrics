import * as UI from './interfaz.js';

class API {
    constructor(artist, song){
        this.artist = artist;
        this.song = song;
    }
    consultarAPI() {
        showSpinner();
       const url = `https://api.lyrics.ovh/v1/${this.artist}/${this.song}`;
       fetch(url)
       .then(res => res.json())
       .then(data => {
           const { lyrics } = data;
           if(lyrics) {
            UI.headingTitle.textContent = ` ${this.artist} - ${this.song}`;
            UI.result.textContent = lyrics;
           } else {
               UI.message.textContent = 'The Song dont exist, try again';
               UI.message.classList.add('error');
               setTimeout(() => {
                   UI.message.textContent = '';
                   UI.message.classList.remove('error');
                   UI.formBuscar.reset();
               }, 3000);
           }
       
       })
        
    }
}


function showSpinner() {
   

    const spinner = document.createElement('div');
    spinner.classList.add('spinner');

    spinner.innerHTML = `
    
    <div class="bounce1"></div>
    <div class="bounce2"></div>
    <div class="bounce3"></div>
 
    `
    UI.result.appendChild(spinner);
}

export default API;