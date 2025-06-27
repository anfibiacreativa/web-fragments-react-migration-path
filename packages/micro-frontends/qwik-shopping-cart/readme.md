## Add an item to the shopping cart posting a message

```javascript
const product = {
  id: 3,
  name: 'Vue.js Developer Hoodie',
  description: 'For developers who love Vue.js!',
  price: 39.99,
  color: 'Green',
  size: 'L',
  imageUrl: 'https://placehold.co/300x400',
  rating: 4.7,
};

const base64Product = btoa(JSON.stringify(product));

window.postMessage({ type: 'add_to_cart', product: base64Product }, '*');
````
