import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { HttpModule } from '@angular/http';

// Routes import
import { routing } from './app.routes';

// Services
import { HideUiCommunicationService } from './services/component-communicators/hide-ui-communication.service';
import {SocialMediaApiService} from './services/social-media/social-media-api.service';

// Components
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { LoaderComponent } from './components/loader/loader.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { StagecastSocialMediaComponent } from './components/stagecast-social-media/stagecast-social-media.component';
import { HeaderComponent } from './components/header/header.component';
import { NewsletterComponent } from './components/advertisements/newsletter/newsletter.component';
import { FacebookPostComponent } from './components/facebook-post/facebook-post.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoaderComponent,
    PageNotFoundComponent,
    StagecastSocialMediaComponent,
    HeaderComponent,
    NewsletterComponent,
    FacebookPostComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    routing
  ],
  providers: [
    HideUiCommunicationService,
    SocialMediaApiService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
