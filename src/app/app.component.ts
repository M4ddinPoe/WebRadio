import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {RadioPlayerComponent} from './radio-player/radio-player.component';
import {MatToolbar} from '@angular/material/toolbar';
import {StreamSelectionComponent} from './stream-selection/stream-selection.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, RadioPlayerComponent, MatToolbar, StreamSelectionComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'WebRadio';
}
