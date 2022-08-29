import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomepageComponent } from './Components/Pages/homepage/homepage.component';
import { TerminalComponent } from './Components/Pages/terminal/terminal.component';

const routes: Routes = [
  { path: '', component: HomepageComponent },
  { path: 'terminal', component: TerminalComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
