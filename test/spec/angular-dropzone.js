'use strict';

describe('Directive: dropzone', function () {

  // load the directive's module
  beforeEach(module('angularDropzone'));

  var elm,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($rootScope, $compile) {
    elm = angular.element('<div dropzone url="files/some/folder" maxsize=2 class="dropzone"></div>');
    scope = $rootScope;
    $compile(elm)(scope);
    scope.$digest();
  }));

  it('should add Dropzone to the element', function(){
    expect(elm[0].dropzone).toBeDefined();
  })

});
