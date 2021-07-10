module.exports = () => {
  const data = {
    products: [],
  }
  for (let i = 0; i < 1000; i++) {
    data.products.push({
      id: i + 1,
      price: Math.ceil((Math.random() + 1) * 10),
      title: `Camiseta ${i + 1}`
    })
  }
  return data;
}