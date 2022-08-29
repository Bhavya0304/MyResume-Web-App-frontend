import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { NgxSkeletonLoaderModule } from 'ngx-skeleton-loader';
import {AccordionModule} from 'primeng/accordion';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import {ImageModule} from 'primeng/image';
import {TimelineModule} from 'primeng/timeline';
import {TerminalModule} from 'primeng/terminal';
import {ButtonModule} from 'primeng/button';
import {ChartModule} from 'primeng/chart';
import { CardModule } from "primeng/card";
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
import { HomepageComponent } from './Components/Pages/homepage/homepage.component';
import { TerminalComponent } from './Components/Pages/terminal/terminal.component';

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
    HomepageComponent,
    TerminalComponent
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
    TerminalModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
