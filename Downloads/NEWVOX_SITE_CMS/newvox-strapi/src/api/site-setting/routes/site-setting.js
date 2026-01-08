'use strict';

module.exports = {
  routes: [
    // Single Type: sem :id
    { method: 'GET', path: '/site-settings', handler: 'site-setting.find' },
    { method: 'PUT', path: '/site-settings', handler: 'site-setting.update' },
  ],
};
