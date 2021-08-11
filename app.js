const app = Vue.createApp({
  data() {
    return {
      hours: 0,
      minutes: 0,
      seconds: 0,
      intervalId: null,
      isDisabled: false,
    };
  },

  methods: {
    // TODO fix timer bug if user clicks "Start" twice or more, maybe same for "Stop"
    startTimer() {
      const intervalId = setInterval(() => {
        this.seconds++;

        if (this.seconds > 59) {
          this.seconds = 0;
          this.minutes++;
        }

        if (this.minutes > 59) {
          this.minutes = 0;
          this.hours++;
        }
      }, 1000);

      this.intervalId = intervalId;
      this.isDisabled = true;
    },
    stopTimer() {
      clearInterval(this.intervalId);
      this.isDisabled = false;
    },
    restartTimer() {
      this.hours = 0;
      this.seconds = 0;
      this.minutes = 0;
      this.isDisabled = false;

      clearInterval(this.intervalId);
    },
  },
});

app.mount("#timer");
