export interface IMarvelApiData {
  code: number;
  status: string;
  copyright: string;
  attributionText: string;
  attributionHTML: string;
  etag: string;
  data: IData;
}

export interface IData {
  offset: number;
  limit: number;
  total: number;
  count: number;
  results: IMarvelCharacter[];
}

export interface IMarvelCharacter {
  id: number;
  name: string;
  description: string;
  modified: string;
  thumbnail: MarvelThumbnail;
  resourceURI: string;
  comics: IMarvelComics;
  series: IMarvelSeries;
  stories: IMarvelStories;
  events: IMarvelEvents;
  urls: IMarvelUrl[];
}

export interface IMarvelThumbnail {
  path: string;
  extension: string;
}

export interface IMarvelComics {
  available: number;
  collectionURI: string;
  items: IMarvelResourceItem[];
  returned: number;
}

export interface IMarvelSeries {
  available: number;
  collectionURI: string;
  items: IMarvelResourceItem[];
  returned: number;
}

export interface IMarvelStories {
  available: number;
  collectionURI: string;
  items: IMarvelResourceItem[];
  returned: number;
}

export interface IMarvelEvents {
  available: number;
  collectionURI: string;
  items: IMarvelResourceItem[];
  returned: number;
}

export interface IMarvelResourceItem {
  resourceURI: string;
  name: string;
}

export interface IMarvelUrl {
  type: string;
  url: string;
}
