// // import { Entypo } from "@expo/vector-icons";
// import { Amplify } from "aws-amplify";
// import { generateClient } from 'aws-amplify/api';

// const client = generateClient();

//  export  const fetchPro = async ()=>{
//       try{
//         await Amplify.configure({
//           API: {
//             GraphQL: {
//               endpoint: 'https://rcvvni5tqzb4lorqzgibgi4wc4.appsync-api.us-east-1.amazonaws.com/graphql',
//               region: 'us-east-1',
//               defaultAuthMode: 'apiKey',
//               apiKey: 'da2-mjccl5jhqvbdvg67pe4sklvwty'
//             }
//           }
//         });
//         var result = await client.graphql({
//           query: `
//             query ListProducts {
//               listProducts {
//                 items {
//                   id
//                   image
//                   name
//                   price
//                   unit
//                   category
//                 }
//               }
//             }
//           `,
//         });
//       }
//       catch (error) {
//         console.error('Error fetching categories:', error);
//         setError('Error fetching categories');
//       } 
//       return result
//     
//     }