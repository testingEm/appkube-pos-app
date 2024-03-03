import { Amplify } from "aws-amplify";
import { generateClient ,graphqlOperation} from 'aws-amplify/api';

const client = generateClient();

 export  const handleApi = async (order)=>{
      try{
        await Amplify.configure({
          API: {
            GraphQL: {
              endpoint: 'https://rcvvni5tqzb4lorqzgibgi4wc4.appsync-api.us-east-1.amazonaws.com/graphql',
              region: 'us-east-1',
              defaultAuthMode: 'apiKey',
              apiKey: 'da2-mjccl5jhqvbdvg67pe4sklvwty'
            }
          }
        });
        const mutation = `
        mutation MyMutation($totalPrice: ) {
        createOrder(input: {totalPrice: $totalPrice}) {
          id
          totalPrice
        }
      }
    `;

    var result = await client.graphql(graphqlOperation(mutation,{ totalPrice : Order.totalPrice }));
      }
      catch (error) {
        console.error('Error :', error);
        
      } 
      return result
    
    }