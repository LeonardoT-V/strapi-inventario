"use strict";

/**
 * carrera controller
 */

const { createCoreController } = require("@strapi/strapi").factories;

module.exports = createCoreController("api::carrera.carrera", ({ strapi }) => ({
  async example(ctx) {
    try {
      console.log("hola");
      ctx.body = "ok";
    } catch (err) {
      ctx.body = err;
    }
  },
}));
