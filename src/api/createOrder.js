import {Amplify} from 'aws-amplify';
import {generateClient, graphqlOperation} from 'aws-amplify/api';

const client = generateClient();
<<<<<<< HEAD

 export  const creatingOrder = async (order)=>{
      try{
        await Amplify.configure({
          API: {
            GraphQL: {
              endpoint: 'https://rcvvni5tqzb4lorqzgibgi4wc4.appsync-api.us-east-1.amazonaws.com/graphql',
              region: 'us-east-1',
              defaultAuthMode: 'apiKey',
              apiKey: 'da2-6f52wp2npzd3vgd2nmm5vwigra'
            }
          }
        });
        const result = await client.graphql({
          query: `
              mutation CreateOrder($totalPrice: Float!) {
                createOrder(input: { totalPrice: $totalPrice }) {
                  id
                  totalPrice
                }
              }
            `,
          variables: {
            totalPrice: order.total, // Replace this with the actual total price value
          },
        });
    
        console.log('success',result)
        return result.data.createOrder;
=======
export const creatingOrder = async (order) => {
  console.log('creating order api', order);
  try {
    await Amplify.configure({
      API: {
        GraphQL: {
          endpoint:
          "https://r7q2x3svonbvbg3qt4da6diuty.appsync-api.us-east-1.amazonaws.com/graphql",
          region: 'us-east-1',
          defaultAuthMode: 'apiKey',
          apiKey: 'da2-tt7a24loa5ch7ceq7onemeej7a',
          apiKey: 'da2-tt7a24loa5ch7ceq7onemeej7a',
        },
      },
    });
    const result = await client.graphql({
      query: `
      mutation CreateOrder($items: [OrderItemInput]!,$paymentMethod: PaymentCategory!, $totalPrice: Float!, $customerOrdersId: ID!) {
        createOrder(input: {
          status:FULFIL,
          items: $items,
          paymentMethod: $paymentMethod,
          totalPrice: $totalPrice,
          customerOrdersId: $customerOrdersId
        }) {
          id
          totalPrice
        }
>>>>>>> f641019caae99090915a266d7e9f412f6f6dcb45
      }
      
      `,
      variables: {
        items: order.items,
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