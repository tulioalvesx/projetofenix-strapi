'use strict';
module.exports = {
  routes: [
    { method: 'GET', path: '/site-settings', handler: 'site-setting.find' },
    { method: 'GET', path: '/site-settings/:id', handler: 'site-setting.findOne' },
    { method: 'POST', path: '/site-settings', handler: 'site-setting.create' },
    { method: 'PUT', path: '/site-settings/:id', handler: 'site-setting.update' },
    { method: 'DELETE', path: '/site-settings/:id', handler: 'site-setting.delete' },
  ],
};
