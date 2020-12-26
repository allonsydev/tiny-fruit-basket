function fruitBasket() {
  let basket = {};

  let fruit1 = prompt("Pick a fruit!", "");

  if (fruit1 == "" || fruit1 == null) {
    return (document.getElementById("js-out").innerHTML =
      "Ok, no fruits in the basket today!");
  }

  basket[fruit1] = prompt(`How many ${fruit1}?`, "");

  let fruit2 = prompt("Pick another fruit!", "");
  basket[fruit2] = prompt(`How many ${fruit2}?`, "");

  document.getElementById(
    "js-out"
  ).innerHTML = `🧺 The basket has ${basket[fruit1]} ${fruit1} and ${basket[fruit2]} ${fruit2}!`;

  console.log(basket);
}
