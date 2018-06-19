import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import {HttpClientModule} from '@angular/common/http';
import { AppComponent } from './app.component';

import { AppHeaderComponent } from './components/app-header/app-header.component';
import { AppFooterComponent } from './components/app-footer/app-footer.component';
import { AppMenuComponent } from './components/app-menu/app-menu.component';
import { AppSettingsComponent } from './components/app-settings/app-settings.component';
import { UploadFileComponentComponent } from './components/upload-file-component/upload-file-component.component';
import {FileUploadModule} from 'primeng/fileupload';
import { ListUploadComponentComponent } from './components/list-upload-component/list-upload-component.component';
import { UploadFileService } from './components/services/upload-file.service';
import { DetailUploadComponentComponent } from './components/detail-upload-component/detail-upload-component.component';
@NgModule({
  declarations: [
    AppComponent,
    AppHeaderComponent,
    AppFooterComponent,
    AppMenuComponent,
    AppSettingsComponent,
    UploadFileComponentComponent,
    ListUploadComponentComponent,
    DetailUploadComponentComponent
   
  ],
  imports: [
    BrowserModule,
    FileUploadModule,
    HttpClientModule
  ],
  providers: [UploadFileService],
  bootstrap: [AppComponent]
})
export class AppModule { }
