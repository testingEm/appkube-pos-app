import { Amplify } from "aws-amplify";
import { generateClient } from 'aws-amplify/api';

const client = generateClient();

 export  const fetchingOrders = async ()=>{
  console.log('in fetching');
      try{
        await Amplify.configure({
          API: {
            GraphQL: {
              endpoint: "https://r7q2x3svonbvbg3qt4da6diuty.appsync-api.us-east-1.amazonaws.com/graphql",
              region: 'us-east-1',
              defaultAuthMode: 'apiKey',
<<<<<<< HEAD
              apiKey: 'da2-6f52wp2npzd3vgd2nmm5vwigra'
=======
              apiKey: 'da2-tt7a24loa5ch7ceq7onemeej7a'
>>>>>>> f641019caae99090915a266d7e9f412f6f6dcb45
            }
          }
        });
        var result = await client.graphql({
          query: `
            query ListOrders(
                $filter: ModelOrderFilterInput
                $limit: Int
                $nextToken: String
              ) {
                listOrders(filter: $filter, limit: $limit, nextToken: $nextToken) {
                  items {
                    id
                    totalPrice
                    createdAt
                    updatedAt
                    _version
                    _deleted
                    _lastChangedAt
                    __typename
                  }
                  nextToken
                  startedAt
                  __typename
                }
              }
          `,
        });
        console.log('orders result ',result);
      }
      catch (error) {
        console.error('Error fetching orders:', error);
      } 
      
      return result
    
    }