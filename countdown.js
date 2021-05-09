
const openingAfter = new Date("Tue May 25 2022 00:00:00 GMT+0530 (India Standard Time)").getTime();
const today = new Date().getTime();



const timer = setInterval(() => {
        const today = new Date().getTime();
        const distance = openingAfter - today;

        const days = Math.ceil(distance / 8.64e+7);
        const hours = Math.ceil(distance % ((1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.ceil((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.ceil((distance % (1000 * 60)) / 1000);

        document.querySelector('.openingAfter').innerHTML = `
        <h1 class="days">${days}<span>Days</span></h1>
        <h1 class="days">${hours}<span>Hours</span></h1>
        <h1 class="days">${minutes}<span>Minutes</span></h1>
        <h1 class="days">${seconds}<span>Seconds</span></h1>`;



        if (distance < 0) {
                clearInterval(timer);
                document.getElementById("demo").innerHTML = "EXPIRED";
        }

}, 1000)

