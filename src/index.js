const {Sequelize, DataTypes} = require('sequelize');
const sequelize = new Sequelize('openinapp_dev', 'root', 'root', {
    host: 'localhost',
    dialect: 'mysql'/* one of 'mysql' | 'postgres' | 'sqlite' | 'mariadb' | 'mssql' | 'db2' | 'snowflake' | 'oracle' */
  });
  sequelize.authenticate().then(() => {
      console.log('Connection has been established successfully.');
  }).catch(err => {
      console.error('Unable to connect to the database:', err);
  });

// const customer = require('./models/customers');
// const product = require('./models/products');
// const order = require('./models/order');

// const youtubeApi = sequelize.define('youtube_api_keys', {
//     id: {
//         type: Sequelize.INTEGER,
//         allowNull: false,
//         primaryKey: true,
//         autoIncrement: true
//     },
//     api_key: {
//         type: Sequelize.STRING,
//         allowNull: false
//     },
//     hit_count: {
//         type: Sequelize.INTEGER,
//         allowNull: true
//     },
//     comment: {
//         type: Sequelize.STRING,
//         allowNull: true
//     }
// }, {
//     createdAt: 'created_at',
//     updatedAt: 'updated_at'
//     // Other model options go here
// });

// sequelize.sync().then(() => {
//     console.log("Database & tables created!");
// }).catch(err => {
//     console.error(err);
// });


// const getYtChannelDetails = async (link) => {
//     let response = {}
//     const youtubeApiKey = await youtubeApi.findOne({
//         where: {
//             id: 4
//         }
//     });
//     if(youtubeApiKey){
//         if(link.toLowerCase().includes('youtu.be/')){
//             await youtubeApiKey.update({hit_count: Sequelize.literal('hit_count + 2')});
//         }
//         else if (link.replace(/&/g, '').toLowerCase().includes('/watch?') && link.replace(/&/g, '').toLowerCase().includes('v=')){
//             await youtubeApiKey.update({hit_count: Sequelize.literal('hit_count + 2')});
//         } //check if channel link
//         else if(link.toLowerCase().includes('.com/channel/')){
//             await youtubeApiKey.update({hit_count: Sequelize.literal('hit_count + 1')});
//         }
//         else if(link.toLowerCase().includes('/c/')){
//             await youtubeApiKey.update({hit_count: Sequelize.literal('hit_count + 4')});
//         }
//         // no need to update updated_at since Sequelize automatically does that
//         // $youtubeApiKey->updated_at = Carbon::parse(strtotime("now"))->setTimezone('Asia/Kolkata')->format('Y-m-d H:i:s');
//         response = await axios.post('https://mail.openinapp.com/api/youtube-channel-details', {
//             link,
//             api_key: youtubeApiKey.api_key,
//       });
//         response = response.data
//     }
//       return {
//           channel_id: response?.data?.channel_id ? response.data.channel_id : "",
//           subscriber_count: response?.data?.subscriber_count ? response.data.subscriber_count : "",
//           title: response?.data?.title ? response.data.title : "",
//           video_count: response?.data?.video_count ? response.data.video_count : "",
//           view_count: response?.data?.view_count ? response.data.view_count : "",
//           hidden_subscriber: response?.data?.hidden_subscriber ? response.data.hidden_subscriber : "",
//           description: response?.data?.description ? response.data.description : "",
//           thumbnail: response?.data?.thumbnail ? response.data.thumbnail : "",
//           published_at: response?.data?.published_at ? response.data.published_at : "",
//     };
//   }

// setTimeout(async () => {
//     // await getYtChannelDetails('https://youtube.com/channel/v=UCJFp8uSYCjXOMnkUyb3CQ3Q');
//     await getYtChannelDetails('https://youtube.com/c/UCJFp8uSYCjXOMnkUyb3CQ3Q');
// }, 1000);




// // create a new customer
// async function createCustomer() {
//     await customer.sync();
//     const createdCustomer = await customer.create({
//         firstName: 'John',
//         lastName: 'Doe',
//         email: 'johnDoe@test.com',
//         password: '123456'
//     });
//     console.log(createdCustomer.toJSON());
// }

// createCustomer();

// // create a new product
// async function createProduct() {
//     await product.sync();
//     const createdProduct = await product.create({
//         productName: 'Apple',
//         productDescription: 'Fresh Apple',
//         productPrice: 10
//     });
//     console.log(createdProduct.toJSON());
// }

// createProduct();

// // create a new order
// async function createOrder() {
//     await order.sync();
//     const createdOrder = await order.create({
//         customerId: customer.,
//         productId: 1,
//         quantity: 10
//     });
//     console.log(createdOrder.toJSON());
// }

// createOrder();


async function fun(){
    let user_id = 57198;
    let path={id: 54};
    let result = await sequelize.query(
    `SELECT IF(url.subdomain IS NOT NULL, 
        CONCAT("https://",url.subdomain,".openinapp.co/",url),
        CONCAT("https://openinapp.co/",url)) AS smart_link FROM url WHERE user_id = ${user_id} AND id != ${path.id} ORDER BY id DESC`);
        // get all rows of smart_link in an array
    let related_links = result[0].map((row) => row.smart_link);
        console.log(result);
    console.log(related_links);
    }
    fun();