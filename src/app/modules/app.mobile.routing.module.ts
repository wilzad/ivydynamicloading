import { NgModule } from '@angular/core';
import { MobileComponent } from '../components/mobile/mobile.component';
import { Routes, RouterModule } from '@angular/router';
const routes: Routes = [
    {
        path: '', component: MobileComponent
    }
]
@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class AppMobileRoutingModule { }