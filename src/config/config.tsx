const BASE_URL = "https://gateway.marvel.com:443/v1/public/";

const CHARACTERS_ALL_URL = `characters?&ts=1&apikey=${
  import.meta.env.VITE_MARVEL_API_KEY
}&hash=${import.meta.env.VITE_MARVEL_API_HASH}`;

const CHARACTERS_SEARCH_URL = (characterValue: string | undefined) =>
  `characters?name=${characterValue}&ts=1&apikey=${
    import.meta.env.VITE_MARVEL_API_KEY
  }&hash=${import.meta.env.VITE_MARVEL_API_HASH}`;

export { BASE_URL, CHARACTERS_SEARCH_URL, CHARACTERS_ALL_URL };
