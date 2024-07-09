import { request } from "http";

const API_BASE_URL = "https://api.themoviedb.org/3";
const API_KEY = import.meta.env.VITE_TMDB_KEY;

export interface TitleInfo {
  original_name: string;
  original_language: string;
  overview: string;
  genres: string[];
  backdrop_path: string;
  poster_path: string;
  id: number;
  title: string;
}

export class RequestService {
  requests: { [key: string]: any } = {};
  baseUrl: string;

  constructor(baseUrl: string) {
    this.requests = {};
    this.baseUrl = baseUrl;
  }

  public async getDiscoverTV(): Promise<TitleInfo[]> {
    let url = `${this.baseUrl}/discover/tv?api_key=27403c69ab68ec0bb43384ee0809603e`;

    if (this.requests[url]) {
      console.log("cache hit");
      return this.requests[url];
    }

    // https://developer.mozilla.org/en-US/docs/Web/API/URLSearchParams/URLSearchParams

    console.log("cache miss");
    const response = await fetch(url, { method: "GET" });

    const json = (await response.json())["results"] as TitleInfo[];

    this.requests[url] = json;

    return json;
  }
}

export const requestService = new RequestService(API_BASE_URL);

async function dataFetch(endpoint: string): Promise<TitleInfo> {
  const response = await fetch(`${API_BASE_URL}${endpoint}`);
  const json = await response.json();
  return json;
}

export async function getTitleInfo(
  id: string,
  type: string
): Promise<TitleInfo> {
  let info: TitleInfo = {
    original_name: "",
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
        break;
    }
  }

  if (
    info.original_name &&
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
      original_name: "",
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
