import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { ArtistComponent } from './artist/artist.component';
import { PlaylistComponent } from './playlist/playlist.component';
import { FavoriteComponent } from './favorite/favorite.component';
import { MusicPlayerComponent } from './music-player/music-player.component';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { DrobdownDirective } from './shared/drobdown.directive';
import { LoginComponent } from './login/login.component';
import { CoverComponent } from './home/cover/cover.component';
import { QuoteComponent } from './home/quote/quote.component';
import { DiscoverComponent } from './home/discover/discover.component';
import { MusicCardComponent } from './home/music-card/music-card.component';
import { SoundCloudComponent } from './home/sound-cloud/sound-cloud.component';
import { ArtistDetailsComponent } from './artist/artist-details/artist-details.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ArtistComponent,
    PlaylistComponent,
    FavoriteComponent,
    MusicPlayerComponent,
    HomeComponent,
    DrobdownDirective,
    LoginComponent,
    CoverComponent,
    QuoteComponent,
    DiscoverComponent,
    MusicCardComponent,
    SoundCloudComponent,
    ArtistDetailsComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
