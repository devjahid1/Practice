const products=[
    {id: 1, name: 'walton phone', price: '14000'},
    {id: 2, name: 'Samsung phone', Price: '35000'},
    {id: 3, name: 'Pixel Phone', price: '63000'},
    {id: 4, name: 'iphone Phone Laptop', price: '195000'},
    {id: 5, name: 'xiomi phone', price: '22000'},
    {id: 6, name: 'intel phone', price: '12000'},
    {id: 7, name: 'oppo phone', price: '19000'},
    {id: 8, name: 'Vivo phone', price: '24000'},
]

function matchProducts(products, search){
    const matched = [];
    for(const product of products){
        if(product.name.includes(search)){
            matched.push(product);
        }
    }
    return matched;
}
const result = matchProducts(products, 'phone');
console.log(result);