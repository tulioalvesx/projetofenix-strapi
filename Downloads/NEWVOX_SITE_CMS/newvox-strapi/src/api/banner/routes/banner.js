'use strict';
module.exports = {
  routes: [
    {
      method: 'GET',
      path: '/banners',
      handler: 'api::banner.banner.find',
    },
    {
      method: 'GET',
      path: '/banners/:id',
      handler: 'api::banner.banner.findOne',
    },
    {
      method: 'POST',
      path: '/banners',
      handler: 'api::banner.banner.create',
    },
    {
      method: 'PUT',
      path: '/banners/:id',
      handler: 'api::banner.banner.update',
    },
    {
      method: 'DELETE',
      path: '/banners/:id',
      handler: 'api::banner.banner.delete',
    },
  ],
};
