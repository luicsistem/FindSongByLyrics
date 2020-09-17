import * as UI from './interfaz.js';
import  API from './api.js';


UI.formBuscar.addEventListener('submit',  buscarCancion);

function buscarCancion(e) {
    e.preventDefault();
    // obtener datos del formulario
    const artist = document.querySelector('#artista').value;
    const song = document.querySelector('#cancion').value;

    if(artist === '' || song === '') {
        // show error
        UI.message.textContent = 'All fields are required';
        UI.message.classList.add('error');

        // remover el error
    setTimeout(() => {
        UI.message.textContent = '';
        UI.message.classList.remove('error');

    }, 3000);
        return;
    }
    // consultar la api
    const busqueda = new API(artist, song);
   busqueda.consultarAPI();
 
}

