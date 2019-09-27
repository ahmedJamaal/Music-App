import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ArtistComponent } from './artist/artist.component';
import { PlaylistComponent } from './playlist/playlist.component';
import { FavoriteComponent } from './favorite/favorite.component';
import { ArtistDetailsComponent } from './artist/artist-details/artist-details.component';

const routes: Routes = [
  {path:'',component:HomeComponent},
  {path:'artists',component:ArtistComponent},
  {path:'artist-details',component:ArtistDetailsComponent},
  {path:'playlist',component:PlaylistComponent},
  {path:'favorite',component:FavoriteComponent}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
