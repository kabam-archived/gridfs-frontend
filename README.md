angular-dropzone
===============

File Upload Frontend module

How to use
----------

1. bower install `git@github.com:mywebclass/gridfs-frontend.git`
2. Include `bower_components/dropzone/dropzone.js`, `bower_components/dropzone/css/basic.css`, and finally `bower_components/angular-dropzone/angular-dropzone.js`
3. Include `angularDropzone` to the app dependencies.
4. Add `<div dropzone url="files/some/folder" maxsize=2 class="dropzone"></div>` to anywhere in your app where `url` is an address for uploads, `maxsize` is a maximum file size in Mb
