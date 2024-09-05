export interface MarvelApiResponse<T> {
  code: number;
  status: string;
  data: {
    results: T;
    offset: number;
    limit: number;
    total: number;
    count: number;
  };
}
export interface MarvelApiResponse<T> {
  code: number;
  status: string;
  data: {
    results: T;
    offset: number;
    limit: number;
    total: number;
    count: number;
  };
}
