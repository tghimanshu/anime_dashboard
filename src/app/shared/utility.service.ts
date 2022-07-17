// https://images8.alphacoders.com/125/1252249.jpg
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable, Subscription } from 'rxjs';
import { BackgroundSettings, SettingsService } from './settings.service';

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
  subscription!: Subscription;
  background!: BackgroundSettings;

  constructor(
    private http: HttpClient,
    private settingsService: SettingsService
  ) {
    this.settingsService.settingsSubject.subscribe((settings) => {
      this.background = settings.background;
    });
  }

  // Get a New Background Image
  getBackgroundImage() {
    let pageNo =
      Math.floor(
        Math.random() *
          Math.floor(
            this.background.sub_category
              ? this.background.sub_category.count / 30
              : this.background.category
              ? this.background.category.count / 30
              : 1
          )
      ) + 1;
    return this.http
      .get<{ success: boolean; wallpapers: Wallpaper[] }>(
        `https://wall.alphacoders.com/api2.0/get.php?auth=${
          this.background.apiKey
        }&method=category&id=${
          this.background.sub_category
            ? this.background.sub_category.id
            : this.background.category
            ? this.background.category.id
            : 3
        }&page=${pageNo}&info_level=2`
      )
      .pipe(
        map((data: { success: boolean; wallpapers: Wallpaper[] }) => {
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

  // get category
  getBackgroundCategory() {
    return this.http
      .get<{
        success: boolean;
        categories: {
          name: string;
          id: number;
          count: number;
          url: string;
        }[];
      }>(
        `https://wall.alphacoders.com/api2.0/get.php?auth=0d52ba4842faf8b1e6fbff7313e786d5&method=category_list`
      )
      .pipe(
        map((data) => {
          return data.categories.map((data) => ({
            name: data.name,
            id: data.id,
            count: data.count,
          }));
        })
      );
  }

  getBackgroundSubCategory() {
    return this.http
      .get<{
        success: boolean;
        'sub-categories': {
          name: string;
          id: number;
          count: number;
          url: string;
        }[];
      }>(
        `https://wall.alphacoders.com/api2.0/get.php?auth=${
          this.background.apiKey
        }&method=sub_category_list&id=${
          this.background.category ? this.background.category.id : 3
        }`
      )
      .pipe(
        map((data) => {
          return data['sub-categories'].map((data) => ({
            name: data.name,
            id: data.id,
            count: data.count,
          }));
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
