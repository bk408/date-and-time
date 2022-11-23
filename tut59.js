console.log("This is Date and Time tutorial");

let now = new Date();       
console.log(now);

// let dt = new Date(10000);
// console.log(dt);


// let newDate = new Date("2029-09-25");
// console.log(newDate);

// let newDate = new Date(year, month, date, hours, minutes, seconds, miliseconds);
let newDate = new Date(3020, 5, 15,6,20,25,34);
console.log(newDate);

let yr = newDate.getFullYear();
console.log("The year is" ,    yr);

let dt = newDate.getDate();
console.log("The date is" ,    dt);          // this is how we get a particular year, month , date, seconds, etc.

let month = newDate.getMonth();
console.log("The Month is" ,    month);

let seconds = newDate.getSeconds();
console.log("The seconds is" , seconds);

let utdt = newDate.getUTCDate();
console.log("The utdt is" , utdt);


newDate.setDate(5);
console.log(newDate);

newDate.setDate(32);             // we can change date, hours seconds etc.
console.log(newDate);


newDate.setSeconds(30);
console.log(newDate);

newDate.setMinutes(55);
console.log(newDate);


setInterval(() => {
    updateTime();
}, 1000);

function updateTime() {
    time.innerHTML = new Date();
}