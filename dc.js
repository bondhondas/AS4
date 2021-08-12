function deliveryCost(tshirtQuantity) {
    const tshirtf = 100;
    const tshirts = 80;
    const tshirtlast = 50;

     
    if  (typeof(tshirtQuantity)  ==  'string') {
        throw 'variables are not integer';    
    } 
    else if (tshirtQuantity <= 100) {
        const count = tshirtQuantity * tshirtf;
        return count;
    } else if (tshirtQuantity <= 200) {
        const firstts = 100 * tshirtf;
        const resttshirt = tshirtQuantity - 100;
        const sects = resttshirt * tshirts;
        const totalcost = firstts + sects;
        return totalcost;
    } else {
        const firstts = 100 * tshirtf;
        const sects = 100 * tshirts;
        const lastts = tshirtQuantity - 200;
        const finalts = lastts * tshirtlast;
        const totalcost = firstts + sects + finalts;
        return totalcost;
    }
}

const tshirtxxxx = deliveryCost(250);
console.log(tshirtxxxx);