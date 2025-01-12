const MARVEL_API_KEY = import.meta.env.VITE_MARVEL_API_KEY;
const MARVEL_API_HASH = import.meta.env.VITE_MARVEL_API_HASH;

const BASE_URL = "https://gateway.marvel.com:443/v1/public/";

const CHARACTERS_ALL_URL = (offsetValue: number) =>
  `characters?&ts=1&apikey=${MARVEL_API_KEY}&hash=${MARVEL_API_HASH}&limit=20&offset=${offsetValue}`;

const CHARACTER_SEARCH_URL = (characterValue: string | undefined) =>
  `characters?name=${characterValue}&ts=1&apikey=${MARVEL_API_KEY}&hash=${MARVEL_API_HASH}`;

const CHARACTER_DETAIL_URL = (characterId: string | undefined) =>
  `characters/${characterId}?&ts=1&apikey=${MARVEL_API_KEY}&hash=${MARVEL_API_HASH}`;

const CHARACTER_COMICS_URL = (characterId: string | undefined) =>
  `characters/${characterId}/comics?ts=1&apikey=${MARVEL_API_KEY}&hash=${MARVEL_API_HASH}&orderBy=-onsaleDate&limit=5`;

export {
  BASE_URL,
  CHARACTER_SEARCH_URL,
  CHARACTERS_ALL_URL,
  CHARACTER_DETAIL_URL,
  CHARACTER_COMICS_URL,
};
