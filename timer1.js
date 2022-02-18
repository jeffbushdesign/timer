/*
Challenge
Implement an alarm clock / timer which will beep after a specified amount of time has passed. The user can specify an unlimited number of alarms using command line arguments

Example usage:

node timer1.js 10 3 5 15 9 
This will make it beep at:

3 seconds
5 seconds
9 seconds
10 seconds
15 seconds
System Sound (Beep / Ding)
A quick google search shows that in order to make our machine perform a system sound, we can simply output the following special character to stdout.

process.stdout.write('\x07');
Remember, it's always good to validate something like this. Run the above command in the node REPL to make sure the sound is working. Since the host operating system performs the beep, it will sound different based on the OS that we're on. We're happy so long as we get a sound. If it's not working, we can switch to sending a visible character like "." to stdout.

Edge Cases
With every software project, developers need to think about edge cases.

Confirm that our script can handle some common edge cases.

For this app, we can think of at least these three:

No numbers are provided: Easy. It should just not beep at all and end immediately since no beeps should get scheduled.
An input is a negative number: Ignore/skip any numbers that are negative. We can't schedule anything in the past.
An input is not a number: Ignore/skip these as well, instead of attempting to call setTimeout with a non-number.
*/
// Input: command line:
// node timer1.js 10 3 5 15 9 
// This will make it beep at:

// 3 seconds
// 5 seconds
// 9 seconds
// 10 seconds
// 15 seconds

// process.stdout.write('BEEP!');

const timer = function () {
  // get only the 3rd and onwards array items: 0,1 are not used
  const args = process.argv.slice(2);
  // console.log(args);

  for (const item of args) {
    // console.log(item);
    setTimeout(() => {
      // process.stdout.write(item);
      // process.stdout.write('\x07');
      console.log(`${item} second timer says: BEEP!`);
    }, item * 1000);
    // item * 1000: time in js is an milliseconds, 10 s x 1000ms = 10,000 ms = 10 s
  };

};

// Call the function
timer();

// const sentance = "|/-\|/-\|\|/-\|/-\|\|/-\|/-\|\|/-\|/-\|\n";
// let arr = sentance.split('');
// for (const item in arr) {
//   setTimeout(() => {
//     process.stdout.write('\r' + arr[item]);
//   }, 200 * item);
// };


// Older code that uses CLI
/*
const sum = function() {
  const args = process.argv.slice(2); // get only the 3rd and 4th indexed array items
  let total = 0; // total variable starts at 0
  for (let i = 0; i < args.length; i++) { // loop through all the items in the array
    total = total + Number(args[i]); // update the total by adding each array item. number converts string array items to numbers
  }
  console.log(total); // print the total
};

sum(); // call the sum function
*/
