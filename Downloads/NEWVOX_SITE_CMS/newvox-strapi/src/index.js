'use strict';

module.exports = {
  register({ strapi }) {},

  bootstrap({ strapi }) {
    try {
      const stack = strapi.server?.router?.stack || [];

      const routes = stack
        .filter((r) => r?.path && r?.methods)
        .map((r) => `${r.methods.join(',')} ${r.path}`)
        .sort();

      console.log('====== STRAPI ROUTES (DEBUG) ======');
      // imprime só as /api pra não poluir demais
      routes.filter((x) => x.includes('/api/')).forEach((r) => console.log(r));
      console.log('====== END ROUTES (DEBUG) ======');
    } catch (e) {
      console.log('ROUTES DEBUG ERROR:', e);
    }
  },
};
