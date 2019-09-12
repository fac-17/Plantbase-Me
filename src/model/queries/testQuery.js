const connection = require("../database/db_connection");

const getRatingsByProduct = require("./getRatingsByProduct");

// connection.query("SELECT id, product_name, product_description, product_image
// FROM products;")

// const getRatingsSummaryOfList = productList => {
//   let p1 = new Promise((reject, resolve) => {
//     resolve(
//       productList.map(product => {
//         return getRatingsByProduct(product.id).then(ratings => {
//           product.avg_rating =
//             ratings.reduce((acc, r) => acc + r.rating, 0) / ratings.length;

//           product.top_comment = ratings.reduce(
//             (acc, r) => (r.rating > acc.rating ? r : acc),
//             { rating: 0 }
//           ).comment;
//           return product;
//         });
//       })
//     );
//   });
//   p1.then(val => console.log(val));
//   // Promise.all(promises).then(function(results) {
//   //   return results;
//   // });
// };

// const allProducts = [
//   {
//     id: 1,
//     product_name: "Violife Original Grated",
//     product_description:
//       "With coconut oil and vitamin B12. Melts great! Free from dairy, soya, gluten, lactose and nuts. No preservatives. Suitable for vegans & vegetarians. Kosher",
//     product_image: "https://imgur.com/ZCAQAGA.jpg"
//   },
//   {
//     id: 2,
//     product_name: "Red Hot Smoking CHEEZE",
//     product_description:
//       "With coconut oil and vitamin B12. Melts great! Free from dairy, soya, gluten, lactose and nuts. No preservatives. Suitable for vegans & vegetarians. Kosher",
//     product_image: "https://imgur.com/ZCAQAGA.jpg"
//   }
// ];

// getRatingsSummaryOfList(allProducts); //.then(list => console.log(list));
