# How-to Call a Service Using Http Post, Display Image Returned As A Blob

# The Idea
![blobviewer](https://user-images.githubusercontent.com/902972/46768636-95899e00-ccae-11e8-9946-c0d9dbccfe05.png)

We send an image that is publicly available at a URL to a web service that generates a thumbnail and sends it back as a Blob. Angular will read that Blob and convert that to an image and display it.

# What we need
1. Image at a public url
2. Access to a web service that we can generate a thumbnail of an image and return it

# Settings
## Note
This example uses **[Microsft Cognitive Services' Computer Vision API](https://azure.microsoft.com/en-us/services/cognitive-services/computer-vision/)** . Please create a new account there. It's $0 if you have Azure Account. 

After subscribing to the **Computer Vision** and added, the keys can retrieved from Azure as below:
![azure-computervision-key](https://user-images.githubusercontent.com/902972/46768916-9cfd7700-ccaf-11e8-850a-086b3207d6d7.png) 

### Http POST Web service URL
* The service URL `https://southcentralus.api.cognitive.microsoft.com/vision/v2.0/generateThumbnail?width=100&height=100&smartCropp` can also be tested at [Microsoft Cognitive Services Computer Vision API page](https://westus.dev.cognitive.microsoft.com/docs/services/5adf991815e1060e6355ad44/operations/56f91f2e778daf14a499e1fa)

### Adding keys to access the web service
* Go to this file `/src/app/services/blob.service.ts`, change the value for `Ocp-Apim-Subscription-Key`   

## Running the application
This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 1.6.8.

### Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

### Output / Display 
If the application builds and runs successfully, you should see an output as below:
![blobviewer-browser](https://user-images.githubusercontent.com/902972/46769212-a4715000-ccb0-11e8-97e7-057d3727f905.png)

**Git** thumbnail above is fetched from the service. The actual full sized image is [here](http://acsazurestore.blob.core.windows.net/acsazurecontainer/Git-Logo-1788C.png)    
