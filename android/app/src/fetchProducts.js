import { Amplify, API } from 'aws-amplify';
import amplifyconfig from './amplifyconfiguration.json'
import { generateClient } from 'aws-amplify/api';

Amplify.configure(amplifyconfig);
const client = generateClient();

console.log(Amplify.getConfig()); // Use configure without getConfig

const query = `
  query GetAllProducts {
    getAllProducts {
      product_id
      product_details {
        name
        price
        description
      }
      category_id
    }
  }
`;

export const fetchProducts = async () => {
    try {
        const result = await client.graphql({ query });
        return result.data.getAllProducts
    } catch (error) {
        console.error('Error fetching data:', error);
    }
};

