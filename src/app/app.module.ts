import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { NgxSkeletonLoaderModule } from 'ngx-skeleton-loader';
import {AccordionModule} from 'primeng/accordion';
import {DialogModule} from 'primeng/dialog';
import {InputTextModule} from 'primeng/inputtext';
import {PasswordModule} from 'primeng/password';
import {ToastModule} from 'primeng/toast';
import { DragulaModule } from 'ng2-dragula';


import { AppRoutingModule } from './app-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import {ImageModule} from 'primeng/image';
import {TimelineModule} from 'primeng/timeline';
import {TerminalModule} from 'primeng/terminal';
import {ButtonModule} from 'primeng/button';
import {ChartModule} from 'primeng/chart';
import { CardModule } from "primeng/card";
import {MenubarModule} from 'primeng/menubar';
import {TabViewModule} from 'primeng/tabview';
import {FileUploadModule} from 'primeng/fileupload';
import {CalendarModule} from 'primeng/calendar';
import { NgxSummernoteModule } from 'ngx-summernote';

import { HeaderComponent } from './Components/header/header.component';
import { BodyComponent } from './Components/body/body.component';
import { FooterComponent } from './Components/footer/footer.component';
import { TagsInfoComponent } from './Components/Reuseables/tags-info/tags-info.component';
import { TagsButtonComponent } from './Components/Reuseables/tags-button/tags-button.component';
import { SocialButtonsComponent } from './Components/Reuseables/social-buttons/social-buttons.component';
import { EducationComponent } from './Components/body/education/education.component';
import { ExpereinceComponent } from './Components/body/expereince/expereince.component';
import { LifechartsComponent } from './Components/body/lifecharts/lifecharts.component';
import { SkillchartsComponent } from './Components/body/skillcharts/skillcharts.component';
import { AchievementsComponent } from './Components/body/achievements/achievements.component';
import { SafeHtmlPipe } from './Pipes/safeHtml/safe-html.pipe';
import { SortByOrderPipe } from './Pipes/Sorting/sort-by-order.pipe';
import { HomepageComponent } from './Components/Pages/homepage/homepage.component';
import { TerminalComponent } from './Components/Pages/terminal/terminal.component';
import { NoUserComponent } from './Components/Pages/no-user/no-user.component';
import { DashboardComponent } from './Components/Pages/dashboard/dashboard.component';
import { ITShellComponent } from './Components/Reuseables/itshell/itshell.component';
import { UserInfoComponent } from './Components/Sudouser/user-info/user-info.component';
import { HandleimagesComponent } from './Components/Sudouser/handleimages/handleimages.component';
import { ImageboxComponent } from './Components/Reuseables/imagebox/imagebox.component';
import { CommingSoonComponent } from './Components/Reuseables/comming-soon/comming-soon.component';
import { SelectimageboxComponent } from './Components/Reuseables/selectimagebox/selectimagebox.component';
import { UserTagsComponent } from './Components/Sudouser/user-tags/user-tags.component';
import { UploadResumeComponent } from './Components/Sudouser/upload-resume/upload-resume.component';
import { UserTagsBlockComponent } from './Components/Reuseables/user-tags-block/user-tags-block.component';
import { SpinnnerComponent } from './Components/Reuseables/spinnner/spinnner.component';
import { ToastComponent } from './Components/Reuseables/toast/toast.component';
import { UserSkillsComponent } from './Components/Sudouser/user-skills/user-skills.component';
import { UserSkillsBlockComponent } from './Components/Reuseables/user-skills-block/user-skills-block.component';
import { UserSocialsComponent } from './Components/Sudouser/user-socials/user-socials.component';
import { UserSocialsBlockComponent } from './Components/Reuseables/user-socials-block/user-socials-block.component';
import { UserEducationComponent } from './Components/Sudouser/user-education/user-education.component';
import { UserExperienceComponent } from './Components/Sudouser/user-experience/user-experience.component';
import { UserEducationBlockComponent } from './Components/Reuseables/user-education-block/user-education-block.component';
import { UserExperienceBlockComponent } from './Components/Reuseables/user-experience-block/user-experience-block.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    BodyComponent,
    FooterComponent,
    TagsInfoComponent,
    TagsButtonComponent,
    SocialButtonsComponent,
    EducationComponent,
    ExpereinceComponent,
    LifechartsComponent,
    SkillchartsComponent,
    AchievementsComponent,
    SafeHtmlPipe,
    SortByOrderPipe,
    HomepageComponent,
    TerminalComponent,
    NoUserComponent,
    DashboardComponent,
    ITShellComponent,
    UserInfoComponent,
    HandleimagesComponent,
    ImageboxComponent,
    CommingSoonComponent,
    SelectimageboxComponent,
    UserTagsComponent,
    UploadResumeComponent,
    UserTagsBlockComponent,
    SpinnnerComponent,
    ToastComponent,
    UserSkillsComponent,
    UserSkillsBlockComponent,
    UserSocialsComponent,
    UserSocialsBlockComponent,
    UserEducationComponent,
    UserExperienceComponent,
    UserEducationBlockComponent,
    UserExperienceBlockComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    BrowserAnimationsModule,
    TimelineModule,
    CardModule,
    ButtonModule,
    ChartModule,
    ImageModule,
    HttpClientModule,
    NgxSkeletonLoaderModule,
    AccordionModule,
    TerminalModule,
    DialogModule,
    InputTextModule,
    PasswordModule,
    FormsModule,
    MenubarModule,
    TabViewModule,
    FileUploadModule,
    ToastModule,
    ReactiveFormsModule,
    CalendarModule,
    NgxSummernoteModule,
    DragulaModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
