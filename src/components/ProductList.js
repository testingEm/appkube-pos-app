import React from 'react';

const ProductList = ({products}) => {
  if (!products) {
    return null; // or display a loading indicator or message
  }

  return (
    // <div>
    //   <h2>Product List</h2>
    //   <ul>
    //     {products.map((product) => (
    //       <li key={product.product_id}>
    //         <h3>{product.product_details.name}</h3>
    //         <p>Price: ${product.product_details.price}</p>
    //         <p>Description: {product.product_details.description}</p>
    //       </li>
    //     ))}
    //   </ul>
    // </div>
    <></>
  );
};

export default ProductList;
