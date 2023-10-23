document.getElementById('searchButton').addEventListener('click', searchMovies)


let api_key = '715040635e158f59154a1a2211f8ea34'
let url_base = 'https://api.themoviedb.org/3/search/movie'
let url_image = 'https://image.tmdb.org/t/p/w200'

//fetch('https://api.themoviedb.org/3/search/movie?query=Jack+Reacher&api_key=715040635e158f59154a1a2211f8ea34')

function searchMovies (){
    let searchInput = document.getElementById('searchInput').value

    fetch(`${url_base}?api_key=${api_key}&query=${searchInput}`)
    .then(response => response.json())
    .then(response => displayMovies(response.results))
}

function displayMovies(movies){
    let resultcontainer = document.getElementById('results')
    resultcontainer.innerHTML = ''

    if(movies.length === 0){
        resultcontainer.innerHTML = '<p>No se encontraron resultados para tu busqueda</p>'
        return
    }

    movies.forEach(movie => {
        let movieDiv = document.createElement('div')
        movieDiv.classList.add('movie')


        let title = document.createElement('h2')
        title.textContent = movie.title

        let releaseDate = document.createElement('p')
        releaseDate.textContent = 'La fecha de lanzamiento fue: ' + movie.release_date

        let overview = document.createElement('p')
        overview.textContent = movie.overview

        let posterPath = url_image + movie.poster_path
        let poster = document.createElement('img')
        poster.src = posterPath


        movieDiv.appendChild(poster)
        movieDiv.appendChild(title)
        movieDiv.appendChild(releaseDate)
        movieDiv.appendChild(overview)

        resultcontainer.appendChild(movieDiv)
    });


}