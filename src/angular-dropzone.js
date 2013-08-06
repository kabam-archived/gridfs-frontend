'use strict';

function readableFileSize(fileSizeInBytes){
  var i = -1;
  var byteUnits = [' kB', ' MB', ' GB', ' TB', 'PB', 'EB', 'ZB', 'YB'];
  do {
    fileSizeInBytes = fileSizeInBytes / 1024;
    i++;
  } while (fileSizeInBytes > 1024);
  return Math.max(fileSizeInBytes, 0.1).toFixed(1) + byteUnits[i];
}

angular.module('angularDropzone', []).directive('dropzone', ['$browser', function($browser){
  return {
    restrict: 'A',
    scope: true,
    // disabling angular style templates for now and use stock template from dropzone
    /*
    controller: [
      '$scope', '$element', '$attrs', '$transclude',
      function($scope, $element, $attrs, $transclude) {
        $scope.files = [];
        $scope.readableFileSize = readableFileSize;
      }
    ],
    template: '<ul>' +
                '<li ng-repeat="file in files">' +
                  '<span class="name">{{ file.name }}</span><span class="size">{{ readableFileSize(file.size) }}</span>' +
                '</li>' +
              '</ul>',
    */
    link: function(scope, elem, attrs){
      new Dropzone(elem[0], {
        url: attrs.url,
        maxFileSize: attrs.maxsize,
        method: attrs.method || 'PUT',
        headers: {'X-XSRF-TOKEN': $browser.cookies()['XSRF-TOKEN']},
        init: function(){
          this.on("addedfile", function(file){
            scope.$apply(function(){
              if(angular.isArray(scope.files)){
                scope.files.push(file);
              }
            });
          });
          this.on('success', function(file, response){
            scope.$apply();
          })
        }
      });
    }
  }
}]);
