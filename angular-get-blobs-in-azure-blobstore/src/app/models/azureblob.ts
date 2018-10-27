export class Azureblob {
    blobName: string;
    blobURL: string;

  constructor(private blobName1: string, private url: string) {
    this.blobName = blobName1;
    this.blobURL = url;
  }
}
