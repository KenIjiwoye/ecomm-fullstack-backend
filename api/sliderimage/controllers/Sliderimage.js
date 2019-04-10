'use strict';

/**
 * Sliderimage.js controller
 *
 * @description: A set of functions called "actions" for managing `Sliderimage`.
 */

module.exports = {

  /**
   * Retrieve sliderimage records.
   *
   * @return {Object|Array}
   */

  find: async (ctx) => {
    if (ctx.query._q) {
      return strapi.services.sliderimage.search(ctx.query);
    } else {
      return strapi.services.sliderimage.fetchAll(ctx.query);
    }
  },

  /**
   * Retrieve a sliderimage record.
   *
   * @return {Object}
   */

  findOne: async (ctx) => {
    if (!ctx.params._id.match(/^[0-9a-fA-F]{24}$/)) {
      return ctx.notFound();
    }

    return strapi.services.sliderimage.fetch(ctx.params);
  },

  /**
   * Count sliderimage records.
   *
   * @return {Number}
   */

  count: async (ctx) => {
    return strapi.services.sliderimage.count(ctx.query);
  },

  /**
   * Create a/an sliderimage record.
   *
   * @return {Object}
   */

  create: async (ctx) => {
    return strapi.services.sliderimage.add(ctx.request.body);
  },

  /**
   * Update a/an sliderimage record.
   *
   * @return {Object}
   */

  update: async (ctx, next) => {
    return strapi.services.sliderimage.edit(ctx.params, ctx.request.body) ;
  },

  /**
   * Destroy a/an sliderimage record.
   *
   * @return {Object}
   */

  destroy: async (ctx, next) => {
    return strapi.services.sliderimage.remove(ctx.params);
  }
};
