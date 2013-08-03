'use strict';

angular.module('dndUpload', []).directive('dndUpload', function(){
  return {
    restrict: 'A',
    link: function(scope, elem, attrs){
      new Dropzone(elem[0], {
        url: attrs.url,
        maxFileSize: attrs.maxsize,
        init: function(){
          this.on("addedfile", function(file){
            if(angular.isArray(scope.files)){
              scope.files.push(file);
            }
          })
        }
      });
    }
  }
});
