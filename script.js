const API_KEY = "1d410cbb";

async function searchMovie() {

    const movieName = document.getElementById("searchInput").value;
    const movieContainer = document.getElementById("movieContainer");

    if (movieName === "") {
        movieContainer.innerHTML =
            '<p class="error">Please enter a movie name.</p>';
        return;
    }

    try {

        const url =
            `https://www.omdbapi.com/?apikey=${API_KEY}&s=${movieName}`;

        const response = await fetch(url);
        const data = await response.json();

        movieContainer.innerHTML = "";

        if (data.Response === "False") {
            movieContainer.innerHTML =
                `<p class="error">${data.Error}</p>`;
            return;
        }

        data.Search.forEach(movie => {

            const card = document.createElement("div");

            card.classList.add("movie-card");

            card.innerHTML = `
                <img
                    src="${movie.Poster !== "N/A"
                        ? movie.Poster
                        : "https://via.placeholder.com/220x300?text=No+Poster"}"
                    alt="${movie.Title}"
                >

                <h2>${movie.Title}</h2>

                <p>Year: ${movie.Year}</p>

                <p>Type: ${movie.Type}</p>
            `;

            movieContainer.appendChild(card);
        });

    } catch (error) {

        movieContainer.innerHTML =
            '<p class="error">Something went wrong.</p>';

        console.log(error);
    }
}