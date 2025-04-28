$(document).ready(function() {
    // Function to update the time
    function updateTime() {
        var now = new Date();
        var hours = now.getHours();
        var minutes = now.getMinutes();
        var seconds = now.getSeconds();
        
        // Add leading zeros if needed
        hours = hours < 10 ? "0" + hours : hours;
        minutes = minutes < 10 ? "0" + minutes : minutes;
        seconds = seconds < 10 ? "0" + seconds : seconds;
        
        // Format the time string
        var timeString = hours + ":" + minutes + ":" + seconds;
        
        // Update the time display
        $("#current-time").text(timeString);
    }
    
    // Update time immediately when page loads
    updateTime();
    
    // Then update every second
    setInterval(updateTime, 1000);
});