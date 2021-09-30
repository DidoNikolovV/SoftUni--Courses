function solve() {
   let textArea = document.getElementsByTagName('textarea')[0];
   let shoppingCart = document.getElementsByClassName('shopping-cart')[0].addEventListener('click', addProduct);
   console.log(shoppingCart);
   let addButton = document.querySelectorAll('.shopping-cart .add-product');
   let checkButton = document.getElementsByClassName('checkout')[0].addEventListener('click', checkOut);
  
   let cart = [];
   let totalMoney = 0;

   function addProduct(e){
     if(e.target.tagName == 'BUTTON' && e.target.classList.contains('add-product')) {
         let product = e.target.parentElement.parentElement
         let name = product.querySelector('.product-title').textContent;
         let price = Number(product.querySelector('.product-line-price').textContent);

         cart.push({
            name,
            price
         })

         textArea.textContent += `Added ${name} for ${price} to the cart.\n`;
     }
   }

   function checkOut(){
      for(let value of Object.values(cart)) {
         console.log(value);
      }
   }

   
   

}