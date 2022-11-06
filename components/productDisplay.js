app.component("product-display", {
  template: /*html*/ `
  <div class="product-display">
    <div class="product-container">
      <div class="product-image">
        <!-- image goes here -->
          <img :src="image" />
      </div>
      <div class="product-info">
        <h1>{{ product }}</h1>
        <p v-if="inventory > 10">In Stock</p>
        <p v-else-if="inventory <= 10 && inventory > 0">Almost sold out!</p>
        <p v-else="inventory">Out of Stock</p>
        <p v-if="onSale">On Sale!</p>
        <ul>
          <li v-for="detail in details" :key="detail">{{detail}}</li>
        </ul>
        <div v-for="variant in variants" :key="variant.id" @mouseover="handleColorHover(variant.color)"
        :style="{'background-color': variant.color}" class="color-circle"></div>
        <button class="button" @click="updateCart">Add to cart</button>
        <button class="button" @click="removeCart">Remove from cart</button>
      </div>
    </div>
  </div>`,
  data() {
    return {
      product: "Socks",
      image: "./assets/images/socks_green.jpg",
      inventory: 11,
      onSale: false,
      details: ["50% cotton", "30% wool", "20% polyester"],
      variants: [
        { id: 2234, color: "green" },
        { id: 2235, color: "blue" },
      ],
    };
  },
  methods: {
    updateCart() {
      this.cart++;
    },
    handleColorHover(color) {
      if (color === "green") {
        this.image = "./assets/images/socks_green.jpg";
      } else {
        this.image = "./assets/images/socks_blue.jpg";
      }
    },
    removeCart() {
      if (this.cart > 0) {
        this.cart--;
      }
    },
  },
});
