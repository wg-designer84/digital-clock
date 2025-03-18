const hour = document.getElementById('hours');
const minute = document.getElementById('minutes');
const second = document.getElementById('seconds');
const ampm = document.getElementById('ampm');

function updateClock() {
    let h = new Date().getHours(); // Get current hour in 24-hour format
    let m = new Date().getMinutes();
    let s = new Date().getSeconds();

    // Store AM/PM
    let period = h >= 12 ? 'PM' : 'AM';

    // Convert to 12-hour format
    if (h > 12) {
        h = h - 12;
    }

    if (h === 0) {
        h = 12; // Handle the case where 0 (midnight) should be 12
    }

    // Add zeros manually
    h = h < 10 ? "0" + h : h;
    m = m < 10 ? "0" + m : m;
    s = s < 10 ? "0" + s : s;

    // Update the clock elements 
    hour.innerText = h;
    minute.innerText = m;
    second.innerText = s;
    ampm.innerText = period; // Display AM/PM
}

// Call the updateClock function every second (1000 ms)
setInterval(updateClock, 1000);

// Call the function
updateClock();
