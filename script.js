function addToCart(productName, productPrice) {

    let quantity = prompt(`Сколько вы хотите заказать? (${productName})`, "1");
  

    if (quantity === null
       || quantity === ""
       || isNaN(quantity) 
       || quantity <= 0) {
      alert("Вы не ввели корректное количество.");
      return;
    }
  
    
  
    let totalPrice = productPrice * quantity;
  
    let confirmOrder = confirm(
      `Вы выбрали ${quantity} шт. "${productName}" на сумму ${totalPrice} сум. Оформить заказ?`
    );
  

    if (confirmOrder) {
      alert("Ваш заказ принят! Спасибо за покупку.");
    } else {
      alert("Вы отменили заказ.");
    }
  }
  