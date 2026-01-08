'use strict';
module.exports = {
  routes: [
    { method: 'GET', path: '/plans', handler: 'api::plan.plan.find' },
    { method: 'GET', path: '/plans/:id', handler: 'api::plan.plan.findOne' },
    { method: 'POST', path: '/plans', handler: 'api::plan.plan.create' },
    { method: 'PUT', path: '/plans/:id', handler: 'api::plan.plan.update' },
    { method: 'DELETE', path: '/plans/:id', handler: 'api::plan.plan.delete' },
  ],
};
