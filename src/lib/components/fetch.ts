export const options = {
  method: "GET",
  headers: { accept: "application/json" },
};

fetch(
  "https://api.themoviedb.org/3/discover/tv?api_key=27403c69ab68ec0bb43384ee0809603e",
  options
)
  .then((response) => response.json())
  .then((response) => console.log(response))
  .catch((err) => console.error(err));
