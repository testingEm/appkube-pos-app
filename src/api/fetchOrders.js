import { Amplify } from "aws-amplify";
import { generateClient } from 'aws-amplify/api';

const client = generateClient();

 export  const handleApi = async ()=>{
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
      }
      catch (error) {
        console.error('Error fetching categories:', error);
        setError('Error fetching categories');
      } 
      return result
    
    }