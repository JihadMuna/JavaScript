const ShopList = ['bread', 'milk', 'banana', 'rice'];
const lengthOfShopList = [];
for (let i=0; i<ShopList.length; i++){
    const string = ShopList[i];
    const length = string.length;
    lengthOfShopList.push(length);
}
console.log(lengthOfShopList);