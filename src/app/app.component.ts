import { Component } from '@angular/core';
import { VIDEOS } from './mock-videos';
import { Video } from './video';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Abounding Hope and Joy';
  videos = VIDEOS;
  constructor() { }

  getVidPath(vid: Video) {
    return `//bordercitychurch.blob.core.windows.net/aboundinghopeandjoy/${vid.name}`;
  }
}
