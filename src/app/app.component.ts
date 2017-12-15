import { Component } from '@angular/core';
import { HideUiCommunicationService } from './services/component-communicators/hide-ui-communication.service';
import {Title} from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor( private hideUiCommunicationService: HideUiCommunicationService,
               private titleService: Title) {
  }

  hideOverlappingUI(event: any): void {
    this.hideUiCommunicationService.hideOverlappingElements(event);
  }
}
