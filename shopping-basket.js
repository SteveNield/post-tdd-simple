module.exports = function(){
  var state = {
    products: [],
    discountPercentage: 0
  }

  function _calculateBasketTotal(){
    return state.products.reduce(function(acc, product){
      return acc + product.price;
    }, 0.0);
  }

  function _formatDecimalAsCurrency(decimal){
    return Number(decimal.toFixed(2));
  }

  function addProduct(product){
    state.products.push(product);
  }

  function viewProducts(){
    return state.products;
  }

  function getTotalPrice(){
    return _formatDecimalAsCurrency(_calculateBasketTotal());
  }

  function applyPercentageDiscount(discountPercentage){
    state.discountPercentage = discountPercentage;
  }

  function getDiscountedTotalPrice(){
    var total = _calculateBasketTotal();
    var discountFactor = (state.discountPercentage / 100) + 1;
    return _formatDecimalAsCurrency((total / discountFactor));
  }

  return {
    addProduct: addProduct,
    viewProducts: viewProducts,
    getTotalPrice: getTotalPrice,
    applyPercentageDiscount: applyPercentageDiscount,
    getDiscountedTotalPrice: getDiscountedTotalPrice
  }
}
