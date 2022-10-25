import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomepageComponent } from './Components/Pages/homepage/homepage.component';
import { TerminalComponent } from './Components/Pages/terminal/terminal.component';
import { DashboardComponent } from './Components/Pages/dashboard/dashboard.component';
import { NoUserComponent } from './Components/Pages/no-user/no-user.component'

const routes: Routes = [
  { path: 'terminal', component: TerminalComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: '%%no-user%%', component: NoUserComponent },
  { path: ':id', component: HomepageComponent },
  { path: '', component: HomepageComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
