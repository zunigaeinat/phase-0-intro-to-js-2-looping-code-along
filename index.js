const name = ["Becca", "Max", "Gab"];
const eventName = "birthday"
function writeCards(names, eventName) {
  let greetings = [];

  for (let i = 0; i < names.length; i++) {
    let message = `Thank you, ${names[i]}, for the wonderful surprise gift!`;
    greetings.push(message);
  }

  return greetings;
}

function countDown(num) {
 while (num >= 0) {
  console.log(num);
  num--;
 }
}
countDown(10)