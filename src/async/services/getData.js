( async () => {

  const response = await fetch('https://dummyjson.com/products/1');
  
  const data = await response.json();

  console.log(data); {"id": 1,"title": "iPhone 9","description": "An apple mobile which is nothing like apple","price": 549,"discountPercentage": 12.96, ...}
})();