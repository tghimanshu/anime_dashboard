import { Component, OnInit } from '@angular/core';
import { faYoutube, faGoogle } from '@fortawesome/free-brands-svg-icons';

@Component({
  selector: 'app-tabs',
  templateUrl: './tabs.component.html',
  styleUrls: ['./tabs.component.scss'],
})
export class TabsComponent implements OnInit {
  faYoutube = faYoutube;
  faGoogle = faGoogle;

  constructor() {}

  ngOnInit(): void {}
}
