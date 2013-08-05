'use strict';

angular.module('dropzoneUpload', []).directive('dropzone', function($browser){
  return {
    restrict: 'A',
    link: function(scope, elem, attrs){
      new Dropzone(elem[0], {
        url: attrs.url,
        maxFileSize: attrs.maxsize,
        method: 'PUT',
        headers: {'X-XSRF-TOKEN': $browser.cookies()['XSRF-TOKEN']},
        init: function(){
          this.on("addedfile", function(file){
            if(angular.isArray(scope.files)){
              scope.files.push(file);
            }
          });
          this.on('success', function(file, response){
            console.log(file, response);
          })
        }
      });
    }
  }
});
