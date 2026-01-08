'use strict';

module.exports = {
  routes: [
    // Single Type: não usa :id
    { method: 'GET', path: '/site-settings', handler: 'api::site-setting.site-setting.find' },
    { method: 'PUT', path: '/site-settings', handler: 'api::site-setting.site-setting.update' },
  ],
};