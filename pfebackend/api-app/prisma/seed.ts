import { PrismaClient } from '@prisma/client';
import { dataProducts, dataorders, dataproductsTrending, datareview, datausers } from './data';
import { stringify } from 'querystring';



// initialize Prisma Client
const prisma = new PrismaClient();

async function main() {

  const categoryIds = []
  const name = ["face", "lips", "Eyes"]
  const imageUrls: string[] = [
    "https://specials-images.forbesimg.com/imageserve/660c634910576334d58c9d42/Best-Korean-Skincare-Products/960x0.jpg?fit=scale",
    "https://media.allure.com/photos/64cd162a311e18980b8c09ce/4:3/w_2664,h_1998,c_limit/best_korean_eye_cream_003%20(1).jpg",
    "https://www.gosupps.com/media/catalog/product/7/1/71ZCdeGx_hL.jpg"
  ];
  
 
  
  for (var i = 0; i < 3; i++) {
    const category = await prisma.category.create({
      data: {
        name: name[i],
        imageUrl:imageUrls[i]
     
      }
    })
    categoryIds.push(category.id)

  
  }
  const subcategoryIds = []
  for (var i = 0; i < 3; i++) {
    const subcategory = await prisma.category.create({
      data: {
        name: name[i],
        imageUrl:imageUrls[i]
  
      }
    })
    subcategoryIds.push(subcategory.id)

  }

  const productIds = []
  // for (var i = 0; i < dataProducts.length - 1; i++) {
  for (let product of dataProducts) {
    const products = await prisma.products.create({
      data: {
        productName: product.productName,
        description: product.description,
        imageUrl:product.imageUrl,
        price: product.price,
        categoryId: categoryIds[Math.floor(Math.random() * categoryIds.length)]
      }
    });
    productIds.push(products.id)
  }


  const usersIds = []
  for (let user of datausers) {
    const users = await prisma.users.create({
      data: {
        fullname: user.fullname,
        age: user.age,
        adresse: user.adresse,
        mobilephone: user.mobilephone,
        Password: "string",
        email: "ayaa@sfectoria.com",

      }
    });
    usersIds.push(users.id)

  }
 


  const orderNumberIds = []
  for (let orderr of dataorders) {
    const order = await prisma.order.create({
      data: {
        orderNumber: orderr.orderNumber,
        price: orderr.price,
      }
    });
    orderNumberIds.push(order.id)

  }


  // for (let revieww of datareview) {
  //   const reviewIds = []
  //   const review = await prisma.review.create({
  //     data: {
  //       content: revieww.content,
  //       rating: revieww.rating,
  //       productsId: productIds[Math.floor(Math.random() * productIds.length)],
  //       usersId: usersIds[Math.floor(Math.random() * usersIds.length)]
  //     }
  //   });
  //   reviewIds.push(review.id)


  // }



  console.log('seeded');
}


main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {

    await prisma.$disconnect();
  });



