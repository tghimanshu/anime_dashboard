import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Header } from 'primeng/api';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class MusicService {
  url: string = 'https://api.audiomack.com/v1';
  constructor(private http: HttpClient) {}
  getAuth() {
    return this.http
      .get<{ tracks: object[] }>(
        'https://api.napster.com/v2.2/artists/art.41226138/tracks?limit=11&apikey=YTkxZTRhNzAtODdlNy00ZjMzLTg0MWItOTc0NmZmNjU4Yzk4'
      )
      .pipe(
        map((data) => {
          return data.tracks[0];
        })
      );
  }
  getMusic() {
    return this.http.get<{ name: string }[]>('/assets/musicList.json');
  }
}
