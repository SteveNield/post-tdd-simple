var Basket = require('./shopping-basket'),
    should = require('chai').should();

describe('shopping-basket', function(){
  var basket;

  beforeEach(function(){
    basket = Basket();
  })

  function testAddingAndRetrievingProducts(products){
    it('allows products to be added.  Test Case: '+JSON.stringify(products), function(){
      products.map(basket.addProduct);
      basket.viewProducts().should.deep.equal(products);
    })
  }

  testAddingAndRetrievingProducts([{ id: 123 }, { id: 456 }]);
  testAddingAndRetrievingProducts([{ id: 789 }, { id: 555 }]);

  function testTotalPriceCalculation(products, expectedTotal){
    it('calculates the basket total. Test Case: '+expectedTotal, function(){
      products.map(basket.addProduct);
      basket.getTotalPrice().should.equal(expectedTotal);
    })
  }

  testTotalPriceCalculation([{ price: 23.99 }, { price: 2.99 }], 26.98);
  testTotalPriceCalculation([{ price: 45.00 }, { price: 89.48 }], 134.48);

  function testDiscountApplied(products, discountPercentage, expectedDiscountedTotal){
    it('applies discount and calculates total.  Test Case: '+expectedDiscountedTotal, function(){
      products.map(basket.addProduct);
      basket.applyPercentageDiscount(discountPercentage);
      basket.getDiscountedTotalPrice().should.equal(expectedDiscountedTotal);
    })
  }

  testDiscountApplied([{ price: 11.98 }, { price: 14.11 }], 10, 23.72);
  testDiscountApplied([{ price: 24.45 }, { price: 15.88 }], 30, 31.02);
})
