const BASE_URL = "https://gateway.marvel.com:443/v1/public/";

const HEROES_ALL_URL = (offsetValue: number) =>
  `characters?&ts=1&apikey=${import.meta.env.VITE_MARVEL_API_KEY}&hash=${
    import.meta.env.VITE_MARVEL_API_HASH
  }&limit=25&offset=${offsetValue}`;

const HEROES_SEARCH_URL = (characterValue: string | undefined) =>
  `characters?name=${characterValue}&ts=1&apikey=${
    import.meta.env.VITE_MARVEL_API_KEY
  }&hash=${import.meta.env.VITE_MARVEL_API_HASH}`;

export { BASE_URL, HEROES_SEARCH_URL, HEROES_ALL_URL };
