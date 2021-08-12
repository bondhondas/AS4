// 1st prb solution:
 
function  seerToMon(seer)  {        
    if  (typeof(seer)  ==  'string') {
        throw 'input variable is not integer';        
    }  
    var  Mon  =  seer  /  40;    
    return  Mon; 
} 
var  Mon  =  seerToMon(400);
console.log(Mon);

//2nd prb solution: 

 
function  totalSales(p1,  p2,  p3)  {    
    if  (typeof(p1, p2, p3)  ==  'string') {
        throw 'variables are not integer';    
    } 
    else {         
        const  cart  =   [     {  name:   'shirt',  price:  100,  quantity:  p1  },          {  name:   'pant',  price:  200,  quantity:  p2  },          {  name:   'shoes',  price:  500,  quantity:  p3  }

                
        ];    
        let  totalSales  =  0;    
        for  (const  product  of  cart)  {        
            const  productTotal  =  product.price  *  product.quantity;         
            totalSales  =  totalSales  +  productTotal;    
        }

            
        return  totalSales;
    }
    const totalsale = totalSales(1, 2, 3);
    console.log(totalsale);


    // 3rd prb solution:


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

    // 4rd prb solution:
    let names = ['max', 'wax', 'akash', 'rasel', 'jibon'];

    function  prefectFriend(friends) {    
        if (friends.length === 0) {
            throw 'Erro'
        }
        for  (let  friend  of  friends) {    
            if (friend.length > 4) {
                return friend
            }
        }
    }
    console.log(prefectFriend(names));