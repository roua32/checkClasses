class Product {
  constructor(id, name, price) {
    this.id = id;
    this.name = name;
    this.price = price;
  }
}

const p1 = new Product(1, "Iphone", 2400);
const p2 = new Product(2, "LapTop", 3200);
const p3 = new Product(3, "TV", 9500);
console.log(p1);
console.log(p2);
console.log(p3);

class ShoppingCartItem {
  constructor(product, quantity) {
    this.product = product;
    this.quantity = quantity;
  }
  getTotalPrice() {
    return this.product.price * this.quantity;
  }
}
let cartItem1 = new ShoppingCartItem(p1, 2);
let cartItem2 = new ShoppingCartItem(p3, 3);
console.log(cartItem1);
console.log(cartItem2);
const t1 = cartItem1.getTotalPrice();
console.log(t1);
const t2 = cartItem2.getTotalPrice();
console.log(t2);

class ShoppingCart {
  constructor() {
    this.cart = [];
  }
  //   Additems(item) {
  //     this.cart.push(item);
  //     console.log(`add ${item.product.name}- ${item.quantity}`);
  //   }
  Additems(items) {
    this.cart = [...items];
    console.log(this.cart);
  }
  //   total() {
  //     const total = this.cart.reduce(
  //       (acc, curr) => acc + curr.product.price * curr.quantity,
  //       0
  //     );
  //     console.log(`Total : ${total}`);
  //   }

  total() {
    let total = this.cart.reduce((acc, curr) => acc + curr.getTotalPrice(), 0);
    console.log(`Total : ${total}`);
  }
  removeItem(id) {
    const index = this.cart.findIndex((elt) => elt.product.id === id);
    if (index !== -1) {
      const removedItem = this.cart.splice(index, 1);
      console.log(`Removed : ${removedItem[0].product.name}`);
    } else {
      console.log("Item was not found");
    }
  }
  displayItems() {
    this.cart.forEach((elt, i) =>
      console.log(
        `${i + 1} / ${elt.product.name} | ${elt.product.price} $ - ${
          elt.quantity
        }`
      )
    );
  }
}
const myCart = new ShoppingCart();
myCart.Additems([cartItem1, cartItem2]);
myCart.total();
myCart.removeItem(3);
myCart.displayItems();
