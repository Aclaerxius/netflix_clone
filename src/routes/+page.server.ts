import { type TitleInfo, requestService } from "$lib/services/tmdbService";
import type { PageServerLoad } from "./$types";

export const load: PageServerLoad = async ({ params }) => {
  let titles = await requestService.getDiscoverTV();

  return {
    titles: titles,
  };
};
