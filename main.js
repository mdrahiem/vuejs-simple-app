const app = Vue.createApp({
  data() {
    return {
      cart: 0,
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
