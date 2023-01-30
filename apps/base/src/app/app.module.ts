import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NxWelcomeComponent } from './nx-welcome.component';
import { HomeComponent } from './home/home.component';
import { LibraryComponent } from './library/library.component';

import { UiModule } from '@santhoshini/ui';
import { RouterModule } from '@angular/router';
import { Routes } from '@angular/router';
import { SecondSharedModule } from 'apps/secondary/src/app/app.module';

import { SharedModule } from './shared/shared.module';


const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'library',
    component: LibraryComponent
  },
]

@NgModule({
  declarations: [
    AppComponent,
    NxWelcomeComponent,
    HomeComponent,
    LibraryComponent,
  ],
  imports: [BrowserModule, UiModule,
    RouterModule.forRoot(routes),
    SecondSharedModule.forRoot(),
    SharedModule
  ],
  exports: [RouterModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }
