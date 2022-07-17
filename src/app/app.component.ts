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
import { MenuItem } from 'primeng/api';
import { map, Observable, Subscription, timer } from 'rxjs';
import { GeneralSettings, SettingsService } from './shared/settings.service';
import { UtilityService } from './shared/utility.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [
    trigger('routeAnim', [
      transition(':increment', [
        query(
          ':enter, :leave',
          [
            style({
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
        query(
          ':enter, :leave',
          [
            style({
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
  quote!: {
    anime: string;
    character: string;
    quote: string;
  };
  generalSettings!: GeneralSettings;
  quotesMenu: MenuItem[] = [
    {
      label: 'Change Quote',
      command: () => {
        this.utilityService.getQuote().subscribe((data) => {
          this.quote = data;
        });
      },
    },
  ];
  subscription!: Subscription;
  mainMenu: MenuItem[] = [
    {
      label: 'Update Bg',
      command: () => {
        this.changeBGImage();
      },
    },
    {
      label: 'lock Bg',
      command: () => {
        this.bgLocked = !this.bgLocked;
        localStorage.setItem('locked', this.bgLocked.toString());
      },
    },
    {
      separator: true,
    },
    {
      label: 'Settings',
      routerLink: 'settings',
    },
  ];

  constructor(
    private _hotKeyService: HotkeysService,
    private router: Router,
    private utilityService: UtilityService,
    private settingsService: SettingsService
  ) {
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
        'a',
        (e: KeyboardEvent, combo: string) => {
          router.navigateByUrl('anilist');
          return false;
        },
        undefined,
        'Go to Anilist'
      ),
      new Hotkey(
        's',
        (e: KeyboardEvent, combo: string) => {
          router.navigateByUrl('settings');
          return false;
        },
        undefined,
        'Go to Settings'
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
          localStorage.setItem('locked', this.bgLocked.toString());
          return false;
        },
        undefined,
        'Lock Background Image'
      ),
    ]);
  }

  ngOnInit() {
    this.settingsService.loadSettings();
    this.subscription = this.settingsService.settingsSubject.subscribe(
      (settings) => {
        this.generalSettings = settings.general;
      }
    );
    this.loadBgAndQuote();
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  loadBgAndQuote() {
    try {
      // Load BG
      const lsDate = localStorage.getItem('date') as string;
      const currDate = new Date().getDate().toString();
      if (lsDate !== currDate) {
        this.bg = localStorage.setItem('date', currDate)!;
        this.changeBGImage();
      } else {
        this.bg = localStorage.getItem('imageUrl')!;
      }

      // Load Quote
      if (!localStorage.getItem('quote')) {
        this.utilityService.getQuote().subscribe((data) => {
          this.quote = data;
        });
      } else {
        this.quote = JSON.parse(localStorage.getItem('quote') as string);
      }

      // Load Date And Time
      this.dateTime = timer(0, 1000).pipe(map(() => new Date()));
    } catch (error) {}
  }
  toggleLock() {
    this.bgLocked = !this.bgLocked;
    localStorage.setItem('locked', this.bgLocked.toString());
    return false;
  }

  @HostListener('window:keydown:escape')
  onEscapePressed() {
    window.focus();
  }

  prepareRoute(outlet: RouterOutlet) {
    if (outlet.isActivated) return outlet.activatedRouteData['tab'];
    return;
  }
  public changeBGImage() {
    this.loadingBGImg = true;
    this.utilityService.getBackgroundImage().subscribe((data) => {
      this.bg = data;
    });
  }
  onBGImageLoad() {
    this.loadingBGImg = false;
    this.infoVisible = false;
  }
  toggleBGInfo() {
    this.infoVisible = !this.infoVisible;
  }
}
