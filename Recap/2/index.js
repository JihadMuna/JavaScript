const movieDataBase = {
  movies: [
    {
      id: 1,
      title: "The Shawshank Redemption",
      genre: "Drama",
      director: "Frank Darabont",
      releaseYear: 1994,
      rating: 9.3,
      votes: 2345890,
      img: "https://m.media-amazon.com/images/M/MV5BNDE3ODcxYzMtY2YzZC00NmNlLWJiNDMtZDViZWM2MzIxZDYwXkEyXkFqcGdeQXVyNjAwNDUxODI@._V1_.jpg",
    },
    {
      id: 2,
      title: "The Godfather",
      genre: "Crime, Drama",
      director: "Francis Ford Coppola",
      releaseYear: 1972,
      rating: 9.2,
      votes: 1620360,
      img: "https://m.media-amazon.com/images/M/MV5BM2MyNjYxNmUtYTAwNi00MTYxLWJmNWYtYzZlODY3ZTk3OTFlXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_FMjpg_UX1000_.jpg",
    },
    {
      id: 3,
      title: "The Godfather: Part II",
      genre: "Crime, Drama",
      director: "Francis Ford Coppola",
      releaseYear: 1974,
      rating: 9.0,
      votes: 1133175,
      img: "https://m.media-amazon.com/images/M/MV5BMWMwMGQzZTItY2JlNC00OWZiLWIyMDctNDk2ZDQ2YjRjMWQ0XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_.jpg",
    },
    {
      id: 4,
      title: "The Dark Knight",
      genre: "Action, Crime, Drama",
      director: "Christopher Nolan",
      releaseYear: 2008,
      rating: 9.0,
      votes: 2303232,
      img: "https://m.media-amazon.com/images/M/MV5BMTMxNTMwODM0NF5BMl5BanBnXkFtZTcwODAyMTk2Mw@@._V1_.jpg",
    },
    {
      id: 5,
      title: "12 Angry Men",
      genre: "Crime, Drama",
      director: "Sidney Lumet",
      releaseYear: 1957,
      rating: 9.0,
      votes: 689845,
      img: "https://m.media-amazon.com/images/S/pv-target-images/b92d2865829416e35e7102a3934a2ee745f3b903a95678710442d4299d86f39c.jpg",
    },
  ],

  addMovie(title, genre, director, releaseYear, rating, img) {
    this.movies.push({
      id: ++LAST_ID,
      title: title,
      genre: genre,
      director: director,
      releaseYear: releaseYear,
      rating: rating,
      img: img,
    });
  },

  removeMovie(title) {
    this.movies = this.movies.filter((movie) => movie.title !== title);
  },

  searchMovie(title) {
    return this.movies.filter((movie) =>
      movie.title.toLowerCase().includes(title.toLowerCase())
    );
  },
};

let LAST_ID = movieDataBase.movies.length;

const addForm = document.querySelector("#addForm");
const cardContainer = document.querySelector("#cardContainer");
const searchForm = document.querySelector("#searchForm");
const clearBtn = document.querySelector("#clearBtn");

searchForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const searchText = searchForm.elements.searchText.value;
  const searchResult = movieDataBase.searchMovie(searchText);
  displayMovies(searchResult);
});

clearBtn.addEventListener("click", (e) => {
  searchForm.reset();
  displayMovies(movieDataBase.movies);
});

addForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const title = addForm.elements.title.value;
  const genre = addForm.elements.genre.value;
  const director = addForm.elements.director.value;
  const releaseYear = parseInt(addForm.elements.releaseYear.value);
  const rating = parseFloat(addForm.elements.rating.value);
  const img = addForm.elements.img.value;
  movieDataBase.addMovie(title, genre, director, releaseYear, rating, img);

  addForm.reset();
  displayMovies(movieDataBase.movies);
});

function displayMovies(movies) {
  cardContainer.innerHTML = "";

  movies.forEach((movie) => {
    const card = document.createElement("section");
    card.classList.add("card");
    card.innerHTML = `
      <img src="${movie.img}" alt="Poster of ${movie.title}" id="card-img">
      <h2 id="title">${movie.title}</h2>
      <p>Genre: ${movie.genre}</p>
      <p>Release Year: ${movie.releaseYear}</p>
    `;

    const removeBtn = document.createElement("button");
    removeBtn.innerText = "Remove";
    removeBtn.addEventListener("click", (e) => {
      movieDataBase.removeMovie(movie.title);
      displayMovies(movieDataBase.movies);
    });

    card.appendChild(removeBtn);
    cardContainer.appendChild(card);
  });
}

displayMovies(movieDataBase.movies);