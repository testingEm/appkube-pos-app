import {Amplify} from 'aws-amplify';
import {generateClient, graphqlOperation} from 'aws-amplify/api';

const client = generateClient();
export const updatingProduct = async (product) => {
  // data {paymentMethod: payment,        id: orderId,        status: 'FULFILLED',        totolPrice: updateTotal,        customerId: customerId, }
  console.log('updating product', product);
  try {
    await Amplify.configure({
      API: {
        GraphQL: {
          endpoint:
          "https://r7q2x3svonbvbg3qt4da6diuty.appsync-api.us-east-1.amazonaws.com/graphql",
          region: 'us-east-1',
          defaultAuthMode: 'apiKey',
          apiKey: 'da2-tt7a24loa5ch7ceq7onemeej7a',
        },
      },
    });
    const result = await client.graphql({
      query: `
      mutation MyMutation ($id:ID!,$name:Name!,$category: Category!,$image:Image!,$unit:Unit!,$price:Price){
        updateProduct(input: {id: $id, name: $name, price: $price,category:$category,image:$image,unit:$unit}) {
          name
          id
        }
      }
      
      `,
     
      variables: {
        id:product.id,
        name:product.name,
        price:product.price,
        category:product.category,
        image: product.image,
        unit:product.unit,
      },
    });

    console.log('success', result);
    // return result.data.updateProduct;
  } catch (error) {
    console.error('Error:', error);
    throw error;
  }
};