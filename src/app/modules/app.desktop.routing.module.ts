import { NgModule } from '@angular/core';
import { DesktopComponent } from '../components/desktop/desktop.component';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
    {
        path: '', component: DesktopComponent
    }
]

@NgModule({

    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]

})
export class AppDesktopRoutingModule { }