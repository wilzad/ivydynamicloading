import { NgModule } from '@angular/core';
import { DesktopComponent } from '../components/desktop/desktop.component';
import { AppDesktopRoutingModule } from './app.desktop.routing.module';

@NgModule({
    imports: [
        AppDesktopRoutingModule
    ],
    declarations: [
        DesktopComponent
    ]
})
export class AppDesktopModule { }