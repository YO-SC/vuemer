const app = Vue.createApp({
  data() {
    return {
      seconds: 0,
      minutes: 0,
      hours: 0,

      intervalId: null,
      isDisabled: false,
    };
  },

  methods: {
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
      this.minutes = 0;
      this.seconds = 0;
      this.hours = 0;

      clearInterval(this.intervalId);
      this.isDisabled = false;
    },
  },
});

app.mount("#timer");

// Pop-up Modal
let dialog = document.querySelector("dialog");
let showDialogButton = document.querySelector("#show-dialog");

if (!dialog.showModal) {
  dialogPolyfill.registerDialog(dialog);
}

showDialogButton.addEventListener("click", function () {
  dialog.showModal();
});
dialog.querySelector(".close").addEventListener("click", function () {
  dialog.close();
});
