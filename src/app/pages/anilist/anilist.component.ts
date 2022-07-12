import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-anilist',
  templateUrl: './anilist.component.html',
  styleUrls: ['./anilist.component.scss'],
})
export class AnilistComponent implements OnInit {
  constructor(private router: Router) {}

  ngOnInit(): void {
    if (!localStorage.getItem('anilist_token')) {
      this.router.navigateByUrl('anilist/authenticate');
    }
  }
}
