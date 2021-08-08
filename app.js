const app = Vue.createApp({
  data() {
    return {
      hours: 0,
      minutes: 0,
      seconds: 0,
      intervalId: null,
    };
  },
  methods: {
    startTimer() {
      let intervalId = setInterval(() => this.seconds++, 1000);
      this.intervalId = intervalId;
    },
    stopTimer() {
      clearInterval(this.intervalId);
    },
  },
});

app.mount("#timer");
