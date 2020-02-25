class Chronometer {
  constructor() {
    // this.currentTime = currentTime
    // this.intervalId = intervalId
    this.currentTime = 0
    this.intervalId = 0
  }

  startClick() {
    let that = this;
    this.intervalId = setInterval(function () {
      that.currentTime++
      //console.log(that.currentTime++);
      //return this.currentTime ++;
      
    }, 1000);
  }
    
  
  // https://stackoverflow.com/questions/3733227/javascript-seconds-to-minutes-and-seconds

  getMinutes() {
    let minutes = 0
    // ~~ is a shorthand for Math.floor
    minutes = ~~(this.currentTime / 60);
    console.log(minutes)
    return minutes
  }

  getSeconds() {
    let seconds = 0
    let minutes = 0
    minutes = ~~(this.currentTime / 60);
    seconds = Math.ceil(this.currentTime - minutes);
    console.log(seconds)
    return seconds
  }

  twoDigitsNumber(num) {
    num = '' + num
    if (num < 10){
      return "0" + num
    } else {
      return num
    }
  }

  stopClick() {
    clearInterval(this.intervalId);
  }

  resetClick() {
    this.currentTime = 0
  }

}

  


  // splitClick() {}
