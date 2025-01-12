export interface MarvelApiResponse<T> {
  code: number;
  status: string;
  copyright: string;
  attributionText: string;
  attributionHTML: string;
  etag: string;
  data: Data<T>;
}

export interface Data<T> {
  offset: number;
  limit: number;
  total: number;
  count: number;
  results: T[];
}

export interface Character {
  id: number;
  name: string;
  description: string;
  modified: string;
  thumbnail: Thumbnail;
  resourceURI: string;
  comics: Comics;
  series: Comics;
  stories: Stories;
  events: Comics;
  urls: URL[];
}

interface Comics {
  available: number;
  collectionURI: string;
  items: ComicsItem[];
  returned: number;
}

interface ComicsItem {
  resourceURI: string;
  name: string;
}

interface Stories {
  available: number;
  collectionURI: string;
  items: StoriesItem[];
  returned: number;
}

interface StoriesItem {
  resourceURI: string;
  name: string;
  type: ItemType;
}

enum ItemType {
  Cover = "cover",
  Empty = "",
  InteriorStory = "interiorStory",
}

interface Thumbnail {
  path: string;
  extension: Extension;
}

enum Extension {
  GIF = "gif",
  Jpg = "jpg",
}

interface URL {
  type: URLType;
  url: string;
}

enum URLType {
  Comiclink = "comiclink",
  Detail = "detail",
  Wiki = "wiki",
}

export interface Comic {
  id: number;
  digitalId: number;
  title: string;
  issueNumber: number;
  variantDescription: string;
  description: string;
  modified: string;
  isbn: string;
  upc: string;
  diamondCode: string;
  ean: string;
  issn: string;
  format: string;
  pageCount: number;
  textObjects: unknown[];
  resourceURI: string;
  urls: URL[];
  series: Series;
  variants: unknown[];
  collections: unknown[];
  collectedIssues: unknown[];
  dates: DateElement[];
  prices: Price[];
  thumbnail: Thumbnail;
  images: Thumbnail[];
  creators: Creators;
  characters: Characters;
  stories: Stories;
  events: Characters;
}

export interface Series {
  resourceURI: string;
  name: string;
}

export interface DateElement {
  type: string;
  date: string;
}

export interface Price {
  type: string;
  price: number;
}

export interface Creators {
  available: number;
  collectionURI: string;
  items: CreatorsItem[];
  returned: number;
}

export interface Characters {
  available: number;
  collectionURI: string;
  items: Series[];
  returned: number;
}

export interface CreatorsItem {
  resourceURI: string;
  name: string;
  role: string;
}
