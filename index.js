/* jshint node: true */
'use strict';

module.exports = {
  name: 'ember-cli-libravatar',

  included: function included(app) {
    this.app = app;
    this._super.included(app);

    app.import(app.bowerDirectory + '/JavaScript-MD5/js/md5.js');
    app.import('vendor/ember-cli-libravatar/md5-shim.js', {
      type: 'vendor',
      exports: { 'md5': ['md5'] }
    });
  }
};
