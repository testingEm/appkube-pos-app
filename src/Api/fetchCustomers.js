import { Amplify } from "aws-amplify";
import { generateClient } from 'aws-amplify/api';

const client = generateClient();

 export  const fetchingCustomers = async ()=>{
  console.log('in fetching customers');
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
        var result = await client.graphql({
          query: `
          query MyQuery {
            listCustomers {
              items {
                id
                name
                phone
                
              }
            }
          }
          `,
        });
        console.log('customers result ',result.data.listCustomers.items);
        return result.data.listCustomers.items
      }
      catch (error) {
        console.error('Error fetching customers:', error);
      } 
      
    
    }