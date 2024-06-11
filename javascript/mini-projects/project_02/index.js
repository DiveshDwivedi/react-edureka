// const api_url = `https://fakestoreapi.com/products/1`;


// async function fetch_data() {
//   const res = await fetch(`${api_url}/1`);
//   let result = await res.json();
//   console.log(result);
// }

// fetch_data();

// function fetchProductDetails(api_url) {
//     console.log(api_url);
//     return new Promise((resolve, rej) => {
//     const result =  fetch(api_url);
//         !result ? rej(api_url) : resolve(result)
//     })
// }


// fetchProductDetails(api_url).then(() => {
//     console.log(res);
// }).catch(() => {
//     console.log(api_url + ' is invalid');
// })


const api_url = `https://fakestoreapi.com/products/`;

function fetchProductDetails(productId) {
  return fetch(`${api_url}${productId}`)
    .then((response) => {
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      return response.json();
    })
    .then((productDetails) => {
      return productDetails;
    })
    .catch((error) => {
      console.error('Error fetching product details:', error);
    });
}

// Example usage:
fetchProductDetails(1).then((productDetails) => {
  console.log(productDetails);
});
