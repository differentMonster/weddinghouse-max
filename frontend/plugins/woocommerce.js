import WooCommerceRestApi from "@woocommerce/woocommerce-rest-api";

// initialise production //
// const api = new WooCommerceRestApi({
//     url: "http://localhost:3080",
//     consumerKey: process.env.WOO_KEY,
//     consumerSecret: process.env.WOO_SECRET,
//     version: "wc/v3",
// });

// intialise localhost test
export const WooComGateway = new WooCommerceRestApi({
    url: "http://localhost:3080",
    consumerKey: "ck_ca8dc3da04a18c79601e7b49c6e8e216da06cf82",
    consumerSecret: "cs_e8fdcde1886ae82182ef3fc7507b09ee20ede897",
    version: "wc/v3",
});