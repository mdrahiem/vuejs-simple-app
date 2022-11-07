app.component("review-form", {
  /*html*/
  template: `<form class="review-form" @submit.prevent="onSubmit">
    <h3>Leave a review</h3>
    <label for="name">Name:</label>
    <input id="name" v-model="name">
    <label for="review">Review:</label>      
    <textarea id="review" v-model="review"></textarea>
    <label for="rating">Rating:</label>
    <select id="rating" v-model.number="rating">
      <option>5</option>
      <option>4</option>
      <option>3</option>
      <option>2</option>
      <option>1</option>
    </select>
    <!-- solution -->
    <label for="recommend">Would you recommend this product?</label>
    <select id="recommend" v-model="recommend">
      <option>Yes</option>
      <option>No</option>
    </select>
    <!-- solution -->   
    <input class="button" type="submit" value="Submit">  
  </form>`,
  data() {
    return {
      name: "",
      review: "",
      rating: null,
      recommend: null,
    };
  },
  methods: {
    onSubmit() {
      if (!this.name || !this.review || !this.rating || !this.recommend)
        return alert("Complete review is mandatory!");
      const { name, review, rating, recommend } = this;
      const reviewObj = {
        name,
        review,
        rating,
        recommend,
      };
      this.$emit("review-submitted", reviewObj);
      this.name = "";
      this.review = "";
      this.rating = null;
      this.recommend = null;
    },
  },
});
