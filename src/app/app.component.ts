import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'people-app';
  name: string;
  artists: any;

  onClick(event) {
    this.name = event.target.innerHTML;
  }

  addArtist(value) {
    if (value != null) {
      this.artists.push({
        name: value,
        school: 'Hard Knocks',
      });
    }
  }

  constructor() {
    this.name = 'Xhou Ta';
    this.artists = [
      { name: 'Barot Bellingham', school: 'Penn State' },
      { name: 'Jonathan Ferrar', school: 'University of Illinois' },
      { name: 'Hillary Post', school: 'University of Florida' }
    ]
  }
}
