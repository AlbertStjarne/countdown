function countDown() {
  // Set the date we're counting down to
  var countDownDate = new Date("Jan 28, 2019 12:10:00").getTime();
  
      // Get todays date and time
      var now = new Date().getTime();
      
      // Find the distance between now and the count down date
      var distance = countDownDate - now;
      
      // Time calculations for days, hours, minutes and seconds
      var days = Math.floor(distance / (1000 * 60 * 60 * 24));
      var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      var seconds = Math.floor((distance % (1000 * 60)) / 1000);
      
      // Output the result
      document.getElementById("days").innerHTML = days;
      document.getElementById("hours").innerHTML = hours;
      document.getElementById("minutes").innerHTML = minutes;
      document.getElementById("seconds").innerHTML = seconds;

      // Actions when the countdown is over
      if (distance < 0) {
          clearTimeout();
          document.getElementById("end").innerHTML = "Congrats girl, you are free now ;-)";

          let remove = document.getElementsByClassName("remove");
          let i;
          for(i = 0; i < remove.length; i++) {
            remove[i].innerHTML = "";
          }
      }
  setTimeout(countDown, 1000);
  }
  countDown();