import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UtilityService {
  constructor(private http: HttpClient) {}

  getBackgroundImage(): Observable<string> {
    let pageNo = Math.floor(Math.random() * 500) + 1;
    return this.http
      .get<{ success: boolean; wallpapers: any[] }>(
        `https://wall.alphacoders.com/api2.0/get.php?auth=0d52ba4842faf8b1e6fbff7313e786d5&method=category&id=3&page=${pageNo}&info_level=2`
      )
      .pipe(
        map((data: { success: boolean; wallpapers: any[] }) => {
          let indexNo = Math.floor(Math.random() * data.wallpapers.length) + 1;
          let bg = data.wallpapers[indexNo].url_image;
          if (localStorage.getItem('imageUrl') === bg)
            return this.getBackgroundImage();
          localStorage.setItem('imageUrl', bg);
          localStorage.setItem(
            'background',
            JSON.stringify(data.wallpapers[indexNo])
          );
          return bg;
        })
      );
  }
}
