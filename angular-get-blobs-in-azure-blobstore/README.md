# How-to Get Blobs from Azure Blob Storage In Angular

# The Idea

![overviewofangularappwithexternaljavascript](https://user-images.githubusercontent.com/902972/47619573-37cac380-daae-11e8-8db9-a81b95aa9647.png)

I wanted to build an Angular application to read, view blobs stored in an Azure Blob Store. Azure has several libraries already built, and i will be using the Javascript based blob storage client library.
You may [donwload them here](https://aka.ms/downloadazurestoragejs).

We will be bringing the `azure-storage-blob.js` file into our application.

# What we need
1. Azure portal account 
2. A blob storage in your Azure portal, with a `container` and add sample images to the container.

If all is steup properly, your Azure Storage should look like this

![screen shot 2018-10-28 at 1 11 55 pm](https://user-images.githubusercontent.com/902972/47620012-17513800-dab3-11e8-8594-486f27e9c423.png)


# Settings
## Folder Structure
![screen shot 2018-10-28 at 12 57 46 pm](https://user-images.githubusercontent.com/902972/47619894-9f364280-dab1-11e8-9579-be34a15a685f.png)

## Running the application
This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 1.6.8.

### Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

### Output / Display 
If the application builds and runs successfully, you should see an output as below:

![Sample-Application-Output](https://user-images.githubusercontent.com/902972/47608766-a2212c80-d9f8-11e8-9d8d-ed9c4fd83f3c.png)
