'use strict';

/**
 * User.js controller
 *
 * @description: A set of functions called "actions" for managing `User`.
 */



module.exports = {

  async someCustomUpdateController(ctx) {
    return strapi.plugins["users-permissions"].controllers.user.update(ctx);
  },

  async updateMe(ctx) {



    let currentUser;
    currentUser = ctx.state.user
    ctx.params.id = currentUser.id
    let entry;

    console.log(ctx.request.body)

      entry = await strapi.query('user', 'users-permissions').update({ id: currentUser.id }, ctx.request.body);



    return entry;
  },


};
