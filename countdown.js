
const openingAfter = new Date("Tue May 25 2022 00:00:00 GMT+0530 (India Standard Time)").getTime();
const today = new Date().getTime();



const timer = setInterval(() => {
        const today = new Date().getTime();
        const distance = openingAfter - today;

        const days = Math.ceil(distance / 8.64e+7);
        const hours = Math.ceil(distance % ((1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.ceil((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.ceil((distance % (1000 * 60)) / 1000);


        document.querySelector('.days').innerHTML = `${days}`;
        document.querySelector('.hours').innerHTML = `${hours}`;
        document.querySelector('.minutes').innerHTML = `${minutes}`;
        document.querySelector('.seconds').innerHTML = `${seconds}`;



        if (distance < 0) {
                clearInterval(timer);
                document.getElementById("demo").innerHTML = "EXPIRED";
        }

}, 1000)

