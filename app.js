const app = Vue.createApp({
  data() {
    return {
      test: "hello",
      userInputTop: "",
      userInputBottom: "",
    };
  },
  methods: {
    handleAlert() {
      alert("Hello World! ");
    },
    handleUserInput(event) {
      this.userInputTop = event.target.value;
    },
    handleUserInputBottom() {
      console.log("hello");
      this.userInputBottom = this.userInputTop;
    },
  },
});

app.mount("#assignment");
