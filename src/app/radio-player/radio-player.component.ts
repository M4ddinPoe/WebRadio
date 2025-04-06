import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import {AudioService} from '../services/audio.service';
import {MatButton} from '@angular/material/button';
import {MatIcon} from '@angular/material/icon';
import {MatToolbar, MatToolbarRow} from '@angular/material/toolbar';

@Component({
  selector: 'app-radio-player',
  imports: [
    MatButton,
    MatIcon,
    MatToolbar,
    MatToolbarRow,
  ],
  templateUrl: './radio-player.component.html',
  styleUrl: './radio-player.component.css'
})
export class RadioPlayerComponent implements OnInit {
  private audioObj = new Audio();

  constructor(
    public audioService: AudioService) {
  }

  ngOnInit(): void {
  }

  play() {
    const url = 'https://regiocast.streamabc.net/regc-boblivenrwneu-mp3-192-2881552?sABC=67s127s6%230%23q88s0nn6p0snrs9q086578990q1o387n%23fgernzf.enqvbobo.qr&aw_0_1st.playerid=streams.radiobob.de&amsparams=playerid:streams.radiobob.de;skey:1743857654';
    this.playStream(url);
  }

  stop() {
    this.audioService.stop();
  }

  playStream(url: string) {
    this.audioService.playStream(url).subscribe(events => {
      // listening for fun here
    });
  }
}
