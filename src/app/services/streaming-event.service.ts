import { Injectable, signal } from '@angular/core';
import {StreamingItem} from '../model/streaming-item';

@Injectable({
  providedIn: 'root'
})
export class StreamingEventService {
  // Signal erstellen
  private streamSelectedSignal = signal<StreamingItem>({imgSrc: '', label: '', url: ''});

  // Computed-Signal (optional, falls Sie eine Transformation benötigen)
  public readonly currentEvent = this.streamSelectedSignal.asReadonly();

  // Methode zum Aktualisieren des Signals
  updateEvent(newValue: StreamingItem) {
    this.streamSelectedSignal.set(newValue);
  }
}
