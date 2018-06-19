import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';
import { UploadFileService } from '../../components/services/upload-file.service';

@Component({
  selector: 'list-upload-component',
  templateUrl: './list-upload-component.component.html',
  styleUrls: ['./list-upload-component.component.css']
})
export class ListUploadComponentComponent implements OnInit {
  public power;
  showFile = false
  fileUploads: Observable<string[]>
  constructor(private uploadService: UploadFileService) { }

  ngOnInit() {
  }

  showFiles(enable: boolean) {
    this.showFile = enable

    if (enable) {
      this.fileUploads = this.uploadService.getFiles();
    }
  }
  welcomeToAvengerWorld(){
    console.log("welcomeToAvengerWorld");
    this.uploadService.getAvengers().subscribe(
      data => { this.power = data},
     err => console.error(err),
     () => console.log('done loading power'+this.power)
    );
  }
}
