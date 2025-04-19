import {Component, OnInit, ViewChild, ElementRef, computed, effect} from '@angular/core';
import {AudioService} from '../services/audio.service';
import {MatButton} from '@angular/material/button';
import {MatIcon} from '@angular/material/icon';
import {MatToolbar, MatToolbarRow} from '@angular/material/toolbar';
import {StreamingEventService} from '../services/streaming-event.service';
import {StreamingItem} from '../model/streaming-item';
import {NgOptimizedImage} from '@angular/common';

@Component({
  selector: 'app-radio-player',
  imports: [
    MatButton,
    MatIcon,
    MatToolbar,
    MatToolbarRow,
    NgOptimizedImage,
  ],
  templateUrl: './radio-player.component.html',
  styleUrl: './radio-player.component.css'
})
export class RadioPlayerComponent implements OnInit {
  public selectedStream: StreamingItem = { imgSrc: '', label: '', url: ''};
  public isPlaying = false;

  constructor(
    public audioService: AudioService,
    public streamingEventService: StreamingEventService) {

    effect(() => {
      const item = streamingEventService.currentEvent();
      this.onSelectedStreamChanged(item)
    });
  }

  ngOnInit(): void {
  }

  onPlayPauseClick() {
    if (this.isPlaying)
      this.stop();
    else
      this.play();
  }

  private play() {
    if (this.isStreamingItemEmpty(this.selectedStream))
      return;

    this.playStream(this.selectedStream.url);
    this.isPlaying = true;
  }

  private stop() {
    this.audioService.stop();
    this.isPlaying = false;
  }

  playStream(url: string) {
    this.audioService.playStream(url).subscribe(events => {
      // listening for fun here
    });
  }

  private onSelectedStreamChanged(item: StreamingItem) {
    if (this.selectedStream == item)
      return;

    if (this.isStreamingItemEmpty(this.selectedStream))
      this.stop();

    this.selectedStream = item;
    this.play();
  }

  private isStreamingItemEmpty(item: StreamingItem) {
    return item == null || item.label == null || item.label.length == 0;
  }
}
