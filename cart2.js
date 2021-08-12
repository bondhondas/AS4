const cart = [
    { name: 'shirt', price: 100, quantity: 1 },
    { name: 'pant', price: 200, quantity: 1 },
    { name: 'shoes', price: 500, quantity: 1 }

];
let totalSales = 0;
for (const product of cart) {
    const productTotal = product.price * product.quantity;

    totalSales = totalSales + productTotal;
}
console.log(totalSales);