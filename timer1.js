const timer = function () {
  // get only the 3rd and onwards array items: 0,1 are not used
  const args = process.argv.slice(2);

  // check if no inputs have been passed
  if (args.length < 1) {
    console.log('Error: Timer cannot be created because no inputs were given.');
    return;
  }

  // loop through args array which contains all the input values
  // (CLI inputs are automatically converted to strings)
  for (const item of args) {
    // turn each of the items into a number
    // if the item isn't a number it will be turned into NaN
    // NaN is a falsey value, this is important in the next step
    let num = Number(item);

    // if num is true
    if (num) {
      // check for negative numbers
      if (item < 0) {
        // skip negative numbers
        continue;
      } else {
        setTimeout(() => {
          console.log(`${item} second timer says: BEEP!`);
        }, item * 1000);
        // item is the input time
        // item * 1000 converts the time into seconds 
        // (since time in js is in ms)
      }
    } else {
      // non numbers will be turned in NaN by the Number() function.
      // NaN is false
      // so this is saying 'if it's not a number, then just continue'
      continue;
    }
  }
};

// Call the function
timer();

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
