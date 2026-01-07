'use strict';
module.exports = {
  routes: [
    { method: 'GET', path: '/benefits', handler: 'benefit.find' },
    { method: 'GET', path: '/benefits/:id', handler: 'benefit.findOne' },
    { method: 'POST', path: '/benefits', handler: 'benefit.create' },
    { method: 'PUT', path: '/benefits/:id', handler: 'benefit.update' },
    { method: 'DELETE', path: '/benefits/:id', handler: 'benefit.delete' },
  ],
};
