import { requestService } from "$lib/services/tmdbService";
import type { PageServerLoad } from "./$types";

export const load: PageServerLoad = async () => {
  const titleOriginals = await requestService.getNetflixOriginals();
  const titleTopRated = await requestService.getTopRated();
  const titleAction = await requestService.getActionMovies();
  const titleComedy = await requestService.getComedyMovies();
  const titleHorror = await requestService.getHorrorMovies();
  const titleRomance = await requestService.getRomanceMovies();

  return {
    titleOriginals: titleOriginals,
    titleTopRated: titleTopRated,
    titleAction: titleAction,
    titleComedy: titleComedy,
    titleHorror: titleHorror,
    titleRomance: titleRomance,
  };
};
