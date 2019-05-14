import { FirebaseService } from './../../../services/firebase.service';
import { Component, ViewChild, ViewContainerRef, ViewRef } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { MessagingService } from 'src/app/services/messaging.service';
import { NotificationInterface } from 'src/app/models/notification';

@Component({
    selector: 'app-navbar',
    templateUrl: './navbar.component.html',
    styleUrls: ['./navbar.component.scss']
})

export class NavbarComponent {
    notifications = [];
    _subscription = [];
    currentLang = 'en';
    toggleClass = 'ft-maximize';
    public isCollapsed = true;

    childViewRef: ViewRef;

    @ViewChild('notificationNumber', { read: ViewContainerRef }) vc: ViewContainerRef;

    constructor(public translate: TranslateService, private messagingService: MessagingService, private firebaseService: FirebaseService) {
        // const browserLang: string = translate.getBrowserLang();
        // translate.use(browserLang.match(/en|es|pt|de/) ? browserLang : 'en');
        this.getNotifications();
        this._subscription.push(this.messagingService.currentMessage.subscribe((value) => {
            if (value !== null) {
                this.getNotifications();
            }
        }));
    }


    getNotifications() {
        this.firebaseService.getNotifications().snapshotChanges().subscribe(notifications => {
            this.notifications = [];
            notifications.forEach(item => {
              let a = item.payload.toJSON();
              a['$key'] = item.key;
              this.notifications.push(a as NotificationInterface);
            });
            if (notifications !== null) {
                this.reloadChildView();
            }
          });
    }

    ChangeLanguage(language: string) {
        this.translate.use(language);
    }

    ToggleClass() {
        if (this.toggleClass === 'ft-maximize') {
            this.toggleClass = 'ft-minimize';
        } else {
            this.toggleClass = 'ft-maximize';
        }
    }

    addNotification(notification: any) {
        this.notifications.push(notification);
        this.reloadChildView();
    }

    removeNotification(id) {
        this.firebaseService.deleteNotification(id);
        this.getNotifications();
    }

    removeAllNotifications() {
        this.firebaseService.deleteAllNotifications();
        this.getNotifications();
    }

    insertChildView() {
        this.vc.insert(this.childViewRef);
    }

    removeChildView() {
        if (this.vc) {
            this.vc.detach();
        }
    }

    reloadChildView() {
        this.removeChildView();
        setTimeout(() => {
            this.insertChildView();
        }, 3000);
    }

    ngOnDestroy() {
        this._subscription.unsubscribe();
    }
}
