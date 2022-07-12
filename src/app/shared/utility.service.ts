// https://images8.alphacoders.com/125/1252249.jpg
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';

interface Wallpaper {
  category: string;
  category_id: string;
  file_size: string;
  file_type: string;
  height: string;
  id: string;
  sub_category: string;
  sub_category_id: string;
  url_image: string;
  url_page: string;
  url_thumb: string;
  user_id: string;
  user_name: string;
  width: string;
}

@Injectable({
  providedIn: 'root',
})
export class UtilityService {
  constructor(private http: HttpClient) {}

  // Get a New Background Image
  getBackgroundImage() {
    let pageNo = Math.floor(Math.random() * 500) + 1;
    return this.http
      .get<{ success: boolean; wallpapers: Wallpaper[] }>(
        `https://wall.alphacoders.com/api2.0/get.php?auth=0d52ba4842faf8b1e6fbff7313e786d5&method=category&id=3&page=${pageNo}&info_level=2`
      )
      .pipe(
        map((data: { success: boolean; wallpapers: Wallpaper[] }) => {
          console.log(data);
          let indexNo = Math.floor(Math.random() * data.wallpapers.length) + 1;
          let bg = data.wallpapers[indexNo].url_image;
          localStorage.setItem('imageUrl', bg);
          localStorage.setItem(
            'background',
            JSON.stringify(data.wallpapers[indexNo])
          );
          return bg;
        })
      );
  }

  // Get a new anime quote
  public getQuote() {
    return this.http
      .get<{ anime: string; character: string; quote: string }>(
        'https://animechan.vercel.app/api/random'
      )
      .pipe(
        map((data) => {
          localStorage.setItem('quote', JSON.stringify(data));
          return data;
        })
      );
    // get quotes from a specific anime
    // https://animechan.vercel.app/api/quotes/anime?title=naruto
  }
}
