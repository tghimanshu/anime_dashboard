import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { YoutubeSearch } from './search.model';

@Injectable({
  providedIn: 'root',
})
export class SearchService {
  private API_URL = 'https://www.googleapis.com/youtube/v3/search';
  private API_TOKEN = environment.apiKey;

  constructor(private http: HttpClient) {}

  getVideos(query: string) {
    const url = `${this.API_URL}?q=${query}&key=${this.API_TOKEN}&part=snippet&type=video&maxResults=10`;
    return this.http.get<{ items: YoutubeSearch[] }>(url).pipe(
      map((result) => {
        return result.items.map((data) => {
          return {
            ...data.snippet,
            id: data.id,
          };
        });
      })
    );
  }
}
