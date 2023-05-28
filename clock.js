function formatTime(hours, minutes, seconds, ampm) {
    // Convert from 24-hour to 12-hour format
    if (hours > 12) {
      hours = hours - 12;
    } else if (hours === 0) {
      hours = 12;
    }
  
    // Add leading zeros to minutes and seconds
    if (minutes < 10) {
      minutes = "0" + minutes;
    }
    if (seconds < 10) {
      seconds = "0" + seconds;
    }
  
    // Return formatted time
    return `${hours}:${minutes}:${seconds} ${ampm}`;
  }
  
  function updateTime() {
    // Get current date and time
    const now = new Date();
    let hours = now.getHours();
    let minutes = now.getMinutes();
    let seconds = now.getSeconds();
    let ampm = hours < 12 ? "AM" : "PM";
  
    // Format time
    let formattedTime = formatTime(hours, minutes, seconds, ampm);
  
    // Update clock display
    const clock = document.getElementById("clock");
    clock.innerHTML = formattedTime;
  }
  
  // Update time every second
  setInterval(updateTime, 1000);