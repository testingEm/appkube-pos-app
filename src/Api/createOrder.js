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
          "https://r7q2x3svonbvbg3qt4da6diuty.appsync-api.us-east-1.amazonaws.com/graphql",
          region: 'us-east-1',
          defaultAuthMode: 'apiKey',
          apiKey: 'da2-tt7a24loa5ch7ceq7onemeej7a',
        },
      },
    });
    const result = await client.graphql({
      query: `
        mutation CreateOrder($paymentMethod: PaymentCategory!, $totalPrice: Float!, $customerOrdersId: ID!) {
          createOrder(input: { paymentMethod: $paymentMethod, totalPrice: $totalPrice, customerOrdersId: $customerOrdersId }) {
            id
            totalPrice

          }
        }
      `,
      variables: {
        paymentMethod: order.paymentMethod,
        totalPrice: order.totolPrice,
        customerOrdersId: order.user.id,
      },
    });

    console.log('success', result);
    return result.data.createOrder;
  } catch (error) {
    console.error('Error:', error);
    throw error;
  }
};