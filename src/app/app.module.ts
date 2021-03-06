import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MaterialModule } from './material.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FlexLayoutModule } from '@angular/flex-layout';

import { AppComponent } from './app.component';
import { ArtistItemComponent } from './artist-item/artist-item.component';
import { ArtistDetailsComponent } from './artist-details/artist-details.component';

import { SearchPipe } from './pipe-search/pipe.search';

@NgModule({
  declarations: [
    AppComponent,
    ArtistItemComponent,
    ArtistDetailsComponent,
    SearchPipe
  ],
  imports: [
    BrowserModule, FormsModule, MaterialModule, BrowserAnimationsModule, FlexLayoutModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
