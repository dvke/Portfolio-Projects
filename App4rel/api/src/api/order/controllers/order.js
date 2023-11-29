// @ts-nocheck
const stripe = require("stripe")(
  "sk_test_51OHQ9UDB4caJs4xBeLZdZZRNqi7rmqtBcVOhtr13kQLDJemq1HHRRDURFuWnP8oFByANUvbEGjotDIPo072OQqJl00GdbtSk7k"
);
("use strict");

/**
 * order controller
 */

const { createCoreController } = require("@strapi/strapi").factories;

module.exports = createCoreController("api::order.order", ({ strapi }) => ({
  async create(ctx) {
    const { cart } = ctx.request.body;

    const lineItems = await Promise.all(
      cart.map(async (product) => {
        const item = await strapi
          .service("api::product.product")
          .findOne(product.id);

        return {
          price_data: {
            currency: "usd",
            product_data: {
              name: item.title,
            },
            unit_amount: item.price * 100,
          },
          quantity: product.amount,
        };
      })
    );
    try {
      const session = await stripe.checkout.sessions.create({
        mode: "payment",
        success_url: `${"http://localhost:3000"}?success=true`,
        cancel_url: `${"http://localhost:3000"}?success=false`,
        line_items: lineItems,
        shipping_address_collection: { allowed_countries: ["US", "CA", "NG"] },
        payment_method_types: ["card"],
      });

      await strapi.service("api::order.order").create({
        data: {
          cart,
          stripeId: session.id,
        },
      });

      return { stripeSession: session };
    } catch (error) {
      ctx.response.status = 500;
      return error;
    }
  },
}));
