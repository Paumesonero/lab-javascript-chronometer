class Chronometer {
  constructor() {
    this.currentTime = 0;
    this.intervalId = null;
  }

  start(callback) {

    if (callback) {
      this.intervalId = setInterval(() => {
        this.currentTime++
      }, 1000)

    } else {
      this.intervalId = setInterval(() => {
        this.currentTime++
        console.log(this.currentTime)
      }, 1000)
    }
  }


  getMinutes() {
    let minutesPassed = Math.floor(this.currentTime / 60)
    return `${minutesPassed} minutes have passed`
  }

  getSeconds() {
    let secondsPassed = this.currentTime % 60
    return `${secondsPassed} seconds have passed`
  }

  computeTwoDigitNumber(value) {
    let twoDigitStr = ('0' + value).slice(-2);
    console.log(twoDigitStr);
    console.log(typeof twoDigitStr)
    return twoDigitStr;

  }

  stop() {
    clearInterval(this.intervalId)
  }

  reset() {
    this.currentTime = 0;
  }

  split() {
    return `${this.computeTwoDigitNumber(this.getMinutes())} and ${this.computeTwoDigitNumber(this.getSeconds())}`
  }
}

// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = Chronometer;
}
