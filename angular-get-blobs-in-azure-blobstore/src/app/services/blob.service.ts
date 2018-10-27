import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Azureblob} from '../models/azureblob';
import {environment} from "../../environments/environment";
import * as AzureStorageBlobServiceJS from '../../js/bundle/azure-storage.blob.js';
import {Observable} from 'rxjs/Observable';

@Injectable()
export class BlobService {
  constructor(private httpClient: HttpClient) { }

  blobServiceObj: any;

  connectionString: string;

  blobList: Azureblob[] = [];

  /*  */
  getAllBlobsJS(): Observable<Azureblob[]> {
    return new Observable(obs=>{
      this.connectionString = "DefaultEndpointsProtocol=https;AccountName=acsazurestore;AccountKey=qjC6s44AmSbAkJ7Xqdsks/jjZDIYRTY8qgWKds8w8PXdL+Q08mU/yu3Oh/4wO3sYTwNgNiA6EG66gBRWBqMBNA==";
      this.blobServiceObj = AzureStorageBlobServiceJS.createBlobService(this.connectionString);

      this.blobList = this.blobServiceObj.listBlobsSegmented('acsazurecontainer', null,
        function (error, results) {
        if (error) {
          console.log("**** Error");
          obs.error();
        } else {
          const event = results.entries.map(blob => new Azureblob(blob.name));
          obs.next(event);
          obs.complete();
        }
        //console.log("Service - localArr - # of blobs returned=", localArr.length);
      });
    })
  }

  /**
   *
   */
  getThumbnailForBlobUrl() {

  }
}
