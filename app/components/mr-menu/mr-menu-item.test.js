'use strict';

/*
* @Author: mrincon
* @Date:   2016-07-12 01:33:27
* @Last Modified by:   mrincon
* @Last Modified time: 2016-07-12 23:15:23
*/

describe('mrMenu module', function() {

  var mockScope;
  var compileService;
  var log;

  beforeEach(module('mrMenuItem'));
  beforeEach(module('templates'));

  beforeEach(angular.mock.inject(function($rootScope, $compile, $log){
    mockScope = $rootScope;
    compileService = $compile;
    log = $log;
    mockScope.data = {
      'MakeCode': 'Make A',
      'No': 'No A',
      'Description': 'Description A',
      'Description2': 'Description2 A',
      'WarrantyPackage': true,
      'NoCharge': true,
      'Blocked': true,
      'VersionList': []
    };
    mockScope.shown = [];
  }));

  it('Displays an item', inject(function($controller) {
    var compileFn = compileService('<mr-menu-item item="data"></mr-menu-item>');
    var elem = compileFn(mockScope);

    mockScope.$apply();

    expect(elem.size()).toEqual(1);

    // item has content
    expect(elem.find('.make-code').text()).toBe('Make A');
    expect(elem.find('.description').text()).toBe('Description A');

  }));

  it('Displays `show more` logs to console', inject(function($controller) {
    var compileFn = compileService('<mr-menu-item item="data"></mr-menu-item>');
    var elem = compileFn(mockScope);

    mockScope.$apply();
    spyOn(log, 'log');

    // The show more button is there
    expect(elem.find('.show-more').size()).toBe(1);

    // Click the show more button
    elem.find('.show-more').trigger('click');

    // The log was called
    expect(log.log).toHaveBeenCalled();
    expect(log.log).toHaveBeenCalledWith(mockScope.data, " has been shown.");
  }));

  it('Displays `show more` logs to object', inject(function($controller) {
    var compileFn = compileService('<mr-menu-item item="data" shown="shown"></mr-menu-item>');
    var elem = compileFn(mockScope);

    mockScope.$apply();
    spyOn(log, 'log');

    // Not shown yet
    expect(mockScope.shown.length).toBe(0);

    // The show more button is there
    expect(elem.find('.show-more').size()).toBe(1);

    // Click the show more button
    elem.find('.show-more').trigger('click');
    mockScope.$apply();

    // Shown on outer scope
    expect(mockScope.shown.length).toBe(1);
    expect(mockScope.shown[0].MakeCode).toBe("Make A");
    expect(mockScope.shown[0].Description).toBe("Description A");
  }));

});
