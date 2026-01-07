'use strict';
module.exports = {
  routes: [
    { method: 'GET', path: '/coverage-cities', handler: 'coverage-city.find' },
    { method: 'GET', path: '/coverage-cities/:id', handler: 'coverage-city.findOne' },
    { method: 'POST', path: '/coverage-cities', handler: 'coverage-city.create' },
    { method: 'PUT', path: '/coverage-cities/:id', handler: 'coverage-city.update' },
    { method: 'DELETE', path: '/coverage-cities/:id', handler: 'coverage-city.delete' },
  ],
};
