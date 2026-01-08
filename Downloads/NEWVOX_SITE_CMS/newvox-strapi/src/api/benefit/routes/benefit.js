'use strict';
module.exports = {
  routes: [
    { method: 'GET', path: '/benefits', handler: 'api::benefit.benefit.find' },
    { method: 'GET', path: '/benefits/:id', handler: 'api::benefit.benefit.findOne' },
    { method: 'POST', path: '/benefits', handler: 'api::benefit.benefit.create' },
    { method: 'PUT', path: '/benefits/:id', handler: 'api::benefit.benefit.update' },
    { method: 'DELETE', path: '/benefits/:id', handler: 'api::benefit.benefit.delete' },
  ],
};
