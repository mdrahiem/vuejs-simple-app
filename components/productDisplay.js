app.component("product-display", {
  props: {
    premium: {
      type: Boolean,
      required: true,
    },
  },
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
        <p>{{shipping}}</p>
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
      selectedVariant: 0,
      details: ["50% cotton", "30% wool", "20% polyester"],
      variants: [
        { id: 2234, color: "green" },
        { id: 2235, color: "blue" },
      ],
    };
  },
  methods: {
    updateCart() {
      this.$emit("add-to-cart", this.selectedVariant);
    },
    handleColorHover(color) {
      if (color === "green") {
        this.image = "./assets/images/socks_green.jpg";
      } else {
        this.image = "./assets/images/socks_blue.jpg";
      }
      this.selectedVariant = this.variants.find((v) => v.color === color).id;
    },
    removeCart() {
      this.$emit("remove-from-cart", this.selectedVariant);
    },
  },
  computed: {
    shipping() {
      if (this.premium) {
        return "free";
      }
      return "2.99";
    },
  },
});
