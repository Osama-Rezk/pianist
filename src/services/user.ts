import { request } from "../utils/ApiCentral";
import { getJwt } from "../utils/auth";

export function logMeIN(code: string) {
  return request({
    url: `/oauth/access_token.php?app_id=426082&secret=254ec84cad97f01839e63e40cc5b8abe&code=${code}&output=JSON`,
    method: "GET",
  });
}

export function getMe() {
  return request({
    url: `/user/me?access_token=${getJwt()}`,
    method: "GET",
  });
}
