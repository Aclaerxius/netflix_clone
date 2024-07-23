// since there's no dynamic data here, we can prerender
// it so that it gets served as a static asset in production
export const prerender = true;
// export const ssr = false;

// import { requestService } from "$lib/services/tmdbService";
// import type { PageLoad } from "./$types";

// export const load: PageLoad = async ({ params }) => {
//   let titles = await requestService.getDiscoverTV();

//   return {
//     titles: titles,
//   };
// };
