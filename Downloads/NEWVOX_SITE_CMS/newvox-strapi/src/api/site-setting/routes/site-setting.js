'use strict';
module.exports = {
  routes: [
    { method: 'GET', path: '/site-settings', handler: 'api::site-setting.site-setting.find' },
    { method: 'GET', path: '/site-settings/:id', handler: 'api::site-setting.site-setting.findOne' },
    { method: 'POST', path: '/site-settings', handler: 'api::site-setting.site-setting.create' },
    { method: 'PUT', path: '/site-settings/:id', handler: 'api::site-setting.site-setting.update' },
    { method: 'DELETE', path: '/site-settings/:id', handler: 'api::site-setting.site-setting.delete' },
  ],
};
