import { NgModule, Optional, Inject, ANALYZE_FOR_ENTRY_COMPONENTS } from '@angular/core';
import { Routes, RouterModule, ROUTES } from '@angular/router';

import { getModule } from './routehelper/router';

const routes: Routes = [];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [
    { provide: ROUTES, multi: true, useFactory: getModule, useValue: {}, deps: [[new Optional(), new Inject('agent')]] },
    { provide: ANALYZE_FOR_ENTRY_COMPONENTS, multi: true, useValue: routes }

  ]
})
export class AppRoutingModule { }
