import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { TranslateModule } from '@ngx-translate/core';
import { UiSwitchModule } from 'ngx-ui-switch';

import { CustomizerComponent } from './customizer/customizer.component';
import { ToggleFullscreenDirective } from './directives/toggle-fullscreen.directive';


@NgModule({
    exports: [
        CommonModule,
        CustomizerComponent,
        ToggleFullscreenDirective,
        NgbModule,
        TranslateModule,
        UiSwitchModule
    ],
    imports: [
        RouterModule,
        CommonModule,
        NgbModule,
        TranslateModule,
        UiSwitchModule
    ],
    declarations: [
        CustomizerComponent,
        ToggleFullscreenDirective
    ]
})
export class SharedModule { }
