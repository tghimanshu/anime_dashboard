import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-anilist-authenticate',
  templateUrl: './anilist-authenticate.component.html',
  styleUrls: ['./anilist-authenticate.component.scss'],
})
export class AnilistAuthenticateComponent implements OnInit {
  constructor(private route: ActivatedRoute, private router: Router) {}

  ngOnInit(): void {
    this.route.queryParams.subscribe((param) => {
      if (param['access_token']) {
        localStorage.setItem('anilist_token', param['access_token']);
        this.router.navigateByUrl('anilist');
      }
    });
  }
}
