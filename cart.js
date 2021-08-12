function totalSales(p1, p2, p3) {

    const cart = [
        { name: 'shirt', price: 100, quantity: p1 },
        { name: 'pant', price: 200, quantity: p2 },
        { name: 'shoes', price: 500, quantity: p3 }

    ];
    let totalSales = 0;
    for (const product of cart) {
        const productTotal = product.price * product.quantity;
        totalSales = totalSales + productTotal;
    }

    return totalSales;


}
const totalsale = totalSales(1, 2, 3);
console.log(totalsale);