import {
  animate,
  group,
  query,
  style,
  transition,
  trigger,
} from '@angular/animations';
import { Component, HostListener } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';
import { Hotkey, HotkeysService } from 'angular2-hotkeys';
import { map, Observable, timer } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [
    trigger('routeAnim', [
      transition(':increment', [
        style({ position: 'relative', overflow: 'hidden' }),
        query(
          ':enter, :leave',
          [
            style({
              position: 'absolute',
              top: 0,
              left: 0,
              width: '100%',
              height: '100%',
              // display: 'block',
            }),
          ],
          { optional: true }
        ),
        group([
          query(
            ':leave',
            [
              animate(
                '200ms ease-in',
                style({ opacity: 0, transform: 'translateX(-50px)' })
              ),
            ],
            {
              optional: true,
            }
          ),
          query(
            ':enter',
            [
              style({ opacity: 0, transform: 'translateX(50px)' }),
              animate(
                '250ms 120ms ease-out',
                style({ opacity: 1, transform: 'translateX(0)' })
              ),
            ],
            {
              optional: true,
            }
          ),
        ]),
      ]),
      transition(':decrement', [
        style({ position: 'relative', overflow: 'hidden' }),
        query(
          ':enter, :leave',
          [
            style({
              position: 'absolute',
              top: 0,
              left: 0,
              width: '100%',
              height: '100%',
              // display: 'block',
            }),
          ],
          { optional: true }
        ),
        group([
          query(
            ':leave',
            [
              animate(
                '200ms ease-in',
                style({ opacity: 0, transform: 'translateX(50px)' })
              ),
            ],
            {
              optional: true,
            }
          ),
          query(
            ':enter',
            [
              style({ opacity: 0, transform: 'translateX(-50px)' }),
              animate(
                '250ms 120ms ease-out',
                style({ opacity: 1, transform: 'translateX(0)' })
              ),
            ],
            {
              optional: true,
            }
          ),
        ]),
      ]),
    ]),
  ],
})
export class AppComponent {
  bg: string = 'https://wallpaperaccess.com/full/1250843.png';
  loadingBGImg!: boolean;
  infoVisible!: boolean;
  bgLocked: boolean = false;
  dateTime!: Observable<Date>;

  constructor(private _hotKeyService: HotkeysService, private router: Router) {
    _hotKeyService.add([
      new Hotkey(
        'r',
        (e: KeyboardEvent, combo: string) => {
          !this.loadingBGImg && !this.bgLocked && this.changeBGImage();
          return false;
        },
        undefined,
        'Change Background Image'
      ),
      new Hotkey(
        'b',
        (e: KeyboardEvent, combo: string) => {
          router.navigateByUrl('bookmarks');
          return false;
        },
        undefined,
        'Go to Bookmarks'
      ),
      new Hotkey(
        'b a',
        (e: KeyboardEvent, combo: string) => {
          router.navigateByUrl('bookmarks/add');
          return false;
        },
        undefined,
        'Add Bookmark'
      ),
      new Hotkey(
        'b m',
        (e: KeyboardEvent, combo: string) => {
          router.navigateByUrl('bookmarks/manage');
          return false;
        },
        undefined,
        'Manage Bookmark'
      ),
      new Hotkey(
        't',
        (e: KeyboardEvent, combo: string) => {
          router.navigateByUrl('todos');
          return false;
        },
        undefined,
        'Go to Todos'
      ),
      new Hotkey(
        't a',
        (e: KeyboardEvent, combo: string) => {
          router.navigateByUrl('todos/add');
          return false;
        },
        undefined,
        'Add Todos'
      ),
      new Hotkey(
        'n',
        (e: KeyboardEvent, combo: string) => {
          router.navigateByUrl('notes');
          return false;
        },
        undefined,
        'Go to Notes'
      ),
      new Hotkey(
        'n a',
        (e: KeyboardEvent, combo: string) => {
          router.navigateByUrl('notes/add');
          return false;
        },
        undefined,
        'Add Notes'
      ),
      new Hotkey(
        'g',
        (e: KeyboardEvent, combo: string) => {
          router.navigateByUrl('google');
          return false;
        },
        undefined,
        'Search Google'
      ),
      new Hotkey(
        'y',
        (e: KeyboardEvent, combo: string) => {
          router.navigateByUrl('youtube');
          return false;
        },
        undefined,
        'Search Youtube'
      ),
      new Hotkey(
        'x',
        (e: KeyboardEvent, combo: string) => {
          router.navigateByUrl('');
          return false;
        },
        undefined,
        'Go to Home'
      ),
      new Hotkey(
        'i',
        (e: KeyboardEvent, combo: string) => {
          this.infoVisible = !this.infoVisible;
          return false;
        },
        undefined,
        'Show Image Info'
      ),
      new Hotkey(
        'l',
        (e: KeyboardEvent, combo: string) => {
          this.bgLocked = !this.bgLocked;
          return false;
        },
        undefined,
        'Lock Background Image'
      ),
    ]);
  }

  ngOnInit() {
    const lsDate = localStorage.getItem('date')!;
    const currDate = new Date().getDate().toString();
    this.dateTime = timer(0, 1000).pipe(map(() => new Date()));
    if (lsDate !== currDate) {
      this.bg = localStorage.setItem('date', currDate)!;
      this.changeBGImage();
    } else {
      this.bg = localStorage.getItem('imageUrl')!;
    }
  }

  @HostListener('window:keydown:escape')
  onEscapePressed() {
    window.focus();
  }

  prepareRoute(outlet: RouterOutlet) {
    if (outlet.isActivated) return outlet.activatedRouteData['tab'];
    return;
  }
  async changeBGImage() {
    let pageNo = Math.floor(Math.random() * 500) + 1;
    this.loadingBGImg = true;
    const result = await fetch(
      `https://wall.alphacoders.com/api2.0/get.php?auth=0d52ba4842faf8b1e6fbff7313e786d5&method=category&id=3&page=${pageNo}&info_level=2`
    ).then((data) => data.json());
    let indexNo = Math.floor(Math.random() * result.wallpapers.length) + 1;
    // if (this.bg === result.url) return this.changeBGImage();
    this.bg = result.wallpapers[indexNo].url_image;
    localStorage.setItem('imageUrl', this.bg);
    localStorage.setItem(
      'background',
      JSON.stringify(result.wallpapers[indexNo])
    );
  }
  onBGImageLoad() {
    this.loadingBGImg = false;
  }
  onBGInfo() {
    this.infoVisible = true;
  }
  onBGInfoClose() {
    this.infoVisible = false;
  }
}
