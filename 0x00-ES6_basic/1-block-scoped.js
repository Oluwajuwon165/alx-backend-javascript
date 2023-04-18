<<<<<<< HEAD
// Modifying the variables inside the function taskBlock so that the
// variables aren’t overwritten inside the conditional block.
=======
/*Modifying the variables inside the function taskBlock so that the
variables aren’t overwritten inside the conditional block.*/
>>>>>>> dadf7de208dc7fd8239c18a12650912c6227ab68
export default function taskBlock(trueOrFalse) {
  let task = false;
  let task2 = true;

  if (trueOrFalse) {
    task = true;
    task2 = false;
  }

  return [task, task2];
}
