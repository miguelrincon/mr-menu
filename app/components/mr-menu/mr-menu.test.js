'use strict';

/*
* @Author: mrincon
* @Date:   2016-07-12 01:33:27
* @Last Modified by:   mrincon
* @Last Modified time: 2016-07-12 23:15:46
*/

describe('mrMenu module', function() {

  var mockScope;
  var compileService;

  beforeEach(module('mrMenu'));
  beforeEach(module('templates'));

  beforeEach(angular.mock.inject(function($rootScope, $compile){
    mockScope = $rootScope;
    compileService = $compile;
    mockScope.data = {
      empty: [],
      single: [
        {
          'MakeCode': 'Make A',
          'No': 'No A',
          'Description': 'Description A',
          'Description2': 'Description2 A',
          'WarrantyPackage': true,
          'NoCharge': true,
          'Blocked': true,
          'VersionList': []
        }
      ],
      three: [
        {
          'MakeCode': 'Make A',
          'No': 'No A',
          'Description': 'Description A',
          'Description2': 'Description2 A',
          'WarrantyPackage': true,
          'NoCharge': true,
          'Blocked': true,
          'VersionList': []
        },
        {
          'MakeCode': 'Make B',
          'No': 'No B',
          'Description': 'Description B',
          'Description2': 'Description2 B',
          'WarrantyPackage': false,
          'NoCharge': false,
          'Blocked': false,
          'VersionList': []
        },
        {
          'MakeCode': 'Make C',
          'No': 'No C',
          'Description': 'Description C',
          'Description2': 'Description2 C',
          'WarrantyPackage': false,
          'NoCharge': true,
          'Blocked': true,
          'VersionList': []
        }
      ],
    }
  }));

  it('Works with empty data', inject(function($controller) {
    var compileFn = compileService('<mr-menu data="data.empty"></mr-menu>');
    var elem = compileFn(mockScope);

    mockScope.$apply();

    expect(elem.children().size()).toEqual(1);

    // list exists
    expect(elem.children().hasClass('list-group')).toBe(true);

    // list is empty
    expect(elem.find('.list-group-item').length).toEqual(0);
  }));

  it('Displays a single item', inject(function($controller) {
    var compileFn = compileService('<mr-menu data="data.single"></mr-menu>');
    var elem = compileFn(mockScope);

    mockScope.$apply();

    expect(elem.children().size()).toEqual(1);

    // list exists
    expect(elem.children().hasClass('list-group')).toBe(true);

    // list contains one item
    expect(elem.find('.list-group-item').size()).toEqual(1);

    // list contains expected item
    expect(elem.find('.list-group-item .make-code').size()).toEqual(1);
    expect(elem.find('.list-group-item .make-code').text()).toEqual('Make A');
    expect(elem.find('.list-group-item .description').text()).toEqual('Description A');
    expect(elem.find('.list-group-item .description2').text()).toEqual('Description2 A');
  }));

  it('Displays mutliple items', inject(function($controller) {
    var compileFn = compileService('<mr-menu data="data.three"></mr-menu>');
    var elem = compileFn(mockScope);

    mockScope.$apply();

    expect(elem.children().size()).toEqual(1);

    // list exists
    expect(elem.children().hasClass('list-group')).toBe(true);

    // list contains 3 items
    expect(elem.find('.list-group-item').size()).toEqual(3);

    // list contains expected item
    expect(elem.find('.list-group-item').eq(0).find('.make-code').text()).toEqual('Make A');
    expect(elem.find('.list-group-item').eq(0).find('.description').text()).toEqual('Description A');
    expect(elem.find('.list-group-item').eq(1).find('.make-code').text()).toEqual('Make B');
    expect(elem.find('.list-group-item').eq(1).find('.description').text()).toEqual('Description B');
    expect(elem.find('.list-group-item').eq(2).find('.make-code').text()).toEqual('Make C');
    expect(elem.find('.list-group-item').eq(2).find('.description').text()).toEqual('Description C');
  }));

  it('Displays one item at a time', inject(function($controller) {
    var compileFn = compileService('<mr-menu data="data.three"></mr-menu>');
    var elem = compileFn(mockScope);

    mockScope.$apply();

    expect(elem.children().size()).toEqual(1);

    // list contains 3 items
    expect(elem.find('.list-group-item').size()).toEqual(3);
    expect(elem.find('.list-group-item-text').size()).toEqual(3);

    // only one is shown, the first one
    expect(elem.find('.list-group-item-text').not('.ng-hide').size()).toEqual(1);
    expect(elem.find('.list-group-item-text').not('.ng-hide').find('.make-code').text()).toEqual('Make A');

    // click on the second item
    elem.find('.list-group-item').eq(1).trigger('click');
    mockScope.$apply();

    // only one is shown, the second one
    expect(elem.find('.list-group-item-text').not('.ng-hide').size()).toEqual(1);
    expect(elem.find('.list-group-item-text').not('.ng-hide').find('.make-code').text()).toEqual('Make B');

  }));

  it('Updates its data', inject(function($controller) {
    var compileFn = compileService('<mr-menu data="mydata"></mr-menu>');
    var elem = compileFn(mockScope);

    mockScope.mydata = mockScope.data.three;
    mockScope.$apply();

    expect(elem.children().size()).toEqual(1);

    // list contains 3 items
    expect(elem.find('.list-group-item').size()).toEqual(3);
    expect(elem.find('.list-group-item-text').size()).toEqual(3);

    // change data to a single item one
    mockScope.mydata = mockScope.data.single;
    mockScope.$apply();

    expect(elem.children().size()).toEqual(1);

    // list contains 1 item
    expect(elem.find('.list-group-item').size()).toEqual(1);
    expect(elem.find('.list-group-item-text').size()).toEqual(1);

  }));


});
