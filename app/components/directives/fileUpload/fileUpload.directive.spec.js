'use strict';

describe('Directive: fileUpload', function () {

  // load the directive's module
  beforeEach(module('RunBeatApp'));

  var element,
    scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<file-upload></file-upload>');
    element = $compile(element)(scope);
    expect(element.text()).to.equal('this is the fileUpload directive');
  }));
});
