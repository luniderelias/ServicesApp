import { UserInterface } from './../../../models/user';
import { FirebaseService } from './../../../services/firebase.service';
import { Component, ViewChild, ViewContainerRef, ViewRef } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { MessagingService } from 'src/app/services/messaging.service';
import { NotificationInterface } from 'src/app/models/notification';
import { AuthService } from 'src/app/services/auth.service';
import { AngularFireAuth } from '@angular/fire/auth';
import { Subscription } from 'rxjs/internal/Subscription';
import { Router } from '@angular/router';

@Component({
    selector: 'app-navbar',
    templateUrl: './navbar.component.html',
    styleUrls: ['./navbar.component.scss']
})

export class NavbarComponent {
    notifications = [];
    _subscription: Subscription;
    currentLang = 'en';
    toggleClass = 'ft-maximize';
    public isCollapsed = true;
    public isLogged = false;

    childViewRef: ViewRef;

    @ViewChild('notificationNumber', { read: ViewContainerRef }) vc: ViewContainerRef;

    constructor(private router: Router, private authService: AuthService,
        private translate: TranslateService, private afsAuth: AngularFireAuth,
        private messagingService: MessagingService, private firebaseService: FirebaseService) {
        // const browserLang: string = translate.getBrowserLang();
        // translate.use(browserLang.match(/en|es|pt|de/) ? browserLang : 'en');

        this.getCurrentUser();
        this.getNotifications();
        this._subscription = this.messagingService.currentMessage.subscribe((value) => {
            if (value !== null) {
                this.getNotifications();
            }
        });
    }


    getCurrentUser() {
        this.authService.isAuth().subscribe(auth => {
            localStorage.setItem('current_user', JSON.stringify(auth));
            if (auth) {
                this.isLogged = true;
            } else {
                this.isLogged = false;
                this.router.navigate(['/user/login']);
            }
        });
    }

    onLogout() {
        localStorage.clear();
        this.afsAuth.auth.signOut();
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

    removeNotification(notification) {
        this.firebaseService.deleteNotification(notification.$key);
        this.getNotifications();
        if (notification.data.order_id) {
            this.router.navigateByUrl('/pedidos/detalhes/' + notification.data.order_id);
            return;
        }
        if (notification.data.product_id) {
            this.router.navigateByUrl('/produtos/detalhes/' + notification.data.product_id);
            return;
        }
    }

    removeAllNotifications() {
        this.firebaseService.deleteAllNotifications();
        this.getNotifications();
    }

    insertChildView() {
        if (this.vc) {
            this.vc.insert(this.childViewRef);
        }
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
