import {Component, ElementRef, ViewChild, OnInit} from '@angular/core';
import {BlobService} from "../services/blob.service";
import {DomSanitizer, SafeUrl} from "@angular/platform-browser";
import {Azureblob} from "../models/azureblob";
import {Observable} from 'rxjs/Observable';
import { from } from 'rxjs/observable/from';

@Component({
  selector: 'app-blobviewer',
  templateUrl: './blobviewer.component.html',
  styleUrls: ['./blobviewer.component.css'],
  providers: [ BlobService ]
})
export class BlobViewerComponent implements OnInit {

  blobsList: any;

  containerName: string = "acscontainer" ;

  constructor(private blobService : BlobService,
              private sanitizer: DomSanitizer) {  }

  ngOnInit() {
    this.getAllBlobs();
  }

  getAllBlobs() : void {
    console.log("**** Start BlobViewerComponent.getAllBlobs()!");

    this.blobService.getAllBlobsJS()
      .subscribe(
        (val) => {
          this.blobsList = val;
          //console.log(" name=", val[0].blobName);
        },
        response => {
          console.log(" in error", response);
        },
        () => {
          console.log(" observable is now completed.");
        });
  }
}
