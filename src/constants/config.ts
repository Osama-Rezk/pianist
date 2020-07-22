export const loginUrl =
  "https://connect.deezer.com/oauth/auth.php?app_id=426082&redirect_uri=https://awesome-hypatia-46489c.netlify.app/login&perms=basic_access,email";

export const baseURL =
  "https://cors-anywhere.herokuapp.com/https://api.deezer.com/";

export const genAuthURL = (code: any) =>
  `https://cors-anywhere.herokuapp.com/https://connect.deezer.com/oauth/access_token.php?app_id=426082&secret=254ec84cad97f01839e63e40cc5b8abe&code=${code}&output=JSON`;

export const authUrl =
  "https://cors-anywhere.herokuapp.com/https://connect.deezer.com";
export const authController =
  "/oauth/access_token.php?app_id=426082&secret=254ec84cad97f01839e63e40cc5b8abe&code=12345&output=JSON";
