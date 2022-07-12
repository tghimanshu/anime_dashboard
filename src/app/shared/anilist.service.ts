import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { exhaustMap } from 'rxjs';

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

  getWatchList() {
    let query = `
    query {
      Viewer {
        id
      }
    }`;
    let list = `
    query ($userId: Int) {
  MediaListCollection(userId:$userId, type:ANIME, status:CURRENT){
     lists {
      entries {
        progress

        media {
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
        })
      );
  }
}