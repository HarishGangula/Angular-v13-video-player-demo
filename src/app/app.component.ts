import { Component, ElementRef, ViewChild } from '@angular/core';
import { config, context, metadata } from './data';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  playerConfig: any = {
    context,
    config,
    metadata
  };
  @ViewChild('video') video: ElementRef | undefined;

  ngOnInit() {

  }

  ngAfterViewInit() {

    const videoElement = document.createElement('sunbird-video-player');

    videoElement.setAttribute('player-config', JSON.stringify(this.playerConfig));



    videoElement.addEventListener('playerEvent', (event) => {

      console.log("On playerEvent", event);

    });



    videoElement.addEventListener('telemetryEvent', (event) => {

      console.log("On telemetryEvent", event);

    });

    this.video?.nativeElement.append(videoElement);
  }

}
