import { NgModule } from '@angular/core';
import { MobileComponent } from '../components/mobile/mobile.component';
import { AppMobileRoutingModule } from './app.mobile.routing.module';

@NgModule({
    declarations: [
        MobileComponent
    ],
    imports: [
        AppMobileRoutingModule
    ]
})
export class AppMobileModule { }