import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { exhaustMap, map } from 'rxjs';

// Generated by https://quicktype.io

export interface CurrentWatching {
  data: Data;
}

export interface Data {
  MediaListCollection: MediaListCollection;
}

export interface MediaListCollection {
  lists: List[];
}

export interface List {
  entries: AnimeEntry[];
  status: string;
}

export interface AnimeEntry {
  progress: number;
  media: Media;
}

export interface Media {
  id: number;
  title: Title;
  episodes: number | null;
  nextAiringEpisode: NextAiringEpisode | null;
  coverImage: CoverImage;
  airingSchedule: AiringSchedule;
}

export interface AiringSchedule {
  edges: { id: number | null }[];
  nodes: NextAiringEpisode;
}

export interface NextAiringEpisode {
  id: number | null;
  airingAt: number | null;
  timeUntilAiring: number | null;
  episode: number | null;
}

export interface CoverImage {
  extraLarge: string;
  large: string;
  medium: string;
  color: string;
}

export interface Title {
  romaji: string;
  english: null | string;
  native: string;
  userPreferred: string;
}

@Injectable({
  providedIn: 'root',
})
export class AnilistService {
  constructor(private http: HttpClient) {}

  getSearchResult(search: string) {
    let query = `
    query($search: String) {
  Page(perPage: 10){
   	media(search:$search, type:ANIME){
      title {
        english romaji
      }
      id
    } 
  }
}
`;

    return this.http
      .post(
        'https://graphql.anilist.co',
        {
          query,
          variables: {
            search: search,
          },
        },
        {
          headers: new HttpHeaders({
            Authorization: 'Bearer ' + localStorage.getItem('anilist_token'),
            'Content-Type': 'application/json',
            Accept: 'application/json',
          }),
        }
      )
      .pipe(
        map((data: any) => {
          return data.data.Page.media;
        })
      );
  }

  getWatchList() {
    let query = `
    query {
      Viewer {
        id
      }
    }`;
    let list = `
    query ($userId: Int) {
  MediaListCollection(userId:$userId, type:ANIME, status:CURRENT, sort: STATUS){
     lists {
      entries {
        progress

        media {
          id
          title {
            romaji
            english
            native
            userPreferred
          }
          episodes
          nextAiringEpisode {
            id
            airingAt
            timeUntilAiring
            episode
          }
          coverImage {
            extraLarge
            large
            medium
            color
          }
          airingSchedule {
            
            edges {
              id
              
            }
            nodes {
              airingAt
              episode
            }
          }
          
        }
      }
      status 
    }
  }
}
`;

    return this.http
      .post(
        'https://graphql.anilist.co',
        { query },
        {
          headers: new HttpHeaders({
            Authorization: 'Bearer ' + localStorage.getItem('anilist_token'),
            'Content-Type': 'application/json',
            Accept: 'application/json',
          }),
        }
      )
      .pipe(
        exhaustMap((value: any) => {
          return this.http.post<CurrentWatching>(
            'https://graphql.anilist.co',
            {
              query: list,
              variables: {
                userId: value.data.Viewer.id,
              },
            },
            {
              headers: new HttpHeaders({
                Authorization:
                  'Bearer ' + localStorage.getItem('anilist_token'),
                'Content-Type': 'application/json',
                Accept: 'application/json',
              }),
            }
          );
        }),
        map((data) => {
          let media = data.data.MediaListCollection.lists[0].entries;
          return media.map((val) => ({
            id: val.media.id,
            progress: val.progress,
            title: val.media.title,
            episodes: val.media.episodes as number,
            coverImage: val.media.coverImage,
            timeUntilAiring: val.media.nextAiringEpisode
              ? val.media.nextAiringEpisode.timeUntilAiring === null
                ? 0
                : val.media.nextAiringEpisode.timeUntilAiring
              : 0,
            airingAt: val.media.nextAiringEpisode
              ? val.media.nextAiringEpisode.airingAt === null
                ? 0
                : val.media.nextAiringEpisode.airingAt
              : 0,
            nextEpisode: val.media.nextAiringEpisode
              ? val.media.nextAiringEpisode.episode === null
                ? (val.media.episodes as number)
                : val.media.nextAiringEpisode.episode
              : 0,
          }));
        }),
        map((data) => {
          return [
            ...data.filter(
              (val) =>
                val.timeUntilAiring !== 0 && val.progress < val.nextEpisode - 1
            ),
            ...data.filter(
              (val) =>
                val.timeUntilAiring !== 0 && val.progress >= val.nextEpisode - 1
            ),
            ...data.filter((val) => val.timeUntilAiring === 0),
          ];
        })
      );
  }

  updateEpisodeCount(animeId: number, progress: number) {
    let query = `
      mutation SaveMediaListEntry($animeId: Int, $progress: Int) {
        SaveMediaListEntry(mediaId: $animeId, progress: $progress){status, progress}
      }`;

    return this.http.post(
      'https://graphql.anilist.co',
      {
        query,
        variables: {
          animeId,
          progress: progress,
        },
      },
      {
        headers: new HttpHeaders({
          Authorization: 'Bearer ' + localStorage.getItem('anilist_token'),
          'Content-Type': 'application/json',
          Accept: 'application/json',
        }),
      }
    );
  }
}
