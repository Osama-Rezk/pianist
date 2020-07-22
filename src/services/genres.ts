import { request } from "../utils/ApiCentral";

export function fetchGenres() {
  return request({
    url: "/genre",
    method: "GET",
  });
}

export function fetchGenreArtists(id: number) {
  return request({
    url: `/genre/${id}/artists`,
    method: "GET",
  });
}
