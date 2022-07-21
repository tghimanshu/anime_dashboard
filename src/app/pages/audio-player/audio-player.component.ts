import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { MusicService } from 'src/app/shared/music.service';

@Component({
  selector: 'app-audio-player',
  templateUrl: './audio-player.component.html',
  styleUrls: ['./audio-player.component.scss'],
})
export class AudioPlayerComponent implements OnInit {
  url!: string;
  duration!: number;
  currentTime!: number;
  loop!: boolean;
  audio = new Audio();
  isPlaying = false;
  constructor(private musicService: MusicService) {}

  ngOnInit(): void {
    this.musicService.getAuth().subscribe((data: any) => {
      this.url = data.previewURL;
      this.audio.src = data.previewURL;
      // this.audio.src =
      //   'https://talkglitz.media/wp-content/uploads/2019/05/Shawn_Mendes_-_If_I_Cant_Have_You_talkglitz.tv.mp3';
      this.audio.src =
        "http://www.miyako.pro/files/Music/Yukito's%201001%20Anime%20OPs%20&%20EDs/Naruto%20-%2004%20-%20OP4%20-%20GO!!!.mp3";
    });
  }

  playPause(e: any) {
    if (e.target.innerHTML === 'play_arrow') {
      this.audio.play();
      this.isPlaying = true;
      console.log(this.audio.dataset);
      e.target.innerHTML = 'pause';
    } else {
      e.target.innerHTML = 'play_arrow';
      this.audio.pause();
      this.isPlaying = false;
    }
  }

  repeatChange(e: any) {
    if (e.target.innerHTML === 'repeat') {
      e.target.innerHTML = 'repeat_one';
      this.audio.loop = true;
    } else {
      e.target.innerHTML = 'repeat';
      this.audio.loop = false;
    }
  }
  volumeChange(e: any) {
    if (e.target.innerHTML === 'volume_up') {
      e.target.innerHTML = 'volume_off';
      this.audio.muted = true;
    } else {
      e.target.innerHTML = 'volume_up';
      this.audio.muted = false;
    }
  }
  @ViewChild('elem') progressElem: any;

  seek(e: MouseEvent, width: number) {
    let percent = (e.offsetX * 100) / width;
    console.log(percent);
    this.audio.currentTime = this.audio.duration * (percent / 100);
  }
}
