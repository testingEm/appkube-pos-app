import {Amplify} from 'aws-amplify';
import {generateClient} from 'aws-amplify/api';
// import { API } from 'aws-amplify';
const client = generateClient();

export const creatingCustomer = async (details) => {
  console.log('in creating customer', details);
  try {
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
              mutation  MyMutation($name: String!, $phone: String!) {
                createCustomer(input: {name: $name, phone: $phone}) {
                  name
                  phone
                  
                }
              }
            `,
      variables: {
        name: details.name,
        phone: details.phone, // Replace this with the actual total price value
      },
    });

    console.log('success', result);
    return result.data.createOrder;
  } catch (error) {
    console.error('Error :', error);
  }
};
