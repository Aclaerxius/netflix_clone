import { type TitleInfo, requestService } from "$lib/services/tmdbService";
import type { PageServerLoad } from "./$types";

export const load: PageServerLoad = async ({ params }) => {
  const titlesOriginals = await requestService.getNetflixOriginals();
  const titlesTopRated = await requestService.getTopRated();
  const titlesAction = await requestService.getActionMovies();
  const titlesComedy = await requestService.getComedyMovies();
  const titlesHorror = await requestService.getHorrorMovies();
  const titlesRomance = await requestService.getRomanceMovies();

  return {
    titlesOriginals: titlesOriginals,
    titlesTopRated: titlesTopRated,
    titlesAction: titlesAction,
    titlesComedy: titlesComedy,
    titlesHorror: titlesHorror,
    titlesRomance: titlesRomance,
  };
};
