import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { MusicService } from 'src/app/shared/music.service';

@Component({
  selector: 'app-audio-player',
  templateUrl: './audio-player.component.html',
  styleUrls: ['./audio-player.component.scss'],
})
export class AudioPlayerComponent implements OnInit {
  url!: string;
  audio = new Audio();
  audioNo = 0;
  shuffle = false;
  pinned = false;
  audioList!: { name: string }[];
  constructor(private musicService: MusicService) {}

  ngOnInit(): void {
    this.musicService.getMusic().subscribe((data) => {
      this.audioNo = Math.round(Math.random() * data.length - 1);
      this.audio.src = 'assets/Music/' + data[this.audioNo].name;
      this.audioList = data;
      this.audio.addEventListener('ended', () => {
        this.audioNo++;
        this.audio.pause();
        this.audio.src = 'assets/Music/' + this.audioList[this.audioNo].name;
        this.audio.currentTime = 0;
      });
    });
    // this.musicService.getAuth().subscribe((data: any) => {
    // this.url = data.previewURL;
    // this.audio.src = data.previewURL;
    // });
    this.audio.src =
      "http://www.miyako.pro/files/Music/Yukito's%201001%20Anime%20OPs%20&%20EDs/Naruto%20-%2004%20-%20OP4%20-%20GO!!!.mp3";
  }

  playPause(e: any) {
    this.audio.paused ? this.audio.play() : this.audio.pause();
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
    this.audio.currentTime = this.audio.duration * (percent / 100);
  }
  previousSong() {
    if (this.shuffle) {
      this.audioNo = Math.round(Math.random() * this.audioList.length - 1);
    } else {
      this.audioNo--;
    }
    this.audio.pause();
    this.audio.src = 'assets/Music/' + this.audioList[this.audioNo].name;
    this.audio.currentTime = 0;
  }
  nextSong() {
    if (this.shuffle) {
      this.audioNo = Math.round(Math.random() * this.audioList.length - 1);
    } else {
      this.audioNo++;
    }
    this.audio.pause();
    this.audio.src = 'assets/Music/' + this.audioList[this.audioNo].name;
    this.audio.currentTime = 0;
  }
  onShuffle() {
    this.shuffle = !this.shuffle;
  }
  pinPlayer() {
    this.pinned = !this.pinned;
    console.log(this.pinned);
  }
}
