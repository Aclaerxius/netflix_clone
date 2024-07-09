const API_BASE_URL = "https://api.themoviedb.org/3";
const API_KEY = import.meta.env.VITE_TMDB_KEY;

interface TitleInfo {
  original_title: string;
  original_language: string;
  overview: string;
  genres: string[];
  backdrop_path: string;
  poster_path: string;
  id: number;
  title: string;
}

const dataFetch = async (endpoint: string): Promise<TitleInfo> => {
  const req = await fetch(`${API_BASE_URL}${endpoint}`);
  const json = await req.json();
  return json;
};

export async function getTitleInfo(
  id: string | undefined,
  type: string
): Promise<TitleInfo> {
  let info: TitleInfo = {
    original_title: "",
    original_language: "",
    overview: "",
    genres: [],
    backdrop_path: "",
    poster_path: "",
    id: 0,
    title: "",
  };

  if (id) {
    switch (type) {
      case "movie":
        info = await dataFetch(`/movie/${id}?api_key=${API_KEY}`);
        break;
      case "tv":
        info = await dataFetch(`/tv/${id}?api_key=${API_KEY}`);
        break;
      default:
        info = {
          original_title: "",
          original_language: "",
          overview: "",
          genres: [],
          backdrop_path: "",
          poster_path: "",
          id: 0,
          title: "",
        };
        break;
    }
  }

  if (
    info.original_title &&
    info.original_language &&
    info.overview &&
    info.genres &&
    info.backdrop_path &&
    info.poster_path &&
    info.id &&
    info.title
  ) {
    return info;
  } else {
    return {
      original_title: "",
      original_language: "",
      overview: "",
      genres: [],
      backdrop_path: "",
      poster_path: "",
      id: 0,
      title: "",
    };
  }
}
