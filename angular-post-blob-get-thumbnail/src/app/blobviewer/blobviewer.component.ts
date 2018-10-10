import { Component, ElementRef, ViewChild, OnInit } from '@angular/core';
import {BlobService} from "../services/blob.service";
import { DomSanitizer, SafeUrl } from "@angular/platform-browser";

@Component({
  selector: 'app-blobviewer',
  templateUrl: './blobviewer.component.html',
  styleUrls: ['./blobviewer.component.css'],
  providers: [ BlobService]
})
export class BlobViewerComponent implements OnInit {

  imageBlobUrl: string | null = null;

  constructor(private blobService : BlobService,
              private sanitizer: DomSanitizer) { }

  ngOnInit() {
    this. getThumbnail();
  }

  getThumbnail() : void {
    this.blobService.getBlobThumbnail()
      .subscribe(
        (val) => {
          console.log("POST - getThumbnail- successful value returned in body", val);
          //this.turl = val; //<====== Set value here
          this.createImageFromBlob(val);
        },
        response => {
          console.log("POST - getThumbnail - in error", response);
        },
        () => {
          console.log("POST - getThumbnail - observable is now completed.");
        });
  }

  createImageFromBlob(image: Blob) {
    console.log("Call createImageFromBlob()", image);
    let reader = new FileReader();
    reader.addEventListener("load", () => {
      this.imageBlobUrl = reader.result;
    }, false);

    if (image) {
      reader.readAsDataURL(image);
    }
  }

}
