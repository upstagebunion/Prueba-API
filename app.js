/*const fakeYou = require("fakeyou.js");
const fy = new fakeYou.Client({
    usernameOrEmail: 'fco.garcia.solis@gmail.com',
    password: 'l2dcqal:fy'
});*/

let pagina = 1;
let max_pages = 500;
const btnAnterior = document.getElementById('btnAnterior');
const btnSiguiente = document.getElementById('btnSiguiente');

btnSiguiente.addEventListener('click', () => { 
    if(pagina === max_pages){
        pagina = 1;
        loadRequest();
    }else{
        pagina += 1;
        loadRequest();
    } 
});

btnAnterior.addEventListener('click', () => {
    if(pagina === 1){
        pagina = max_pages;
    }else{
        pagina --;
    }
    loadRequest();
});

const loadRequest = async() => {
    try{
        const resp = await fetch(`https://api.themoviedb.org/3/movie/popular?api_key=32422e9c88bb43946fd413b7a3690f09&language=es_MX&page=${pagina}`);
        console.log(resp);

        if(resp.status === 200 ){
            const data = await resp.json();
            //max_pages = data.total_pages;

            let peliculas = '';
            console.log(await data.results);
            data.results.forEach(pelicula => {
                peliculas += `
                        <div class='pelicula'><img class='poster' src='https://image.tmdb.org/t/p/w500/${pelicula.poster_path}'>
                            <h3 class='titulo'>${pelicula.title}</h3>
                            <p>Rating: ${pelicula.vote_average}</p>
                        </div>
                    `;
            });

            document.getElementById('contenedor').innerHTML = peliculas;
        }else if(resp.status === 401){
            console.log('Invalid Request');
        }else if(resp.status === 404){
            console.log('Pelicula no enctonrada');
        }else{
            console.log('Error desconocido');
        }
    } catch(error){
        console.log(error);
    }
    /*await fy.start();

    const audio = await fy.makeTTS('auronplay', 'Me tienen llorando por la tristeza xd');
    const url = 'https://storage.googleapis.com/vocodes-public' + audio.audioPath;
    console.log(url);*/
}

loadRequest();