app.component("product-details", {
  props: {
    details: {
      required: true,
    },
  },
  template: /* html */ `<h1>Details {{details}}</h1>`,
});
