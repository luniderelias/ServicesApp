import { Component } from '@angular/core';

import { MessagingService } from './services/messaging.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  message;
  constructor(private messagingService: MessagingService) { }
  title = 'bookStore';

  ngOnInit() {
    let userId = 'user001';
    switch (localStorage.getItem('current_user_role')) {
      case 'admin':
        userId = 'admin';
        break;
      case 'store_one':
        userId = 'store_one';
        break;
    }
    this.messagingService.requestPermission(userId);
    this.messagingService.receiveMessage();
    this.message = this.messagingService.currentMessage;
  }
}
