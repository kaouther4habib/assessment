import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AnalyticComponent } from './analytic/analytic.component';
import { EmailComponent } from './email/email.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { SidebarComponent } from './sidebar/sidebar.component';

const routes: Routes = [
 // {path:'' ,redirectTo: '/analytic', pathMatch: 'full' },
  {path:"email",component:EmailComponent},
  {path:"analytic",component:AnalyticComponent},
  {path:"**",component:PageNotFoundComponent},



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
