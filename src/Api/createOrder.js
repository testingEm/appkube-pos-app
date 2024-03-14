import {Amplify} from 'aws-amplify';
import {generateClient, graphqlOperation} from 'aws-amplify/api';

const client = generateClient();

export const creatingOrder = async (order) => {
  try {
    console.log('creating order api', order);
    await Amplify.configure({
      API: {
        GraphQL: {
          endpoint:
            'https://rcvvni5tqzb4lorqzgibgi4wc4.appsync-api.us-east-1.amazonaws.com/graphql',
          region: 'us-east-1',
          defaultAuthMode: 'apiKey',
          apiKey: 'da2-6f52wp2npzd3vgd2nmm5vwigra',
        },
      },
    });
    const result = await client.graphql({
      query: `
              mutation CreateOrder($paymentMethod: String! ,$totalPrice: Float!, $customerOrdersId: String!) {
                createOrder(input: {paymentMethod: $paymentMethod, totalPrice: $totalPrice, customerOrdersId: $customerOrdersId}) {
                  id
                }
              }
            `,
      variables: {
        paymentMethod: order.paymentMethod,
        totalPrice: order.totolPrice,
        customerOrdersId: order.id, 
      },
    });

    console.log('success', result);
    return result.data.createOrder;
  } catch (error) {
    console.error('Error :', error);
    throw error;
  }
};
