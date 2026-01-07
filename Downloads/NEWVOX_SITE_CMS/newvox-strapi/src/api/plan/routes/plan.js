'use strict';
module.exports = {
  routes: [
    { method: 'GET', path: '/plans', handler: 'plan.find' },
    { method: 'GET', path: '/plans/:id', handler: 'plan.findOne' },
    { method: 'POST', path: '/plans', handler: 'plan.create' },
    { method: 'PUT', path: '/plans/:id', handler: 'plan.update' },
    { method: 'DELETE', path: '/plans/:id', handler: 'plan.delete' },
  ],
};
