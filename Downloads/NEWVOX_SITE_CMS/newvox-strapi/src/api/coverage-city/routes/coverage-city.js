'use strict';
module.exports = {
  routes: [
    { method: 'GET', path: '/coverage-cities', handler: 'api::coverage-city.coverage-city.find' },
    { method: 'GET', path: '/coverage-cities/:id', handler: 'api::coverage-city.coverage-city.findOne' },
    { method: 'POST', path: '/coverage-cities', handler: 'api::coverage-city.coverage-city.create' },
    { method: 'PUT', path: '/coverage-cities/:id', handler: 'api::coverage-city.coverage-city.update' },
    { method: 'DELETE', path: '/coverage-cities/:id', handler: 'api::coverage-city.coverage-city.delete' },
  ],
};