
function renderMovies(movies) {
    var moviePage = '';
    var movieList = '';

        // This is to create the movie list 
        for (var i = 0; i < movies.length; i++) {
            movieList = movies.map(e => {
                return `
                <div>
                    <div>
                        <img src="${e.poster}" />
                    </div>
                    <div>
                        <div>
                            ${e.title}
                        </div>
                        <div>
                            ${e.year}
                        </div>
                        <div>
                            <span>IMDB:</span>
                            <span>${e.imdbRating} / 10</span>
                        </div>
                        <div>
                            <span>Rotten Tomatoes:</span>
                            <span>${e.rottenTomatoesRating * 100}%</span>
                        </div>
                    </div>
            </div>
            `
            })
            // This is to remove quotes 
            moviePage = movieList.join('');
            
    }
  return moviePage;

}

function movies() {
    var content = document.getElementById('content');

    var moviesAbstraction = [
        {
            title: "The Dark Knight",
            year: 2008,
            imdbID: "tt0468569",
            poster: "https://m.media-amazon.com/images/M/MV5BMTMxNTMwODM0NF5BMl5BanBnXkFtZTcwODAyMTk2Mw@@._V1_SX300.jpg",
            imdbRating: 9,
            rottenTomatoesRating: 0.94
        },
        {
            title: "The Dark Knight Rises",
            year: 2012,
            imdbID: "tt1345836",
            poster: "https://m.media-amazon.com/images/M/MV5BMTk4ODQzNDY3Ml5BMl5BanBnXkFtZTcwODA0NTM4Nw@@._V1_SX300.jpg",
            imdbRating: 8,
            rottenTomatoesRating: 0.82
        },
        {
            title: "The Incredibles",
            year: 2004,
            imdbID: "tt0317705",
            poster: "https://m.media-amazon.com/images/M/MV5BMTY5OTU0OTc2NV5BMl5BanBnXkFtZTcwMzU4MDcyMQ@@._V1_SX300.jpg",
            imdbRating: 9,
            rottenTomatoesRating: 0.91
        }
    ]

    content.innerHTML = renderMovies(moviesAbstraction);

}