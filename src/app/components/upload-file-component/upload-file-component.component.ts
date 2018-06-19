import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpResponse, HttpEventType } from '@angular/common/http';
import { UploadFileService } from '../../components/services/upload-file.service';
@Component({
  selector: 'upload-file-component',
  templateUrl: './upload-file-component.component.html',
  styleUrls: ['./upload-file-component.component.css']
})
export class UploadFileComponentComponent implements OnInit {

  selectedFiles: FileList
  currentFileUpload: File
  progress: { percentage: number } = { percentage: 0 }
  constructor(private uploadService: UploadFileService) { }
  data : any[];
  ngOnInit() {
  }

//   msgs: Message[];
    
//     uploadedFiles: any[] = [];

//     onUpload(event) {
//         for(let file of event.files) {
//             this.uploadedFiles.push(file);
//         }
    
//         this.msgs = [];
//         this.msgs.push({severity: 'info', summary: 'File Uploaded', detail: ''});
//     }
selectFile(event) {
    this.selectedFiles = event.target.files;
  }

  uploadFile() {
    this.progress.percentage = 0;

    this.currentFileUpload = this.selectedFiles.item(0)
    console.log("my upload"+this.currentFileUpload.name);
     this.uploadService.pushFileToStorage(this.currentFileUpload).subscribe(event => {
       this.data = event;
       console.log(this.data);
    // if (event.type === HttpEventType.UploadProgress) {
    //   //   this.progress.percentage = Math.round(100 * event.loaded / event.total);
    //   // } else if (event instanceof HttpResponse) {
    //   //   console.log('File is completely uploaded!');
    //   // }
     })

    this.selectedFiles = undefined
  }

   
  upload(){
    this.progress.percentage = 0;

    this.currentFileUpload = this.selectedFiles.item(0)
    this.uploadService.sendFile(this.currentFileUpload);
    console.log("my upload"+this.currentFileUpload.name);
 this.selectedFiles = undefined
  }
}
