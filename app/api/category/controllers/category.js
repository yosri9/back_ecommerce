'use strict';

/**
 * Read the documentation (https://strapi.io/documentation/developer-docs/latest/development/backend-customization.html#core-controllers)
 * to customize this controller
 */




module.exports = {
  // Method 1: Creating an entirely custom action


  // Method 2: Wrapping a core action (leaves core logic in place)
  async findByName(ctx) {


    let entry = await strapi.query('category').find(ctx.request.body);

    return entry;
  },

};
