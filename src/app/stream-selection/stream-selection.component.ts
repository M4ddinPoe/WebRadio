import {Component, Input, Injectable, signal} from '@angular/core';
import {StreamingItem} from '../model/streaming-item';
import {NgForOf} from '@angular/common';
import {StreamingEventService} from '../services/streaming-event.service';

@Component({
  selector: 'app-stream-selection',
  imports: [
    NgForOf
  ],
  templateUrl: './stream-selection.component.html',
  styleUrl: './stream-selection.component.css'
})
export class StreamSelectionComponent {
  @Input() items: StreamingItem[] = [
    { imgSrc: 'radiobob.png', label: 'Radio Bob', url: 'https://regiocast.streamabc.net/regc-boblivenrwneu-mp3-192-2881552?sABC=67s127s6%230%23q88s0nn6p0snrs9q086578990q1o387n%23fgernzf.enqvbobo.qr&aw_0_1st.playerid=streams.radiobob.de&amsparams=playerid:streams.radiobob.de;skey:1743857654' },
    { imgSrc: 'WDR_1LIVE_Logo_2016.svg.png', label: '1Live', url: 'https://d141.rndfnk.com/ard/wdr/1live/live/mp3/128/stream.mp3?cid=01FBRZTS1K1TCD4KA2YZ1ND8X3&sid=2vxAxA0JNNmsRm87XVWaeg3b4zx&token=7klYHSVVVJiFyBF7-_avUm4kswDabuaWyQZTrcrcaPY&tvf=n4330Y_VNxhkMTQxLnJuZGZuay5jb20' },
    { imgSrc: 'WDR_2.png', label: 'WDR 2', url: 'https://f121.rndfnk.com/ard/wdr/wdr2/ruhrgebiet/mp3/128/stream.mp3?cid=01FBS06TXC96M7AXN9A044SSFF&sid=2vxB0ppTSGXPwuxSdkmqSYx88Ch&token=uMUVWbCLqTnYeA_EBAM9601tXYKh5MxPE4C4lzXJq0U&tvf=MYsmx5bVNxhmMTIxLnJuZGZuay5jb20' },
  ];

  constructor(private streamingEventService: StreamingEventService) {
  }

  private streamSelectedSignal = signal<StreamingItem>({imgSrc: '', label: '', url: ''});

  onWheel(evt: WheelEvent, scroller: HTMLElement) {
    if (Math.abs(evt.deltaY) > Math.abs(evt.deltaX)) {
      evt.preventDefault();                           // keep the page from scrolling
      scroller.scrollLeft += evt.deltaY;              // invert if you want opposite direction
    }
  }

  onItemClick(item: StreamingItem) {

    this.streamingEventService.updateEvent(item);
  }
}
