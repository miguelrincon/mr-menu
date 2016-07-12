//jshint strict: false
module.exports = function(config) {
  config.set({

    basePath: './app',

    preprocessors: {
      'components/**/*.html': ['ng-html2js']
    },

    files: [
      'bower_components/jquery/dist/jquery.js',
      'bower_components/angular/angular.js',
      'bower_components/angular-route/angular-route.js',
      'bower_components/angular-mocks/angular-mocks.js',
      'components/**/*.html',
      'components/**/*.js'
    ],

    autoWatch: true,

    frameworks: ['jasmine'],

    browsers: ['Chrome'],

    plugins: [
      'karma-chrome-launcher',
      'karma-ng-html2js-preprocessor',
      'karma-jasmine',
      'karma-junit-reporter'
    ],

    ngHtml2JsPreprocessor: {
      moduleName: 'templates'
    },

    junitReporter: {
      outputFile: 'test_out/unit.xml',
      suite: 'unit'
    }

  });
};
