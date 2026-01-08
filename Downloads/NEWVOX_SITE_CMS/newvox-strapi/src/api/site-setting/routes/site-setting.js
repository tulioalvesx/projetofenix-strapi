'use strict';

module.exports = {
  routes: [
    // ✅ Single Type padrão (singular)
    {
      method: 'GET',
      path: '/site-setting',
      handler: 'site-setting.find',
      config: {
        auth: false,
      },
    },
    {
      method: 'PUT',
      path: '/site-setting',
      handler: 'site-setting.update',
      config: {
        auth: false,
      },
    },

    // ✅ Alias (plural) pra manter seu endpoint atual
    {
      method: 'GET',
      path: '/site-settings',
      handler: 'site-setting.find',
      config: {
        auth: false,
      },
    },
    {
      method: 'PUT',
      path: '/site-settings',
      handler: 'site-setting.update',
      config: {
        auth: false,
      },
    },
  ],
};
