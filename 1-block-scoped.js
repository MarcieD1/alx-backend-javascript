export default function taskBlock(trueOrfalse) {
  const task = false;
  const task2 = true;

  if (trueOrfalse) {
    const task = true; // eslint-disable-line no-unused-vars
    const task2 = false; // eslint-disable-line no-unused-vars
   }

   return [task, task2];
}
