import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ComicsComponent } from './comics/comics.component';
import { CharactersComponent } from './characters/characters.component';

const routes: Routes = [

  {
    path: 'comics',
    component: ComicsComponent

  },
  {
    path: 'characters',
    component: CharactersComponent
  },
  {
    path: '',
    redirectTo: '/comics',
    pathMatch: 'full' 
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
