import {Injectable} from '@angular/core';
import {HttpClient, HttpRequest, HttpEvent ,HttpHeaders } from '@angular/common/http';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import { RequestOptions } from '@angular/http';



@Injectable()
export class UploadFileService {

  constructor(private http: HttpClient) {}
  demoUrl = "http://localhost:8080/api/welcome";
  getAllFiles="http://localhost:8080/api/getallfiles";
  pushFiles="http://localhost:8080/api/fileUpload";
  
   pushFileToStorage(file: File): Observable<any> {
   
     let formdata: FormData = new FormData();
     formdata.append('file', file);
    const req = new HttpRequest('POST', this.pushFiles , formdata, {
       reportProgress: true,
       responseType: 'json'
     });
    
     return this.http.request(req);
   }

  sendFile(fileObj : File){
   
     var headers = new HttpHeaders();
      headers.append('Content-Type', 'application/json');
      headers.append('Accept', 'application/json'); 
      let formData = new FormData();
      formData.append('file', fileObj);

    return this.http.post('http://localhost:8080/api/fileUpload', formData, { headers: headers })
    .map(res => console.log(res)).subscribe();
}

   getFiles(): Observable<any> {
     return this.http.get(this.getAllFiles);
   }

  getAvengers():Observable<String> {
    return this.http.get(this.demoUrl, {responseType: 'text'});
}
}
