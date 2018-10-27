import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { BlobViewerComponent } from './blobviewer/blobviewer.component';
import { KeysPipe } from './helpers/azureblob.pipe';

@NgModule({
  declarations: [
    AppComponent,
    BlobViewerComponent,
    KeysPipe
  ],
  imports: [
    HttpClientModule,
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
