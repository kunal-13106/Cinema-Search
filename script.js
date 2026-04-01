const API_TOKEN = "YOUR_TOKEN";

async function getMovies() {
  try {
    const res = await fetch("https://api.themoviedb.org/3/movie/popular", {
      headers: {
        accept: "application/json",
        Authorization: `Bearer ${API_TOKEN}`
      }
    });

    const data = await res.json();

  
    console.log("Full response:", data);

    if (!data.results) {
      console.error("API failed:", data);
      return;
    }

    data.results.forEach(movie => {
      console.log(movie.title);
    });

  } catch (err) {
    console.error("Fetch error:", err);
  }
}

getMovies();
