//Create an arry with spinner characters
//create a timer that increments by 200 each loop
//if the timer is under x, spin


const spinner = ["\r|  ", "\r/", "\r-", "\r\\"];
let timer = 0
for (let spin = 0; spin < spinner.length; spin++) {
  setTimeout(() => {
    process.stdout.write(spinner[spin]);
  }, timer);
  timer += 200;
} 
