import { Component, OnInit } from '@angular/core';
import { ROUTES_ADMIN, ROUTES_STORE_ONE } from './sidebar-routes.config';
import { RouteInfo } from "./sidebar.metadata";
import { Router, ActivatedRoute } from "@angular/router";
import { TranslateService } from '@ngx-translate/core';

declare var $: any;

@Component({
    selector: 'app-sidebar',
    templateUrl: './sidebar.component.html',
})

export class SidebarComponent implements OnInit {
    public menuItems: any[];

    constructor(private router: Router,
        private route: ActivatedRoute, public translate: TranslateService) {

    }

    ngOnInit() {
        $.getScript('./assets/js/app-sidebar.js');
        switch (localStorage.getItem('current_user_role')) {
            case 'admin':
                this.menuItems = ROUTES_ADMIN.filter(menuItem => menuItem);
                break;
            case 'store_one':
                this.menuItems = ROUTES_STORE_ONE.filter(menuItem => menuItem);
                break;
        }
    }

}
