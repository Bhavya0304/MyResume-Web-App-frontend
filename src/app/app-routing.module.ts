import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomepageComponent } from './Components/Pages/homepage/homepage.component';
import { TerminalComponent } from './Components/Pages/terminal/terminal.component';
import { DashboardComponent } from './Components/Pages/dashboard/dashboard.component';
import { NoUserComponent } from './Components/Pages/no-user/no-user.component'
import { UserInfoComponent } from './Components/Sudouser/user-info/user-info.component';
import { HandleimagesComponent } from './Components/Sudouser/handleimages/handleimages.component';
import { CommingSoonComponent  } from './Components/Reuseables/comming-soon/comming-soon.component';
import { UserTagsComponent } from './Components/Sudouser/user-tags/user-tags.component';
import { UploadResumeComponent } from './Components/Sudouser/upload-resume/upload-resume.component';

const routes: Routes = [
  { path: 'terminal', component: TerminalComponent },
  { path: 'dashboard', component: DashboardComponent,children:[
    {
      path:'userinfo',component:UserInfoComponent
    },
    {
      path:'handlefiles',component:HandleimagesComponent
    },
    {
      path:'usertags',component:UserTagsComponent
    },
    {
      path:'uploadresume',component:UploadResumeComponent
    },
    {
      path:'skilltags',component:CommingSoonComponent
    },
    {
      path:'socialbuttons',component:CommingSoonComponent
    },
    {
      path:'usereducations',component:CommingSoonComponent
    },
    {
      path:'userexperience',component:CommingSoonComponent
    },
    {
      path:'usertimeline',component:CommingSoonComponent
    },
  ] },
  { path: '%%no-user%%', component: NoUserComponent },
  { path: ':id', component: HomepageComponent },
  { path: '', component: HomepageComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
