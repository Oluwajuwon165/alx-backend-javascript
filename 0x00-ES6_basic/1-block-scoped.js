export default function taskBlock(trueOrFalse) {
  var task = false;
  var task2 = true;

  if (trueOrFalse) {
    let task_jhay = true;
    let task2_jhay = false;	  
    task = task_jhay;	  
    task2 = task2_jhay;
  }

  return [task, task2];
}
