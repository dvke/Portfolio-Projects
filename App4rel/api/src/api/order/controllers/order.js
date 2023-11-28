// @ts-nocheck
const stripe = require("stripe")(import.meta.env.STRIPE_KEY);
("use strict");

/**
 * order controller
 */

const { createCoreController } = require("@strapi/strapi").factories;

module.exports = createCoreController("api::order.order");
