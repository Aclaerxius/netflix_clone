const API_BASE_URL = "https://api.themoviedb.org/3";
const API_KEY = import.meta.env.VITE_TMDB_KEY;

interface MovieOrTvInfo {
  original_title: string;
  original_language: string;
  overview: string;
  genres: string[];
  backdrop_path: string;
  poster_path: string;
  id: number;
  title: string;
}

const dataFetch = async (endpoint: string): Promise<any> => {
  const req = await fetch(`${API_BASE_URL}${endpoint}`);
  const json = await req.json();
  return json;
};

export async function getHomeList(): Promise<any[]> {
  return [
    {
      slug: "originals",
      title: "Netflix Originals",
      items: await dataFetch(
        `/discover/tv?with_networks=213&api_key=${API_KEY}`
      ),
    },
    {
      slug: "trending",
      title: "Suggestions for You",
      items: await dataFetch(`/trending/all/week?api_key=${API_KEY}`),
    },
    {
      slug: "toprated",
      title: "Top Rated",
      items: await dataFetch(`/movie/top_rated?api_key=${API_KEY}`),
    },
    {
      slug: "action",
      title: "Action",
      items: await dataFetch(
        `/discover/movie?with_genres=28&api_key=${API_KEY}`
      ),
    },
    {
      slug: "comedy",
      title: "Comedy",
      items: await dataFetch(
        `/discover/movie?with_genres=35&api_key=${API_KEY}`
      ),
    },
    {
      slug: "horror",
      title: "Horror",
      items: await dataFetch(
        `/discover/movie?with_genres=27&api_key=${API_KEY}`
      ),
    },
    {
      slug: "romance",
      title: "Romance",
      items: await dataFetch(
        `/discover/movie?with_genres=10749&api_key=${API_KEY}`
      ),
    },
    {
      slug: "documentary",
      title: "Documentary",
      items: await dataFetch(
        `/discover/movie?with_genres=99&api_key=${API_KEY}`
      ),
    },
  ];
}

export async function getMovieOrSerieInfo(
  id: string | undefined,
  type: string
): Promise<any> {
  let info = {};

  if (id) {
    switch (type) {
      case "movie":
        info = await dataFetch(`/movie/${id}?api_key=${API_KEY}`);
        break;
      case "tv":
        info = await dataFetch(`/tv/${id}?api_key=${API_KEY}`);
        break;
      default:
        info = {};
        break;
    }
  }

  return info;
}
